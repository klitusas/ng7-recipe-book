import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
// import { RecipeService } from './recipes/recipe.service';
import { HttpModule } from '@angular/http';
// import { DataStorageService } from './shared/data-storage.service';
// import { AuthService } from './auth/auth.service';
// import {AuthGuard} from './auth/auth-guard.service'
/** 
 * We remove import statement, so that webpack doesnt add this module 
 * (and all the inports containing in this module) to our initial bundle.
*/
// import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
@NgModule({
  declarations: [
    //That how it should look like
    AppComponent
  ],
  imports: [
    /** 
     * BrowserModule already contains all the features of the CommonModule
     * and additional features that needed at the start of the app
    */
    BrowserModule,
    /** 
     * has to be before AppRoutingModule
     * so the RecipesModule could use the routing
    */
   /** 
    * LAZY LOADING
    * We always loaded eagerly because we we importing it here,
    * That means that at the point our application launches
    * EVERYTHING here is imported
   */
    // RecipesModule,
    AppRoutingModule,
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    //loaded eagerly
    CoreModule
  ],
  // providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
