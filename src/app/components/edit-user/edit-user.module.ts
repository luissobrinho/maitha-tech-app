import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditUserDialog} from './edit-user.dialog';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    EditUserDialog
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class EditUserModule {
}
