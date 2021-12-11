import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[delay]',
})
export class DelayDirective {

  @Input() set delay(ms: number){
    setTimeout(() =>{
      this.viewContainer.createEmbeddedView(this.template);
    }, ms)
  }

  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
