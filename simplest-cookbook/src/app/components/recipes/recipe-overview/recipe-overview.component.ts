import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipesService }  from '../recipes.service';
import { Recipe } from '../recipe';


@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.scss']
})
export class RecipeOverviewComponent implements OnInit {
  recipes$: Observable<Recipe[]>;
  selectedId: number;
  constructor(
    private service: RecipesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recipes$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getRecipes();
      })
    );
  }

}
