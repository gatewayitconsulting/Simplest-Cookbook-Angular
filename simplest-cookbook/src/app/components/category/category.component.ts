import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Recipe } from '../../services/recipe/recipe';
import { RecipeService } from '../../services/recipe/recipe.service';
import { RECIPES } from 'src/app/data/recipe/mock-recipes';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }
}
