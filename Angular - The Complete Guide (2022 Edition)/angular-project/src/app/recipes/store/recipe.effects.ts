import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import * as RecipesActions from './recipe.actions';
import { Recipe } from '../recipe.model';
import { environment } from '../../../my-environment/environment';

@Injectable()
export class RecipeEffects {
	@Effect()
	fetchRecipes = this.actions$.pipe(
		ofType(RecipesActions.FETCH_RECIPES),
		switchMap(() => {
			return this.http.get<Recipe[]>(`${environment.API_URL}/recipes.json`);
		}),
		map((recipes) => {
			return recipes.map((recipe) => {
				return {
					...recipe,
					ingredients: recipe.ingredients ? recipe.ingredients : []
				};
			});
		}),
		map((recipes) => {
			return new RecipesActions.SetRecipes(recipes);
		})
	);

	constructor(private actions$: Actions, private http: HttpClient) {}
}
