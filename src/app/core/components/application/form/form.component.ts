import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { ApplicantModel } from 'src/app/model/applicant.model';
import { TrainingModel } from 'src/app/model/training.model';
import { ApplicationService } from 'src/app/services/application.service';
import { TrainingdataService } from 'src/app/services/trainingdata.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  applicationForm!: FormGroup;

  trainings?: TrainingModel[];

  statusRadioOptions: { id: string, value: string, label: string }[] = [
    { id: 'newStudent', value: 'Nem', label: 'Nem, de szeretnék.' },
    { id: 'student', value: 'Igen', label: 'Igen, ezért is jöttem vissza.' }
  ];

  dataSubscription?: Subscription;

  // oldCustomer$?: Observable<ApplicantModel[]>;
  oldCustomers: ApplicantModel[] = [];
  isApplicantRegistrated!: boolean;


  constructor(
    private applicationService: ApplicationService,
    private trainingDataService: TrainingdataService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.dataSubscription = this.trainingDataService.getAll().subscribe({
      next: (data: TrainingModel[]) => { this.trainings = data }
    });

    this.applicationForm = new FormGroup({
      // name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-záéíóöőüű]+ [A-Z][a-záéíóöőüű]+/)]),
      name: new FormControl('', [Validators.required, Validators.pattern(/^[A-ZÁÉÍÓÖŐÜŰÚ][\wáéíóöőúüű'\-,.][^0-9_!¡?÷?¿\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)]),
      // email: new FormControl('', [Validators.required, Validators.pattern(/^[\S]+@[\S]+\.[a-z]{2,3}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\+[0-9 ]{10,20}$/)]),
      course: new FormControl(null, Validators.required),
      studentStatus: new FormControl(null, Validators.required),
      gdprCheck: new FormControl(null, [Validators.required, Validators.requiredTrue])
    })
  }

  saveApplication(): void {
    // console.log(this.applicationForm.value);
    const newApplicant = this.applicationForm.value;
    console.log(newApplicant);

    // this.isApplicantRegistrated = this.checkApplicantReg(newApplicant);
    // console.log(this.isApplicantRegistrated);

    this.applicationService.getApplicantsByEmail(newApplicant.email).subscribe({
      next: data => {
        this.oldCustomers = data;
        // console.log(this.oldCustomers);

        if (this.oldCustomers.length === 0) {
          //nincs ilyen email -> registrate
          this.isApplicantRegistrated = false;
        } else {
          //már létezik -> alert/toastr danger
          this.isApplicantRegistrated = true;
        }
      }
    });

    console.log(this.isApplicantRegistrated);
    //ezt hamarabb kiírja, mint az érték változna, ezért undefined 
  

    // !!! mit akarunk? -> reg - lekérés 1x (nem kell observable)? vagy collectionData helyett getDocs



    // this.applicationService.create(this.applicationForm.value);
    // this.applicationForm.reset();
    // this.toastr.success("Sikeres jelentkezés! Munkatársunk hamarosan felkeres a megadott elérhetőségek egyikén.");
  }


  //CHECK if applicant has already checked
  // checkApplicantReg(newApplicant: ApplicantModel): boolean {
  //   // this.oldCustomer$ = this.applicationService.getApplicantsByEmail(newApplicant.email);

  //   let result = false;
  //   this.applicationService.getApplicantsByEmail(newApplicant.email).subscribe({
  //     next: data => {
  //       this.oldCustomers = data;
  //       console.log(this.oldCustomers);

  //       // if (this.oldCustomers.length === 0) {
  //       //   //nincs ilyen email -> reg
  //       //   // this.isApplicantRegistrated = false;
  //       //   result = false;
  //       // } else {
  //       //   //már létezik -> alert/toastr danger
  //       //   // this.isApplicantRegistrated = true;
  //       //   result = true;
  //       // }
  //     }
  //   });

  //   console.log('done');
  //   if (this.oldCustomers.length > 0) { result = true }
  //   return result;

  // }





  ngOnDestroy(): void {
    // console.log('jelentkezés leíratkozás');
    this.dataSubscription?.unsubscribe();
  }

}
