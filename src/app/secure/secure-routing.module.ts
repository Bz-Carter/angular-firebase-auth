import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardComponent } from './dahsboard/dahsboard.component';
import { SecureComponent } from './secure.component';

const routes: Routes = [
  {
    path: 'secure', 
    component: SecureComponent,
    children: [
      { path: 'secure', pathMatch: 'full', redirectTo: 'secure/dashboard' },
      { path: 'dashboard', component: DahsboardComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
