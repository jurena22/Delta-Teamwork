import { Component, OnInit } from '@angular/core';
import { TrainingModel } from 'src/app/model/training.model';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

  trainings?: TrainingModel[];

  
  constructor() { }
  
  ngOnInit(): void {
    this.trainings = [
      {
        name: "Front-end fejlesztő",
        teacher: "Csurgó Szabolcs",
        description: "HTML, CSS, JS"
      },
      {
        name: "Back-end fejlesztő",
        teacher: "Énekes László",
        description: "nodeJS"
      },
      {
        name:"Full-stack fejlesztő",
        teacher:"Bakóczy Zoltán",
        description:"Front-end + Back-end tananyag"
      }
    ]
  }

}
