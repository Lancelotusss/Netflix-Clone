import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appnext]'
})
export class SliderDirective {

  constructor(private el: ElementRef) {

  }
  @HostListener('click')
  nextSlide(){
    var elm = this.el.nativeElement.parentElement
    var card = elm.getElementsByClassName("card")
    elm.append(card[0])
    }

}
