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
    videolink:[''],
    



  })
  ngOnInit(): void {
  }
Onsubmit() {}
}
