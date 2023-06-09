import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MychartComponent } from './mychart/mychart.component';
import { RegisterComponent } from './register/register.component';
import { UserlistingComponent } from './userlisting/userlisting.component';

const routes: Routes = [
  {path:'', component:HomeComponent,canActivate:[AuthGuard]},
  {path:'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'userlisting', component:UserlistingComponent, canActivate:[AuthGuard]},
  {path: 'mychart', component:MychartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
