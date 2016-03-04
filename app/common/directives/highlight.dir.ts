import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
    selector : '[highlight]',
    host : {
        '(mouseenter)' : 'onMouseEnter()',
        '(mouseleave)' : 'onMouseLeave()',
        '(mousedown)'  : 'onMouseDown()',
        '(mouseup)'    : 'onMouseUp()'
    }
})
export class HighlightDirective {

    private _activeColor:string = "red";

    @Input() hoverColor:string;
    @Input() set activeColor(color:String) {
        this._activeColor = color || this._activeColor;
    }

    private originalBackground:string;

    constructor(private elementRef:ElementRef) {
        this.originalBackground = elementRef.nativeElement.style.backgroundColor;
    }

    onMouseEnter() {
        this.setElementColor(this.hoverColor);
    }

    onMouseLeave() {
        this.setElementColor(this.originalBackground);
    }

    onMouseDown() {
        this.setElementColor(this._activeColor);
    }

    onMouseUp() {
        this.setElementColor(this.originalBackground);
    }

    setElementColor(color:string) {
        this.elementRef.nativeElement.style.backgroundColor = color;
    }
}
