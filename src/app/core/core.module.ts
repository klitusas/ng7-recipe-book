import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { LoggingInterceptor } from '../shared/logging.interceptor';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthGuard } from '../auth/auth-guard.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [ 
        //dropdownDirective
        SharedModule,
        //We need it because we have links
        AppRoutingModule
     ],
    exports: [
        // whilst we need it here in the Header
        // we also need it in our main module
        // because you always need your root routes in you AppModule
        AppRoutingModule,
        // because i am using the selector in my appComponent, must export
        HeaderComponent,
        // we dont need to export the HomeComponent 
        // because for routing you didnt have to export declaration
        
    ],
    /** 
     * It still provides one and same instance to you whole application,
     * because as seen on slides, Angular will merge them together as long 
     * as the core module is loaded eagerly.
    */
    providers: [
        ShoppingListService, 
        RecipeService, 
        DataStorageService, 
        AuthService,
        /** 
         * This tells angular what we will provide here is an HTTP interceptors. 
         * So please add it to the pipeline of interceptors you are aware of 
         * and you send every outgoing request through. So angular will do it automatically
         * but only if you registered an interceptor by doing this.
         * 
         * multi - tells angular you can have multiple of these
         * The order you set up here the order by which the request will travel for your interceptors.
        */
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
        //the only place we use AuthGuard is in  the recipes-routing.module.ts 
        // AuthGuard
    ],
})
export class CoreModule {}