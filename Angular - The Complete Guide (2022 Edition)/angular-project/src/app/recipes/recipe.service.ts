import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
			'A Test Recipe',
			'This is simply a test',
			'https://www.thereciperebel.com/wp-content/uploads/2022/05/chicken-spaghetti-TRR-1200-24-of-49-568x498.jpg'
		),
		new Recipe(
			'Another Test Recipe',
			'This is simply a test',
			'https://www.thereciperebel.com/wp-content/uploads/2022/05/chicken-spaghetti-TRR-1200-24-of-49-568x498.jpg'
		)
	];

	getRecipes() {
		return this.recipes.slice();
	}
}
