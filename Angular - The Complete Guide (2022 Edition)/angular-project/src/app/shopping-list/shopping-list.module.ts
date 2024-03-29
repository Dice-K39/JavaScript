import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoggingService } from '../logging.services';

import { SharedModule } from '../shared/shared.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
	declarations: [ShoppingListComponent, ShoppingEditComponent],
	imports: [
		RouterModule.forChild([{ path: '', component: ShoppingListComponent }]),
		SharedModule,
		FormsModule
	]
	// providers: [LoggingService]
})
export class ShoppingListModule {}
