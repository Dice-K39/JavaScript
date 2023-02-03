import { Injectable } from '@angular/core';
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

@Injectable()
export class AuthEffects {
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
					map((resData) => {
						const expirationDate = new Date(
							new Date().getTime() + +resData.expiresIn * 1000
						);

						return of(
							new AuthActions.Login({
								email: resData.email,
								userId: resData.localId,
								token: resData.idToken,
								expirationDate: expirationDate
							})
						);
					}),
					catchError((errorRes) => {
						let errorMessage = 'An unknown error occurred!';

						if (!errorRes.error || !errorRes.error.error) {
							return of(new AuthActions.LoginFail('An unknown error occurred!'));
						}

						switch (errorRes.error.error.message) {
							case 'EMAIL_EXISTS':
								errorMessage = 'This email exists already!';
								break;
							case 'EMAIL_NOT_FOUND':
								errorMessage = 'This email does not exist.';
								break;
							case 'INVALID_PASSWORD':
								errorMessage = 'This password is not correct.';
								break;
						}

						return of(new AuthActions.LoginFail(errorMessage));
					})
				);
		})
	);

	constructor(private actions$: Actions, private http: HttpClient) {}
}
