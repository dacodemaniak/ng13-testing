import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appIsRequired]'
})
export class IsRequiredDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  public ngOnInit(): void {
    let newPlaceholderContent: string;

      const nativeElement: HTMLElement = this.elementRef.nativeElement;
      if (nativeElement.getAttribute('placeholder')) {
        newPlaceholderContent = nativeElement.getAttribute('placeholder') + '(*)';
      } else {
        newPlaceholderContent = 'Type something required... (*)';
      }

      // At least, replace the content of attribute
      nativeElement.setAttribute('placeholder', newPlaceholderContent);
  }
}
