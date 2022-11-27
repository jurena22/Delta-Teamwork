import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  applicationForm!: FormGroup;

  courseOptions: { key: string, displayValue: string }[] = [
    {key: 'select', displayValue: "Válassz képzést..."},
    {key:'JFEND', displayValue: "Junior frontend fejlesztő"},
    {key:'JBEND', displayValue: "Junior Java backend fejlesztő"},
    {key:'JSYST', displayValue: "Junior rendszerüzemeltető"},
    {key:'JTEST', displayValue: "Junior szoftvertesztelő"},
    {key:'DBSPEC', displayValue: "Adatbázis üzemeltető (specialista)"},
    {key:'AUTTEST', displayValue: "Junior automata tesztelő"},
    {key:'FULLSTACK', displayValue: "Junior Fullstack API fejlesztő"},
    {key:'BENDSPEC', displayValue: "Junior vállalati Java backend fejlesztő"}
  ]
  
  statusRadioOptions: {id: string, value: string, label: string}[] = [
    {id: 'newStudent', value: 'no', label: 'Nem, de szeretnék.'},
    {id: 'student', value: 'yes', label: 'Igen, ezért is jöttem vissza.'}
  ];



  constructor() { }

  ngOnInit(): void {
    this.applicationForm = new FormGroup({
      //regexeket lehet finomítani
      name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-záéíóöőüű]+ [A-Z][a-záéíóöőüű]+/)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[\S]+@[\S]+\.[a-z]{2,3}$/)]),
      address: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\+[0-9 ]{10,20}$/)]),
      courses: new FormControl(null, Validators.required),
      studentStatus: new FormControl(null, Validators.required),
      gdprCheck: new FormControl(null, [Validators.required, Validators.requiredTrue])
    })
  }

  saveApplication(): void {
    console.log(this.applicationForm);
    console.log(this.applicationForm.value);
  }

}
