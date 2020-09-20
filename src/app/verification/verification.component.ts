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

  constructor(private fb: FormBuilder,private auth: AuthService,private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }
  verificationform = this.fb.group(
    {
      code: ['', [Validators.required]],
    },
  )
  showSnackbar(message) {
    console.log('snckbar')
    this.snackbar.open(message, "ok", { duration: 15000 });
  }
  Onsubmit() {
  this.auth.generalverification(this.verificationform.value).subscribe(
    data => {
      console.log(data,'datta');
      if(data === 'invalid') {
        // this.matter = data;
        this.showSnackbar("incorrect code")
      } 
    }
  )
  }
}

