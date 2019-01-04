import { NgModule } from '@angular/core';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module'
@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    imports: [ 
        /** We dont even use any of the CommonModule directives*/
        FormsModule,
        AuthRoutingModule
     ],
    exports: [],
    providers: [],
})

export class AuthModule {}