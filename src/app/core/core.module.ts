import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

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
    providers: [],
})
export class CoreModule {}