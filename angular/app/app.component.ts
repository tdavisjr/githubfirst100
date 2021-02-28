import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { UsersComponent } from './users/users.component';

import { UsersService } from './users/users.service';

@Component({
  selector: 'my-app',
  template:
    `
  <my-header></my-header>
  <my-loader *ngIf="isLoading"></my-loader>
  <my-users *ngIf="!isLoading" [users]="users"></my-users>  
  `,

  directives: [
    HeaderComponent,
    LoaderComponent,
    UsersComponent
  ],
  providers: [
    UsersService
  ]
})
export class AppComponent implements OnInit {
  users: any[];
  isLoading: boolean;

  constructor(private usersService: UsersService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.usersService.getUsers().then(users => {
      this.users = users
      this.isLoading = false;
    });
  }

}