import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSummaryCardListComponent } from './control-summary-card-list.component';

describe('ControlSummaryCardListComponent', () => {
  let component: ControlSummaryCardListComponent;
  let fixture: ComponentFixture<ControlSummaryCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlSummaryCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlSummaryCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
