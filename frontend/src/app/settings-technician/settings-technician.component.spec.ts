import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTechnicianComponent } from './settings-technician.component';

describe('SettingsTechnicianComponent', () => {
  let component: SettingsTechnicianComponent;
  let fixture: ComponentFixture<SettingsTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsTechnicianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
