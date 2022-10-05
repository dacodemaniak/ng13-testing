import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InternInitialPipe } from './shared/pipes/intern-initial.pipe';
import { IsRequiredDirective } from './shared/directives/is-required.directive';

@NgModule({
  declarations: [
    AppComponent,
    InternInitialPipe,
    IsRequiredDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
