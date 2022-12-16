import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { environment } from '../../my-environment/environment';
import { Recipe } from '../recipes/recipe.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
	constructor(private http: HttpClient, private recipeService: RecipeService) {}

	storeRecipes() {
		const recipes = this.recipeService.getRecipes();
		console.log(environment.API_URL);
		this.http.put(`${environment.API_URL}/recipes.json`, recipes).subscribe((response) => {
			console.log(response);
		});
	}

	fetchRecipes() {
		return this.http.get<Recipe[]>(`${environment.API_URL}/recipes.json`).pipe(
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
