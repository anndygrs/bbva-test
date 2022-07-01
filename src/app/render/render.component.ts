import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {

  name: String = '';
  state: String = '';
  hour: String = '';
  imecaValue: String = '';

  @Input() evidence: any;
  constructor() { }

  ngOnInit(): void {
    this.name = this.evidence['stations'][0]['name'];
    if(this.name != 'station'){
      this.state = this.evidence['stations'][0]['source_id'];
      this.hour = this.evidence['stations'][0]['indexes'][0]['calculationTime'];
      this.imecaValue = this.evidence['stations'][0]['indexes'][0]['value'];
    } else {
      this.name = '';
    }
  }
}
