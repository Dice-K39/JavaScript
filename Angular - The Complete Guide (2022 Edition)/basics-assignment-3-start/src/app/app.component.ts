import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	displayParagraph = false;
	log = [];

	onDisplay() {
		this.displayParagraph = !this.displayParagraph;
		// this.log.push(this.log.length + 1);
		this.log.push(new Date());
	}
}
