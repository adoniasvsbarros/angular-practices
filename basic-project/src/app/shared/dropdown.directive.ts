import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    

    constructor(private elRef: ElementRef, private renderer: Renderer2){}

    @HostListener('document:click', ['$event']) toogleOpen(event: Event){
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
}