import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CounterService {
	activeToInactiveCounter: number = 0;
	inactiveToActiveCounter = 0;

	constructor() {}

	incrementActiveToInactive() {
		this.activeToInactiveCounter++;
		console.log(`Active to Inactive count: ${this.activeToInactiveCounter}`);
	}

	incrementInactiveToActive() {
		this.inactiveToActiveCounter++;
		console.log(`Inactive to Active count: ${this.inactiveToActiveCounter}`);
	}
}
