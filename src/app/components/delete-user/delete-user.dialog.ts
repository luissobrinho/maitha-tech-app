import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../models/user/user.model";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.dialog.html',
  styleUrls: ['./delete-user.dialog.scss']
})
export class DeleteUserDialog {
  constructor(
    public dialogRef: MatDialogRef<DeleteUserDialog>,
    @Inject(MAT_DIALOG_DATA) public user: User
  ) {}
}
