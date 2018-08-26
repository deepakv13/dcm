import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcmConsoleComponent } from './dcm-console.component';

describe('DcmConsoleComponent', () => {
  let component: DcmConsoleComponent;
  let fixture: ComponentFixture<DcmConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcmConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcmConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
