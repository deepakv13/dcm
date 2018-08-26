import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcmHomeComponent } from './dcm-home.component';

describe('DcmHomeComponent', () => {
  let component: DcmHomeComponent;
  let fixture: ComponentFixture<DcmHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcmHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
