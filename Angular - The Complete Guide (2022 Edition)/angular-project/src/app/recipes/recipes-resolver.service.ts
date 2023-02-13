import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take } from 'rxjs/operators';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import * as fromApp from '../store/app.reducer';
import * as RecipeActions from '../recipes/store/recipe.actions';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
	constructor(
		private store: Store<fromApp.AppState>,
		private recipesService: RecipeService,
		private actions$: Actions
	) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		const recipes = this.recipesService.getRecipes();

		if (recipes.length === 0) {
			// return this.dataStorageService.fetchRecipes();
			this.store.dispatch(new RecipeActions.FetchRecipes());

			return this.actions$.pipe(ofType(RecipeActions.SET_RECIPES), take(1));
		} else {
			return recipes;
		}
	}
}
