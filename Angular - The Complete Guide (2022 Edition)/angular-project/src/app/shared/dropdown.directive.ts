import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {
	@HostBinding('class.open') isOpen = false;
	constructor(private elRef: ElementRef) {}

	// toggling dropdown when clicked on the dropdown menu itself
	// @HostListener('click') toggleOpen() {
	// 	this.isOpen = !this.isOpen;
	// }

	// closes dropdown menu when clicked anywhere on the document
	@HostListener('document:click', ['$event']) toggleOpen(event: Event) {
		this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
	}
}
