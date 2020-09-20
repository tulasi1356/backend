import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
public matter = '';
  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }
  signupForm = this.fb.group(
    {
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatpassword: ['', [Validators.required]]
    })
 
  ngOnInit(): void {
  }
  routelogin(path) {
    this.router.navigate([path]);
  }
  Onsubmit() {
    this.auth.generalsignup(this.signupForm.value).subscribe(
      data => { 
        console.log(data,'datta');
        if(data === 'account exists') {
          this.matter = data;
        }
        // this.signupLoader = false;
        // if(data.status){
        // // localStorage.setItem('forward',''); 
        // this.snackbar.open("An account verification mail is sent. Please check.","ok",{duration:20000});
        // this.router.navigate(['/login']);
      }
    );
  }
}
