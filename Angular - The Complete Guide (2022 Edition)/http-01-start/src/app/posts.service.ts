import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

import { Post } from './post.model';
import { environment } from '../environments/environment';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
	error = new Subject<string>();

	constructor(private http: HttpClient) {}

	createAndStorePost(title: string, content: string) {
		const postData: Post = { title: title, content: content };

		this.http.post<{ name: string }>(`${environment.API_URL}/posts.json`, postData).subscribe(
			(responseData) => {
				console.log(responseData);
			},
			(error) => {
				this.error.next(error.message);
			}
		);
	}

	fetchPosts() {
		return this.http.get<{ [key: string]: Post }>(`${environment.API_URL}/posts.json`).pipe(
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
		return this.http.delete(`${environment.API_URL}/posts.json`);
	}
}