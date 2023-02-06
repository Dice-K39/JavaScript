import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
	isAuthenticated = false;
	private userSub: Subscription;

	constructor(
		private dataStorageService: DataStorageService,
		private authService: AuthService,
		private store: Store<fromApp.AppState>
	) {}

	ngOnInit() {
		this.userSub = /*this.authService.user*/ this.store
			.select('auth')
			.pipe(map((authState) => authState.user))
			.subscribe((user) => {
				this.isAuthenticated = !!user;
				console.log(!user);
				console.log(!!user);
			});
	}

	onSaveData() {
		this.dataStorageService.storeRecipes();
	}

	onFetchData() {
		this.dataStorageService.fetchRecipes().subscribe();
	}

	onLogout() {
		this.store.dispatch(new AuthActions.Logout());
	}

	ngOnDestroy(): void {
		this.userSub.unsubscribe();
	}
}
