import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  details = false;
  // count = 0;
  clicks = [];

  displayDetails()
  {
    this.details = !this.details;
    // this.clicks.push(++this.count);
    // this.clicks.push(this.clicks.length + 1);
    this.clicks.push(new Date());
  }

  // getBackgroundColor()
  // {
  //   return this.count >= 5 ? "blue" : "white";
  // }
}
