import { Component, OnInit } from '@angular/core';
import { Ng7BootstrapBreadcrumbService } from 'ng7-bootstrap-breadcrumb';

import { Recipe } from '../../../services/recipe/recipe';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  recipe: Recipe;

  constructor(
    private ng7BootstrapBreadcrumbService: Ng7BootstrapBreadcrumbService
  ) {}

  ngOnInit() {
    const breadcrumb =  {customText: 'This is Custom Text', dynamicText: 'Current Recipe'};
    this.ng7BootstrapBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
  }

}
