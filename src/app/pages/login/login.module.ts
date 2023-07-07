import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import {AuthService} from "../../services/auth/auth.service";
import {MatTabsModule} from "@angular/material/tabs";
import {SignInModule} from "../../components/sign-in/sign-in.module";
import {SignUpModule} from "../../components/sign-up/sign-up.module";


@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatTabsModule,
    SignInModule,
    SignUpModule,
  ],
  providers: [AuthService]
})
export class LoginModule { }
