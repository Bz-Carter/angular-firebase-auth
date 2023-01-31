import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SignInComponent } from './authentications/sign-in/sign-in.component';
import { SignUpComponent } from './authentications/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentications/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './authentications/verify-email/verify-email.component';
import { AuthService } from '../shared/services/auth.service';


@NgModule({
  declarations: [
    PublicComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  providers: [AuthService],
})
export class PublicModule { }
