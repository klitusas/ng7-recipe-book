import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
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
    /** 
     * we can pass a second argument to forRoot 
     * and that is a javascript object where we can configure this router module
     * the default preloadingStrategy is - Dont preload
     * 
     * PreloadAllModules - This is a strategy which as the name implies pre-loads
     * all lazy loaded modules after the app has been loaded.
    */
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule { }