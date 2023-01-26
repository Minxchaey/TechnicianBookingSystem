import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutUsComponent {
  ImagePath: string;
  Logo: string;
  constructor() {
    //image location
    this.ImagePath = '/assets/images/logo.png'
    this.Logo = '/assets/images/back.jpg'


  }

  ngOnInit() {
  }

}
