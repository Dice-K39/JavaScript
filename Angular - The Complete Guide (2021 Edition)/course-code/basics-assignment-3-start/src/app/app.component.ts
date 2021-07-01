import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
	isVisible = false;
	log = [];

	onClick()
	{
		this.isVisible = !this.isVisible;

		this.log.push(new Date());
	}
}
