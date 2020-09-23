import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
public verify = false;
  constructor(private fb: FormBuilder,private auth: AuthService,private snackbar: MatSnackBar) {
    this.Onsubmit();
   }

  ngOnInit(): void {
  }

  showSnackbar(message) {
    console.log('snckbar')
    this.snackbar.open(message, "ok", { duration: 15000 });
  }
  Onsubmit() {
  this.auth.generalverification().subscribe(
    data => {
      console.log(data,'datta');
      if(data === 'invalid') {
        // this.matter = data;
        this.showSnackbar("incorrect code");
      } else if(data === "email is verified") {
        this.verify = true;
        this.showSnackbar("email verification is completed");
      } else {
        this.showSnackbar("check mail id");
      }
    }
  )
  }
}

