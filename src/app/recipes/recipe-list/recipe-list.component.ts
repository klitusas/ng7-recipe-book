import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  //dont need to provide the parent component has it injected
})
export class RecipeListComponent implements OnInit {

   //must be an array of Recipes (Recipe[])
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { 
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
