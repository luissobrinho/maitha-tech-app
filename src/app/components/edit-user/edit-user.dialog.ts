import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../models/user/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.dialog.html',
  styleUrls: ['./edit-user.dialog.scss']
})
export class EditUserDialog implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    _id: [],
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly dialogRef: MatDialogRef<EditUserDialog>,
    @Inject(MAT_DIALOG_DATA) public user: User
  ) {}

  ngOnInit(): void {
    this.form.patchValue(this.user)
  }

  saveChanges(): void {
    if (this.form.invalid) return;
    this.dialogRef.close(this.form.getRawValue());
  }
}
