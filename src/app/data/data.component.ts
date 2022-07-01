import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  info: any;
  @Output() data = new EventEmitter;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.httpClient.get('https://api.datos.gob.mx/v1/calidadAire').subscribe((response: any) => {
      this.info = response['results'];
      this.data.emit(this.info);
    });
  }

}
