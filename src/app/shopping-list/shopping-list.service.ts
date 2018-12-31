import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    /** 
     * The better practice is to use Subject
     * ingredientsChanged = new EventEmitter<Ingredient[]>();
      * A Subject is a special type of Observable that allows values to be
      * multicasted to many Observables. Subjects are like EventEmitters.
      *
      * Every Subject is an Observable and an Observer. You can subscribe to a
      * Subject, and you can call next to feed values as well as error and complete.
      *
      */
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ];

    getIngredients() {
        return [...this.ingredients]
    }
    
    getIngredient(index: number) {
        return this.ingredients[index];
    }
    addIngredient(ingredient: Ingredient) {
        //dealing with array copies, avoiding mutating original
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
         this.ingredients.splice(index, 1);
         this.ingredientsChanged.next(this.ingredients.slice());
    }
}