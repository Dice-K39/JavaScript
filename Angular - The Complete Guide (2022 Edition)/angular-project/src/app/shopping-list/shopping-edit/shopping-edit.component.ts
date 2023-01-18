import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListActions from '../store/shopping-list.actions';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
	@ViewChild('f', { static: false }) shoppingListForm: NgForm;
	subscription: Subscription;
	editMode = false;
	editedItemIndex: number;
	editedItem: Ingredient;

	constructor(
		private shoppingListService: ShoppingListService,
		private store: Store<{ ingredients: Ingredient[] }>
	) {}

	ngOnInit(): void {
		this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
			this.editedItemIndex = index;
			this.editMode = true;
			this.editedItem = this.shoppingListService.getIngredient(index);
			this.shoppingListForm.setValue({
				name: this.editedItem.name,
				amount: this.editedItem.amount
			});
		});
	}

	onSubmit(form: NgForm) {
		const value = form.value;
		const newIngredient = new Ingredient(value.name, value.amount);

		if (this.editMode) {
			this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
		} else {
			// this.shoppingListService.addIngredient(newIngredient);
			this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
		}

		this.shoppingListForm.reset();
		this.editMode = false;
	}

	onClear() {
		this.shoppingListForm.reset();
		this.editMode = false;
	}

	onDelete() {
		this.shoppingListService.removeIngredient(this.editedItemIndex);
		this.onClear();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
