import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RecipeService } from '../recipes/recipe.service';
import { environment } from '../../my-environment/environment';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
	constructor(private http: HttpClient, private recipeService: RecipeService) {}

	storeRecipes() {
		const recipes = this.recipeService.getRecipes();

		this.http.put(`${environment.API_URL}/recipes.json`, recipes).subscribe((response) => {
			console.log(response);
		});
	}
}
