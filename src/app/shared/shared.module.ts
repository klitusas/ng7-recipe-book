import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';


@NgModule({
    declarations: [DropdownDirective],
    exports: [
        CommonModule,
        /** 
         * WHY? Because to be able to use it we 
         * need to to export it. Because by default
         * everything you setup in a module is only available in
         * that module, and not available from outside.
         * To make it available you expolicitely have to export it
        */
        DropdownDirective
    ]
})
export class SharedModule {}