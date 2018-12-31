import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  ingredients: Ingredient[];
  constructor(private slService: ShoppingListService) { }

  ngOnInit() { }

  onAddItem(form: NgForm) {
    const value = form.value;
    // const ingredientName = this.nameInputRef.nativeElement.value;
    // const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }
}
