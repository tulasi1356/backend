import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { SellserviceService} from '../../services/sellservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {AngularFireStorage} from '@angular/fire/storage';
// import {AngularFireStorageModule} from '@angular/fire/storage'
// import {AngularFireModule} from '@angular/fire'
@Component({
  selector: 'app-sellform',
  templateUrl: './sellform.component.html',
  styleUrls: ['./sellform.component.scss']
})
export class SellformComponent implements OnInit {
categories = ['Men', 'Women', 'Kids', 'Gift'];
colors = ['pink','yellow','red','green','blue','orange','white','black','brown','grey'];
public imagechoosentoupload = false
public selectedimage
public url;
filePath:String
  imagechecking: boolean;
  constructor(private fb:FormBuilder,private router:Router,private sell:SellserviceService,private snackbar: MatSnackBar,private afStorage: AngularFireStorage) { }
  sellproductform = this.fb.group({
    companyname: ['', Validators.required],
    productname: ['', Validators.required],
    category: ['', Validators.required],
    type: ['', Validators.required],
    brand: ['', Validators.required],
    color: ['', Validators.required],
    realprize: ['', Validators.required],
    discount: ['', Validators.required],
    age: ['', Validators.required],
    size:['',Validators.required],
    noofproducts:['',Validators.required],
    image:['',Validators.required],
    place:['',Validators.required],
    videolink:[''],
    



  })

  ngOnInit(): void {

  }
  upload($event) {    
    this.filePath = $event.target.files[0]
  }
  uploadImage(){
    console.log(this.filePath)
    this.afStorage.upload('/images'+Math.random()+this.filePath, this.filePath);
    
    console.log(this.afStorage.upload('/images'+Math.random()+this.filePath, this.filePath))
      
  }
Onsubmit() {
this.sell.generalsellform(this.sellproductform.value).subscribe(
  data => {
    if(data==='succesful') {
      this.showSnackbar('added successfully');

    } else {
      this.showSnackbar('something wrong try again');
    }
  }
)
}
showSnackbar(message) {
  console.log('snckbar')
  this.snackbar.open(message, "ok", { duration: 15000 });
}
selectFile(event) {
  this.imagechoosentoupload = true
  if (event.target.files.length > 0) {
    const file = event.target.files[0]
    this.selectedimage = event.target.files[0]
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imagechecking = true;
      this.url = event.target.result;
    }
    reader.readAsDataURL(file);

  }
}
}
