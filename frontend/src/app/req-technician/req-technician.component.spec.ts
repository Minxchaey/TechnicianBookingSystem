import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqTechnicianComponent } from './req-technician.component';

describe('ReqTechnicianComponent', () => {
  let component: ReqTechnicianComponent;
  let fixture: ComponentFixture<ReqTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqTechnicianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReqTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
