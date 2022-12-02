import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef) { }
  @HostListener('click')
  nextSlide(){
    var elm = this.el.nativeElement.parentElement
    var card = elm.getElementsByClassName("card")
    console.log("move left")
    }
}
