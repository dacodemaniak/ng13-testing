import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appIsRequired]'
})
export class IsRequiredDirective implements OnInit {
  @Input() public appIsRequired: string | null = null;

  constructor(private elementRef: ElementRef) {}

  

  public ngOnInit(): void {
    if (this.appIsRequired?.length === 0) {
      this.appIsRequired = '*';
    }
    
    let newPlaceholderContent: string;

      const nativeElement: HTMLElement = this.elementRef.nativeElement;
      if (nativeElement.getAttribute('placeholder')) {
        newPlaceholderContent = nativeElement.getAttribute('placeholder') + '(' + this.appIsRequired + ')';
      } else {
        newPlaceholderContent = 'Type something required... ' + '(' + this.appIsRequired + ')';
      }

      // At least, replace the content of attribute
      nativeElement.setAttribute('placeholder', newPlaceholderContent);
  }
}
