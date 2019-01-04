import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './core/home/home.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
    // {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    /** 
     * We only have one shopping-list route therefore
     * it makes little sense to create seperate routing module
    */
    { path: 'shopping-list', component: ShoppingListComponent },

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }