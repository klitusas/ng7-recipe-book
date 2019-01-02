import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) { }

    storeRecipes() {
        return this.http.put('https://ng-recipe-book-b1647.firebaseio.com/recipes.json',
            this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get('https://ng-recipe-book-b1647.firebaseio.com/recipes.json')
            .map((response: Response) => {
                /** 
                 * making sure we always have ingredients key in database
                 * even if there is no ingredients, because we want to fullfll
                 * our Recipe model
                */
                const recipes: Recipe[] = response.json();

                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe)
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            })
            .subscribe((recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            })
    }
}