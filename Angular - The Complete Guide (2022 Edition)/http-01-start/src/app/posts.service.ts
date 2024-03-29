import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';

import { Post } from './post.model';
import { environment } from '../environments/environment';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
	error = new Subject<string>();

	constructor(private http: HttpClient) {}

	createAndStorePost(title: string, content: string) {
		const postData: Post = { title: title, content: content };

		this.http
			.post<{ name: string }>(`${environment.API_URL}/posts.json`, postData, {
				observe: 'response',
				responseType: 'json'
			})
			.subscribe(
				(responseData) => {
					console.log(responseData);
				},
				(error) => {
					this.error.next(error.message);
				}
			);
	}

	fetchPosts() {
		let searchParams = new HttpParams();

		searchParams = searchParams.append('print', 'pretty');
		searchParams = searchParams.append('custom', 'key');

		return this.http
			.get<{ [key: string]: Post }>(`${environment.API_URL}/posts.json`, {
				headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
				params: searchParams
			})
			.pipe(
				map((responseData) => {
					const postsArray: Post[] = [];

					for (const key in responseData) {
						if (responseData.hasOwnProperty(key)) {
							postsArray.push({ ...responseData[key], id: key });
						}
					}

					return postsArray;
				}),
				catchError((errorRes) => {
					return throwError(errorRes);
				})
			);
	}

	clearPosts() {
		return this.http
			.delete(`${environment.API_URL}/posts.json`, {
				observe: 'events',
				responseType: 'text'
			})
			.pipe(
				tap((event) => {
					console.log(event);

					if (event.type === HttpEventType.Sent) {
						// ...
					}

					if (event.type === HttpEventType.Response) {
						console.log(event.body);
					}
				})
			);
	}
}
