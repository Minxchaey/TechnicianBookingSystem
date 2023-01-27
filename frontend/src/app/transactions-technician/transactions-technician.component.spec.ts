import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsTechnicianComponent } from './transactions-technician.component';

describe('TransactionsTechnicianComponent', () => {
  let component: TransactionsTechnicianComponent;
  let fixture: ComponentFixture<TransactionsTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsTechnicianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
