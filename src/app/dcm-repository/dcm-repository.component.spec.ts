import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcmRepositoryComponent } from './dcm-repository.component';

describe('DcmRepositoryComponent', () => {
  let component: DcmRepositoryComponent;
  let fixture: ComponentFixture<DcmRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcmRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcmRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
