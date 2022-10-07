import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
	@HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
	@HostBinding('style.color') textColor: string = 'black';

	constructor(private elRef: ElementRef, private renderer: Renderer2) {}

	ngOnInit() {
		// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
	}

	@HostListener('mouseenter') mouseover(eventData: Event) {
		// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
		// this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');

		this.backgroundColor = 'blue';
		this.textColor = 'white';
	}

	@HostListener('mouseleave') mouseleave(eventData: Event) {
		// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
		// this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');

		this.backgroundColor = 'transparent';
		this.textColor = 'black';
	}

	@HostListener('click') click(eventData: Event) {
		// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');

		this.backgroundColor = 'red';
	}
}
