import { AppointmentService } from './../../appointments/appointment.service';
import { Appointment } from './../../appointments/appointment';
import { map } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appointments-body',
  templateUrl: './appointments-body.component.html',
  styleUrls: ['./appointments-body.component.css']
})
export class AppointmentsBodyComponent implements OnInit {

  @Input() appointment!: Appointment;
  appointments: any;

  constructor(private appointmentsService: AppointmentService) { }

  ngOnInit(): void {
    this.getAppointmentsList();
  }

  getAppointmentsList() {
    this.appointmentsService.getAppointmentsList().snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(appointments => {
      this.appointments = appointments
    });
  }

  deleteAppointments() {
    this.appointmentsService.deleteAll().catch(err => console.log(err));
  }

  deleteAppointment() {
    this.appointmentsService.deleteAppointment(this.appointment.key).catch(
      err => console.log(err)
    );
  }

}
