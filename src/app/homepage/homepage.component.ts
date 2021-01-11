import { Component, OnInit } from '@angular/core';
import {TimelineMax} from 'gsap';
import {gsap} from 'gsap';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  // showP = true;
  constructor() { 
    
    // gsap.registerPlugin(ScrollTrigger);
    console.log(document.querySelector(".main-content"))
    if(document.querySelector(".main-content")) {
      console.log('exists');
    gsap.to('.main-content', {
      x: 500,
      rotation:360,
      // duration:3
    });
  } else {
    console.log('doesnt exit')
  }
   
  }

  ngOnInit(): void {
  }

}
