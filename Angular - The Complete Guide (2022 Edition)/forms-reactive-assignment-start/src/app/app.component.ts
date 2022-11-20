import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	projectForm: FormGroup;
	forbiddenProjectNames = ['Test'];

	ngOnInit() {
		this.projectForm = new FormGroup({
			projectData: new FormGroup({
				projectName: new FormControl(
					null,
					[Validators.required, this.forbiddenNames],
					this.asyncForbiddenNames
				),
				email: new FormControl(null, [Validators.required, Validators.email]),
				status: new FormControl('')
			})
		});
	}

	onSubmit() {
		console.log(this.projectForm);
	}

	forbiddenNames(control: FormControl): { [s: string]: boolean } {
		if (control.value === 'Test') {
			return { nameIsForbidden: true };
		}

		return null;
	}

	asyncForbiddenNames(control: FormControl): Promise<any> | Observable<any> {
		const promise = new Promise<any>((resolve, reject) => {
			setTimeout(() => {
				if (control.value === 'TestProject') {
					resolve({ nameIsForbidden: true });
				} else {
					resolve(null);
				}
			}, 1500);
		});

		return promise;
	}
}
