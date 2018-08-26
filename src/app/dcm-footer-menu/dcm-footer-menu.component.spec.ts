import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcmFooterMenuComponent } from './dcm-footer-menu.component';

describe('DcmFooterMenuComponent', () => {
  let component: DcmFooterMenuComponent;
  let fixture: ComponentFixture<DcmFooterMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcmFooterMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcmFooterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
