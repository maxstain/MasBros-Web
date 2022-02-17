import { Observable } from 'rxjs';
import { Appointment } from './appointment';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private dbPath = '/Appointments';
  appointmentsRef!: AngularFirestoreCollection<Appointment>;

  constructor(db: AngularFirestore) {
    this.appointmentsRef = db.collection(this.dbPath);
  }

  deleteAppointment(key: string): Promise<void> {
    return this.appointmentsRef.doc(key).delete();
  }

  getAppointmentsList(): AngularFirestoreCollection<Appointment> {
    return this.appointmentsRef;
  }

  /* deleteAll(): Promise<void> {
    return this.appointmentsRef;
  } */
}
