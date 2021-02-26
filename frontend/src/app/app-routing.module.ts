import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VerificationComponent } from './verification/verification.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SellformComponent } from './sellform/sellform.component';
import { GiftComponent } from './gift/gift.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CardcreationComponent } from './cardcreation/cardcreation.component';
import { KidsComponent } from './kids/kids.component';
import { MenComponent } from './men/men.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'verify1', component: VerificationComponent},
  {path:'sell',component:SellformComponent},
  {path:'gift',component:GiftComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'cardcreated',component:CardcreationComponent},
  {path:'kids',component:KidsComponent},
  {path:'men',component:MenComponent},
  {path:'dashboard',component:DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
