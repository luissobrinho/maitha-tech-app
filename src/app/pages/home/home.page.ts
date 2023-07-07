import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {firstValueFrom} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {CreateUserDto} from "../../dtos/user/create-user.dto";
import {User} from "../../models/user/user.model";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {EditUserDialog} from "../../components/edit-user/edit-user.dialog";
import {DeleteUserDialog} from "../../components/delete-user/delete-user.dialog";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  public displayedColumns: string[] = ['name', 'email', 'actions'];
  public dataSource: User[] = [];

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly userService: UserService,
    private readonly dialog: MatDialog,
    private readonly snackBar: MatSnackBar
  ) {
  }

  async ngOnInit() {
    await this.loadUser();
  }

  async loadUser() {
    this.dataSource = await firstValueFrom(this.userService.getAllUsers())
  }

  logoff() {
    void firstValueFrom(this.authService.signOut());
  }

  async register() {
    if (this.form.invalid) return;
    const user = this.form.getRawValue() as CreateUserDto;
    await firstValueFrom(this.userService.createUser(user))
      .then(() => {
        this.loadUser();
        this.snackBar.open('SUcesso')
        this.form.reset();
        this.form.updateValueAndValidity();
      });
  }

  editUser(user: User): void {
    const dialogRef = this.dialog.open(EditUserDialog, {
      data: user
    });

    dialogRef.afterClosed().subscribe(async (updatedUser: User) => {
      if (updatedUser) {
        await firstValueFrom(this.userService.updateUser(updatedUser._id, {
          name: updatedUser.name,
          email: updatedUser.email
        }))
          .then((newUser) => {
            this.loadUser()
            this.snackBar.open('SUcesso')
          });
      }
    });
  }

  deleteUser(user: User): void {
    const dialogRef = this.dialog.open(DeleteUserDialog, {
      data: user
    });

    dialogRef.afterClosed().subscribe(async confirmation => {
      if (confirmation) {
        await firstValueFrom(this.userService.deleteUser(user._id))
          .then(() => {
            this.loadUser()
            this.snackBar.open('SUcesso')
          });
      }
    });
  }
}
