import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SnackBarComponent} from "./snack-bar.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    SnackBarComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatButtonModule
  ]
})
export class SnackBarModule { }
