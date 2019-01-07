import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient, 
                private recipeService: RecipeService,
                private authService: AuthService) { }

    storeRecipes() {
        //const token = this.authService.getToken();
        // const headers = new HttpHeaders().set('Authorization', 'Bearer some token that comes from the backend').append('Content-Type', 'application/json');
        //return this.httpClient.put('https://ng-recipe-book-b1647.firebaseio.com/recipes.json',
        // return this.httpClient.put('https://ng-recipe-book-b1647.firebaseio.com/recipes.json?auth=' + token,
            //this.recipeService.getRecipes(), {
              //  observe: 'body',
                //params: new HttpParams().set('auth', token)
                /** 
                 * Thats how you can set, append, get .. headers with HttpHeaders
                */
                // headers: headers
            //});
            const req = new HttpRequest('PUT', 'https://ng-recipe-book-b1647.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
                reportProgress: true, 
                // params: new HttpParams().set('auth', token)
            });
           return this.httpClient.request(req)
    }

    getRecipes() {
        /** 
         * we could not put the get() to the 'then' block
         * because we have the observable returned there
         * this.authService.getToken()
            .then((token) => {
                        <-- here
            })
         * which we would be able to use in another component
         * because it is in the callback. Therefore we added a property
         * in the auth.service.ts called 'token';
        */
        
        // const token = this.authService.getToken();
        //now we can tell HttpClient which data we are getting back
        return this.httpClient.get<Recipe[]>('https://ng-recipe-book-b1647.firebaseio.com/recipes.json', {
            observe: 'body', // now it will not automatically extract the body of the response, we get full response,
            responseType: 'json' // default is json
        })
            //with HttpClient it is not of type Response anymore, it already assumes its json
            .map((recipes) => {
                /** 
                 * making sure we always have ingredients key in database
                 * even if there is no ingredients, because we want to fullfll
                 * our Recipe model
                */
                // const recipes: Recipe[] = response.json(); - due to HttpClient 

                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
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