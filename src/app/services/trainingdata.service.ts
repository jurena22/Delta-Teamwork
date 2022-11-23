import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { TrainingModel } from '../model/training.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingdataService {

  private dbPath = '/trainings';

  trainingsRef: AngularFirestoreCollection<TrainingModel>;

  constructor(private db: AngularFirestore) {
    this.trainingsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<TrainingModel> {
    return this.trainingsRef;
  }

  create(training: TrainingModel): any {
    return this.trainingsRef.add({ ...training });
  }

  delete(id: string): Promise<void> {
    return this.trainingsRef.doc(id).delete();
  }
}
