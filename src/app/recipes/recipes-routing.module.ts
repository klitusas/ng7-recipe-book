import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipesRoutes : Routes = [
    {path: '', component: RecipesComponent, children: [
    /** 
     * {path: 'recipes', component: RecipesComponent, children: [
     * this wont work because we already registered it in app-routing.module.ts
     * we should simply make it an empty path because we want to load this at /recipes
     * because the whole RecipesModule is visited when we visit /recipes
    */
        {path: '', component: RecipesStartComponent},
        {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
    ]},
]
@NgModule({
    imports: [
        /** 
         * This is a child module .forChild 
        */
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}