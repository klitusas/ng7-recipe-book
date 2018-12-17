import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

   //must be an array of Recipes (Recipe[])
   recipes: Recipe[] = [ 
    new Recipe('A Test Recipe', 'This is simply a test', 'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_007.jpg'),
    new Recipe('A Test Recipe1', 'This is simply a test1', 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg')
  ]; 

  constructor() { 
    console.log(this.recipes)
  }

  ngOnInit() {
  }

}
