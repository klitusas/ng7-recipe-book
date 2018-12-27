import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    /** 
     * The better practice is to use Subject
     * ingredientsChanged = new EventEmitter<Ingredient[]>();
    */
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ]; 

    getIngredients() {
        return [...this.ingredients]
    }

    addIngredient(ingredient: Ingredient) {
        //dealing with array copies, avoiding mutating original
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}