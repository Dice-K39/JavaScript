import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { environment } from '../../my-environment/environment';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
	constructor(
		private http: HttpClient,
		private recipeService: RecipeService,
		private authService: AuthService
	) {}

	storeRecipes() {
		const recipes = this.recipeService.getRecipes();
		console.log(environment.API_URL);
		this.http.put(`${environment.API_URL}/recipes.json`, recipes).subscribe((response) => {
			console.log(response);
		});
	}

	fetchRecipes() {
		return this.authService.user.pipe(
			take(1),
			exhaustMap((user) => {
				return this.http.get<Recipe[]>(`${environment.API_URL}/recipes.json`, {
					params: new HttpParams().set('auth', user.token)
				});
			}),
			map((recipes) => {
				return recipes.map((recipe) => {
					return {
						...recipe,
						ingredients: recipe.ingredients ? recipe.ingredients : []
					};
				});
			}),
			tap((recipes) => {
				this.recipeService.setRecipes(recipes);
			})
		);
	}
}
