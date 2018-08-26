import { Component, OnInit } from '@angular/core';
import { Control } from '../model/control';

@Component({
  selector: 'control-summary-card-list',
  templateUrl: './control-summary-card-list.component.html',
  styleUrls: ['./control-summary-card-list.component.css']
})
export class ControlSummaryCardListComponent implements OnInit {

  controls: Control[] = [
    {"id":"1", "name":"first control", "aoa":"sandbox"},
    {"id":"2", "name":"second control", "aoa":"sandbox"},
    {"id":"3", "name":"third control", "aoa":"sandbox"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
