import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.httpClient.get('https://api.datos.gob.mx/v1/calidadAire').subscribe((response: any) => {
      this.data = response['results'];
      console.log(this.data);
    });
  }

}
