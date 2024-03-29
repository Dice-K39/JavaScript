import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as RecipeActions from '../recipes/store/recipe.actions';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
	isAuthenticated = false;
	private userSub: Subscription;

	constructor(private store: Store<fromApp.AppState>) {}

	ngOnInit() {
		this.userSub = this.store
			.select('auth')
			.pipe(map((authState) => authState.user))
			.subscribe((user) => {
				this.isAuthenticated = !!user;
				console.log(!user);
				console.log(!!user);
			});
	}

	onSaveData() {
		this.store.dispatch(new RecipeActions.StoreRecipes());
	}

	onFetchData() {
		this.store.dispatch(new RecipeActions.FetchRecipes());
	}

	onLogout() {
		this.store.dispatch(new AuthActions.Logout());
	}

	ngOnDestroy(): void {
		this.userSub.unsubscribe();
	}
}
