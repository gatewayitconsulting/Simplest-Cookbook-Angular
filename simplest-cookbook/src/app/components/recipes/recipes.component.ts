import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../services/recipe/recipe';
import { RecipeService } from '../../services/recipe/recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  painless = false;
  quick = false;
  medium = false;
  slow = false;

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
    .subscribe(recipes => this.recipes = recipes);
  }
}
