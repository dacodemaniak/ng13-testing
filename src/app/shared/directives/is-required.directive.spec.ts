import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsRequiredDirective } from './is-required.directive';

/**
 * Let's create a dummy component for testing only
 */
 @Component({
  template: `<input type="text" placeholder="Type your name..." appIsRequired>`
})
class TestComponent {}

@Component({
  template: `<input type="text" appIsRequired>`
})
class NoPlaceholderComponent {}

describe('IsRequiredDirective', () => {
  let testComponent: TestComponent;
  let testFixture: ComponentFixture<TestComponent>;

  let nopComponent: NoPlaceholderComponent;
  let nopFixture: ComponentFixture<NoPlaceholderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        NoPlaceholderComponent,
        IsRequiredDirective
      ]
    });

    testFixture = TestBed.createComponent(TestComponent);
    testComponent = testFixture.componentInstance;

    nopFixture = TestBed.createComponent(NoPlaceholderComponent);
    nopComponent = nopFixture.componentInstance;
  });

  it(`Should render 'Type your name...(*)' in placeholder attribute`, () => {
    // Play a detection changes cycle
    testFixture.detectChanges();

    // First get the element via debugElement
    const debugElement: HTMLElement = testFixture.debugElement.nativeElement;
    const input: HTMLElement = debugElement.querySelector('input')!;

    // Get the placeholder attribute content
    const placeholderContent: string = input.getAttribute('placeholder')!;

    expect(placeholderContent).toEqual('Type your name...(*)');
  });

  it(`Should add placeholder attribute and render 'Type something required... (*)' in that placeholder`, () => {
    // Play a detection changes cycle
    nopFixture.detectChanges();


    // First get the element via debugElement
    const debugElement: HTMLElement = nopFixture.debugElement.nativeElement;
    const input: HTMLElement = debugElement.querySelector('input')!;

    // Expect input had a placeholder attribute
    const hasPlaceHolder: boolean = input.getAttribute('placeholder') !== null;
    expect(hasPlaceHolder).toBeTrue();

    // Get the placeholder attribute content
    const placeholderContent: string = input.getAttribute('placeholder')!;

    expect(placeholderContent).toEqual('Type something required... (*)');
  });
});
