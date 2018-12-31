import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  /** 
   * For using reactive approach we need FormGroup
  */
  recipeForm: FormGroup;
  imagePath: string;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
      }
    )
  }
  onUrlChanged(){
    this.imagePath = this.recipeForm.value.imagePath
  }
  onSubmit() {
    console.log(this.recipeForm)
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).controls.push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl()
      })
    )
  }

  getControls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  /** 
   * Initializing form
   * should call it each time our route params change
  */
  private initForm() {
    
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([])
    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      this.imagePath = recipe.imagePath;
      recipeName = recipe.name; 
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      //if defined
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount)
          }))
        }
      }
    }
    this.recipeForm = new FormGroup({
        'name': new FormControl(recipeName),
        'imagePath': new FormControl(recipeImagePath),
        'description': new FormControl(recipeDescription),
        'ingredients': recipeIngredients
    })
  }

}
