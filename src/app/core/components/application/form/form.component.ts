import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TrainingModel } from 'src/app/model/training.model';
import { ApplicationService } from 'src/app/services/application.service';
import { TrainingdataService } from 'src/app/services/trainingdata.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  applicationForm!: FormGroup;

  trainings?: TrainingModel[];

  // courseOptions: { key: string, displayValue: string }[] = [
  //   {key: 'select', displayValue: "Válassz képzést..."},
  //   {key:'JFEND', displayValue: "Junior frontend fejlesztő"},
  //   {key:'JBEND', displayValue: "Junior Java backend fejlesztő"},
  //   {key:'JSYST', displayValue: "Junior rendszerüzemeltető"},
  //   {key:'JTEST', displayValue: "Junior szoftvertesztelő"},
  //   {key:'DBSPEC', displayValue: "Adatbázis üzemeltető (specialista)"},
  //   {key:'AUTTEST', displayValue: "Junior automata tesztelő"},
  //   {key:'FULLSTACK', displayValue: "Junior Fullstack API fejlesztő"},
  //   {key:'BENDSPEC', displayValue: "Junior vállalati Java backend fejlesztő"}
  // ]
  
  statusRadioOptions: {id: string, value: string, label: string}[] = [
    {id: 'newStudent', value: 'Nem', label: 'Nem, de szeretnék.'},
    {id: 'student', value: 'Igen', label: 'Igen, ezért is jöttem vissza.'}
  ];



  constructor(
    private applicationService: ApplicationService,
    private trainingDataService: TrainingdataService
    ) { }

  ngOnInit(): void {

    this.trainingDataService.getAll().subscribe({
      next: (data: TrainingModel[])=>{this.trainings = data}
    });

    this.applicationForm = new FormGroup({
      // name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-záéíóöőüű]+ [A-Z][a-záéíóöőüű]+/)]),
      name: new FormControl('', [Validators.required, Validators.pattern(/^[A-ZÁÉÍÓÖŐÜŰÚ][\w'\-,.][^0-9_!¡?÷?¿\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)]),
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

    this.applicationService.create(this.applicationForm.value);
    this.applicationForm.reset();
  }

}
