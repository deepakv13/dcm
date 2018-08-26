import { Component, OnInit, Input } from '@angular/core';
import { Control } from '../model/control';

@Component({
  selector: 'control-summary-card',
  templateUrl: './control-summary-card.component.html',
  styleUrls: ['./control-summary-card.component.css']
})
export class ControlSummaryCardComponent implements OnInit {

  @Input() control: Control;

  constructor() { }

  ngOnInit() {
  }

}
