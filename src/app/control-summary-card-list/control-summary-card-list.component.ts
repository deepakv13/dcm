import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'control-summary-card-list',
  templateUrl: './control-summary-card-list.component.html',
  styleUrls: ['./control-summary-card-list.component.css']
})
export class ControlSummaryCardListComponent implements OnInit {

  controls: [1, 2, 3
    // {"id": "1", "name": "first control"},
    // {"id": "2", "name": "second control"},
    // {"id": "3", "name": "third control"}
  ];

  control: {id:"5", name:"fifth control"};

  constructor() { }

  ngOnInit() {
  }

}
