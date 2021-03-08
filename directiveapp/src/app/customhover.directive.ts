import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[myhover]'
})
export class CustomhoverDirective {

  constructor(private el : ElementRef){ 
    /*
      el.nativeElement will contain actual HTML Element to which directive is attached.

      Via Constructor, Dependenncy Injection is achieved.
      ElementRef is injected in case of custom Attribute Directive.
      TemplateRef and ViewContainerRef are injected in case of custom Structural Directive.
      TemplateRef for accessing the Dom contents and ViewContainerRef for performing manipulations.
    */
  }

  public focusColor(color, padding){
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.padding = padding;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.focusColor("pink", "30px");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.focusColor("yellow", "10px");
  }

}
