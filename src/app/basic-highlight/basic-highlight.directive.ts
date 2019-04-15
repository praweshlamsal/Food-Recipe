import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector:"[appBasicHighlight]",

})
export class basicHighlightDirective implements OnInit
{
    constructor(private elementRef:ElementRef) {}
    ngOnInit(){
        this.elementRef.nativeElement.style.border = '1px solid green';
    }
}