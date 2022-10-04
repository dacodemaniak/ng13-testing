import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InternInitialPipe } from './shared/pipes/intern-initial.pipe';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InternInitialPipe
      ],
    }).compileComponents();
  });

  const titleValue: string = 'Tester Angular';

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title '${titleValue}'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual(titleValue);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(titleValue);
  });

  it(`Should render JA in intern-initial-pipes`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const content: string | null | undefined = compiled.querySelector('#intern #intern-initials-pipe')?.textContent;

    expect(content).toBe('JA');
  })
});
