import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteUserDialog } from './delete-user.dialog';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    DeleteUserDialog
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class DeleteUserModule { }
