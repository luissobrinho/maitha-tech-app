import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {LoginDto} from "../../dtos/login/login.dto";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  @Output() onSignUp = new EventEmitter<void>();

  public form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
  ) {
  }

  async login() {
    if (this.form.invalid) return;
    const user = this.form.getRawValue() as LoginDto;
    await firstValueFrom(this.authService.signIn(user))
  }

  signUp() {
    this.onSignUp.emit();
  }
}
