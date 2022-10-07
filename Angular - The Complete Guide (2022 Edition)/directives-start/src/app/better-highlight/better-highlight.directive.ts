import {
	Directive,
	OnInit,
	ElementRef,
	Renderer2,
	HostListener,
	HostBinding,
	Input
} from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
	@Input() defaultColor: string = 'transparent';
	@Input('appBetterHighlight') highlightColor: string = 'blue';
	@HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
	@HostBinding('style.color') textColor: string = 'black';

	constructor(private elRef: ElementRef, private renderer: Renderer2) {}

	ngOnInit() {
		// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
		this.backgroundColor = this.defaultColor;
	}

	@HostListener('mouseenter') mouseover(eventData: Event) {
		// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
		// this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');

		this.backgroundColor = this.highlightColor;
		this.textColor = 'white';
	}

	@HostListener('mouseleave') mouseleave(eventData: Event) {
		// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
		// this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');

		this.backgroundColor = this.defaultColor;
		this.textColor = 'black';
	}

	@HostListener('click') click(eventData: Event) {
		// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');

		this.backgroundColor = 'blue';
	}
}
