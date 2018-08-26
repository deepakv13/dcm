import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSummaryCardComponent } from './control-summary-card.component';

describe('ControlSummaryCardComponent', () => {
  let component: ControlSummaryCardComponent;
  let fixture: ComponentFixture<ControlSummaryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlSummaryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
