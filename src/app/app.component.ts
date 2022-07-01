import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  info: any;
  evidence: any;
  readInfo(facts: any) {
    this.info = facts;
  }
}
