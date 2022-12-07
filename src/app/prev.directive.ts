import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef) { }
  @HostListener('click')
  PrevSlide(){
    var elm = this.el.nativeElement.parentElement.parentElement
    var item = elm.getElementsByClassName("slider-main")
    elm.prepend(item[item.length - 1])
    }
}

