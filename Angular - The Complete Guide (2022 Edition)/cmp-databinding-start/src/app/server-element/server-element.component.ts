import
{
    Component,
    Input,
    OnInit,
    ViewEncapsulation,
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from '@angular/core';

@Component(
    {
        selector: 'app-server-element',
        templateUrl: './server-element.component.html',
        styleUrls: ['./server-element.component.css'],
        encapsulation: ViewEncapsulation.Emulated // None, Native, Emulated(default)
    }
)
    
export class ServerElementComponent
    implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input("srvElement") element: { type: string, name: string, content: string };
    @Input() name: string;
    
    constructor() {
        console.log("constructor called");
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log("ngOnChanges called");
        console.log(changes);
    }
    
    ngOnInit(): void {
        console.log("ngOnInit called");
    }

    ngDoCheck() {
        console.log("ngDoCheck called");
    }

    ngAfterContentInit() {
        console.log("ngAfterContent called");
    }

    ngAfterContentChecked() {
        console.log("ngAfterContentChecked called");
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit called");
    }

    ngAfterViewChecked() {
        console.log("ngAfterViewChecked called");
    }
    
    ngOnDestroy() {
        console.log("ngOnDestroy called");
    }
}