import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InternInitialPipe } from './shared/pipes/intern-initial.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InternInitialPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
