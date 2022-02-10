import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = "";
  // allowReset = false;

  // onInputUserName(event)
  // {
  //   if (event.target.value !== "")
  //   {
  //     this.allowReset = true;
  //   }
  //   else
  //   {
  //     this.allowReset = false;
  //   }
  // }

  resetTextField()
  {
    this.username = "";
    // this.allowReset = false;
  }
}
