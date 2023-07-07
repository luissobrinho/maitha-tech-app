import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {SignUpModule} from "../../components/sign-up/sign-up.module";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {EditUserModule} from "../../components/edit-user/edit-user.module";
import {DeleteUserModule} from "../../components/delete-user/delete-user.module";


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    EditUserModule,
    DeleteUserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    SignUpModule,
    MatInputModule,
    MatTableModule
  ]
})
export class HomeModule { }
