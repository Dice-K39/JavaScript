import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit
{
    recipes: Recipe[] = [
        new Recipe(
            "Test",
            "Test if it works.",
            "https://img.kidspot.com.au/50sixjAj/w643-h428-cfill-q90/kk/2020/11/easy-cinnamon-breakfast-scrolls-recipe-604936-2.jpg"),
        new Recipe(
            "Another Test",
            "Another test if the loop works.",
            "https://www.uaex.uada.edu/life-skills-wellness/food-nutrition/eating-well/EFNEP/images/Recipes-Banner.jpg")
    ];
    
    constructor()
    {

    }

    ngOnInit(): void
    {

    }

}
