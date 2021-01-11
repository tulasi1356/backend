import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {BounceInAnimationDirective} from './directives/gsap/bounce-in-animations';
import {FadeInAnimationDirective} from './directives/gsap/fade-in-animation.directive';
import {ContinousrotationInAnimationDirective} from './directives/gsap/rotations-in-animations';
import {MovingInAnimationDirective} from './directives/gsap/moving-in-animations';
// MAT FIELDS
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
// import { HttpModule } from '@angular/http';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { VerificationComponent } from './verification/verification.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SellformComponent } from './sellform/sellform.component';
import {MatSelectModule} from '@angular/material/select';
import { GiftComponent } from './gift/gift.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { LikedComponent } from './liked/liked.component';
import { BagComponent } from './bag/bag.component';

@NgModule({
  declarations: [
    AppComponent,
    BounceInAnimationDirective,
    FadeInAnimationDirective,
    ContinousrotationInAnimationDirective,
    MovingInAnimationDirective,
    RegisterComponent,
    LoginComponent,

    VerificationComponent,
    NavbarComponent,
    HomepageComponent,
    SellformComponent,
    GiftComponent,
    SidebarComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    LikedComponent,
    BagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClient,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
