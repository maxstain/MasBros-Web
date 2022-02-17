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
    this.appointmentsService.getAppointmentsList().snapshotChanges().subscribe(data => {
      this.appointments = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Appointment
      });
    });
  }

  /* deleteAppointments() {
    this.appointmentsService.deleteAll().catch(err => console.log(err));
  } */

  deleteAppointment() {
    this.appointmentsService.deleteAppointment(this.appointment.key).catch(
      err => console.log(err)
    );
  }

}
