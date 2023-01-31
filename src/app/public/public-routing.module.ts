import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './authentications/forgot-password/forgot-password.component';
import { SignInComponent } from './authentications/sign-in/sign-in.component';
import { SignUpComponent } from './authentications/sign-up/sign-up.component';
import { VerifyEmailComponent } from './authentications/verify-email/verify-email.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '', 
    component: PublicComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
      { path: 'sign-in', component: SignInComponent },
      { path: 'register-user', component: SignUpComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'verify-email-address', component: VerifyEmailComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
