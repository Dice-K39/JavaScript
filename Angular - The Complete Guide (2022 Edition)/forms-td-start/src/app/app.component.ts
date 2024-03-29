import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild('f', { static: false }) signupForm: NgForm;
	defaultQuestion = 'teacher';
	answer = '';
	genders = ['male', 'female'];
	user = {
		username: '',
		email: '',
		secretQuestion: '',
		answer: '',
		gender: ''
	};
	submitted = false;

	suggestUserName() {
		const suggestedName = 'Superuser';

		// overwrites inputs
		// need ngForm to use
		// this.signupForm.setValue({
		// 	userData: {
		// 		username: suggestedName,
		// 		email: ''
		// 	},
		// 	secret: 'pet',
		// 	questionAnswer: '',
		// 	gender: 'male'
		// });

		// better method
		this.signupForm.form.patchValue({
			userData: {
				username: suggestedName
			}
		});
	}

	// onSubmit(form: NgForm) {
	// 	console.log(form);
	// }

	onSubmit() {
		this.submitted = true;
		this.user.username = this.signupForm.value.userData.username;
		this.user.email = this.signupForm.value.userData.email;
		this.user.secretQuestion = this.signupForm.value.userData.secret;
		this.user.answer = this.signupForm.value.userData.questionAnswer;
		this.user.gender = this.signupForm.value.userData.gender;

		this.signupForm.reset();
	}
}
