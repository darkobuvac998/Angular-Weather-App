import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[labelText]'
})
export class LabelTextDirective implements AfterViewInit {

  @Input() labelText = '';

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    let label = this.el.nativeElement.querySelector('#labelText');
    if(label){
      label.innerHTML = this.labelText;
    }
  }

}
