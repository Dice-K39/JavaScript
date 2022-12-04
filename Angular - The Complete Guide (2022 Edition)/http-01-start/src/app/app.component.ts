import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	loadedPosts = [];

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.fetchPosts();
	}

	onCreatePost(postData: { title: string; content: string }) {
		// Send Http request
		this.http.post(`${environment.API_URL}/posts.json`, postData).subscribe((responseData) => {
			console.log(responseData);
		});
	}

	onFetchPosts() {
		// Send Http request
		this.fetchPosts();
	}

	onClearPosts() {
		// Send Http request
	}

	private fetchPosts() {
		this.http.get(`${environment.API_URL}/posts.json`).subscribe((posts) => {
			console.log(posts);
		});
	}
}
