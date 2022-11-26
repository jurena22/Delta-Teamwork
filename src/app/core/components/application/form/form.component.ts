import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  courseOptions: { key: string, displayValue: string }[] = [
    {key: 'nope', displayValue: "Válassz képzést..."},
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
    {id: 'newStudent', value: 'true', label: 'Nem, de szeretnék.'},
    {id: 'student', value: 'no', label: 'Igen, ezért is jöttem vissza.'}
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
