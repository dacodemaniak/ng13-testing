import { Component, OnInit } from '@angular/core';
import { InternModel } from './core/models/intern-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tester Angular';
  intern: InternModel = new InternModel();


  ngOnInit(): void {
    this.intern.setFirstName('Jean-Luc');
    this.intern.setLastName('Aubert');
  }
}
