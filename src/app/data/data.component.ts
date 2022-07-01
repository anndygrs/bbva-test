import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    console.log('Data aqui');
  }

}
