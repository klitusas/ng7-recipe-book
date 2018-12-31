import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  ingredients: Ingredient[];
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.slService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }
  ngOnDestroy() {
    /** 
     * Since the Subject type of subscritpion is done by us we need to
     * unsubscribe since angular wont clean it for us 
    */
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    // const ingredientName = this.nameInputRef.nativeElement.value;
    // const ingredientAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
  }
}
