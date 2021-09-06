import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsBodyComponent } from './appointments-body.component';

describe('AppointmentsBodyComponent', () => {
  let component: AppointmentsBodyComponent;
  let fixture: ComponentFixture<AppointmentsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
