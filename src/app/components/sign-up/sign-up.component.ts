import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {firstValueFrom} from "rxjs";
import {SignUpDto} from "../../dtos/sign-up/sign-up.dto";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  @Output() onSignIn = new EventEmitter<void>();
  public form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    password_confirm: ['', [Validators.required]]
  }, { validator: this.passwordMatchValidator });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
  ) {
  }

  async register() {
    if (this.form.invalid) return;
    const user = this.form.getRawValue() as SignUpDto;
    await firstValueFrom(this.authService.signUp(user))
  }

  signIn() {
    this.onSignIn.emit();
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password')!;
    const confirmPasswordControl = formGroup.get('password_confirm')!;

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else {
      if (confirmPasswordControl.value) {
        confirmPasswordControl.setErrors(null);
      } else {
        confirmPasswordControl.setErrors({ invalid: true });
      }
    }
  }
}
