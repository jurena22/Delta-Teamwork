import { Injectable } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore, query, where } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { MentorModel } from '../model/mentor.model';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  mentorRef = collection(this.firestore, "teachers")

  constructor(private firestore: Firestore) { }

  getAll(): Observable<MentorModel[]> {
    return collectionData(this.mentorRef, { idField: 'id' }) as Observable<MentorModel[]>;
  }

  getOneById(id: string): Observable<MentorModel> {
    const mentorDocRef = doc(this.firestore, `teachers/${id}`);
    return docData(mentorDocRef, {idField: 'id'}) as Observable<MentorModel>;
  }

}
