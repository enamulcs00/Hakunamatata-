import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AddEditComponent } from './users/add-edit.component';
import { Component, TemplateRef, ViewChild } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({ selector: 'app-root',
templateUrl: './app.component.html' })
export class AppComponent {
    user: User;
@ViewChild(AddEditComponent)comp:AddEditComponent
    constructor(private accountService: AccountService,private http: HttpClient) {
        this.accountService.user.subscribe(x => this.user = x);
        var object = environment.obj
     let   result = Object
            .keys(object)
            .map(k => ({ name: object[k],code:k }));

console.log('Object',result);

    }

    logout() {
        this.accountService.logout();
    }
ngOnInit(): void {

        const   student = {Name:"Ramu",age:'23',gap:4}
        const {age} = student
        console.log('age');

console.log(this.comp,'comp');



}
}
