import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
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
  imagechecking: boolean;
  constructor(private fb:FormBuilder,private router:Router) { }
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
    videolink:[''],
    



  })
  ngOnInit(): void {
  }
Onsubmit() {}
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
