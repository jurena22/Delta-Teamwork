import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, DocumentData, Firestore, getDocs } from '@angular/fire/firestore';
import { getCountFromServer, query, where } from '@firebase/firestore';
import { from, Observable } from 'rxjs';
import { ApplicantModel } from '../model/applicant.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  applicantsRef = collection(this.firestore, "applicants")

  constructor(private firestore: Firestore) { }

  getAll(): Observable<ApplicantModel[]> {
    return collectionData(this.applicantsRef, { idField: 'id' }) as Observable<ApplicantModel[]>;
  }

  create(applicant: ApplicantModel): Observable<DocumentData> {
    return from(addDoc(this.applicantsRef, applicant));
  }

  delete(id: string): Observable<void> {
    const applicantDoc = doc(this.firestore, `applicants/${id}`);
    return from(deleteDoc(applicantDoc));
  }

  //get applicant by email
  getApplicantsByEmail(email: string): Observable<ApplicantModel[]> {
    const q = query(this.applicantsRef, where("email", "==", email));
    return collectionData(q) as Observable<ApplicantModel[]>;
    // return from(getDocs(q)).pipe(map((snapshot) => {
    //   const resultList = snaphot.docs.map((doc) => {
    //     const applicantData: ApplicantModel = doc.docData() as ApplicantModel;
    //     applicantData.id = doc.id;
    //     return applicantData;
    //   });
    //   return resultList;
    // })))
  }

}
