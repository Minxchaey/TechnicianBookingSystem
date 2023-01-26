import { Component,ViewEncapsulation, } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent {
  ImagePath: string;
  Logo: string;
  constructor() {
    //image location
    this.ImagePath = '/assets/images/landing.png'
    this.Logo = '/assets/images/logo.png'


  }

  ngOnInit() {
  }

}
