import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  //dont need to provide the parent component has it injected
})
export class RecipeListComponent implements OnInit {

   //must be an array of Recipes (Recipe[])
  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { 
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
