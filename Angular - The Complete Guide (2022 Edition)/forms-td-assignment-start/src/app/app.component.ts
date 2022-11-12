import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild('f', { static: false }) signupForm: NgForm;
	submitted = false;
	defaultSub = 'advanced';
	userInput = {
		email: '',
		subscription: '',
		password: ''
	};

	onSubmit() {
		this.submitted = true;
		this.userInput.email = this.signupForm.value.userData.email;
		this.userInput.subscription = this.signupForm.value.userData.subscription;
		this.userInput.password = this.signupForm.value.userData.password;

		this.signupForm.reset();
	}
}
