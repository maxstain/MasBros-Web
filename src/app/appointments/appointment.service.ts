import { Appointment } from './appointment';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private dbPath = '/appointments';
  appointmentsRef!: AngularFireList<Appointment>;

  constructor(db: AngularFireDatabase) {
    this.appointmentsRef = db.list(this.dbPath);
  }

  updateAppointment(key: string, value: any): Promise<void> {
    return this.appointmentsRef.update(key, value);
  }

  deleteAppointment(key: string): Promise<void> {
    return this.appointmentsRef.remove(key);
  }

  getAppointmentsList(): AngularFireList<Appointment> {
    return this.appointmentsRef;
  }

  deleteAll(): Promise<void> {
    return this.appointmentsRef.remove();
  }
}
