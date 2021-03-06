import { Component, EventEmitter, Output } from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';
import { DataStorageService } from '../../shared/data-storage.service';
// import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService,
                private authService: AuthService) { }

    onSaveData() {
        this.dataStorageService.storeRecipes().subscribe((response) => {
            console.log(response)
        })
    }
    onFetchData(){
        this.dataStorageService.getRecipes();
    }
    onLogout(){
        this.authService.logout();
    }
    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}