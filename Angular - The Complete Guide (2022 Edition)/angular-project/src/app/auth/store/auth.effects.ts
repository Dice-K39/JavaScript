import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as AuthActions from './auth.actions';
import { environment } from '../../../my-environment/environment';

export interface AuthResponseData {
	kind: string;
	idToken: string;
	email: string;
	refreshToken: string;
	expiresIn: string;
	localId: string;
	registered?: boolean;
}

export class AuthEffects {
	@createEffect()
	authLogin = this.actions$.pipe(
		ofType(AuthActions.LOGIN_START),
		switchMap((authData: AuthActions.LoginStart) => {
			return this.http
				.post<AuthResponseData>(
					`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.API_KEY}`,
					{
						email: authData.payload.email,
						password: authData.payload.password,
						returnSecureToken: true
					}
				)
				.pipe(
					catchError((error) => {
						of();
					}),
					map((resData) => {
						of();
					})
				);
		})
	);

	constructor(private actions$: Actions, private http: HttpClient) {}
}
