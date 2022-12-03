import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { TrainingModel } from 'src/app/model/training.model';
import { TrainingdataService } from 'src/app/services/trainingdata.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

  trainings?: TrainingModel[];

  constructor(private trainingDataService: TrainingdataService) { }

  ngOnInit(): void {

    this.trainingDataService.getAll().subscribe({
      next: (data: TrainingModel[])=>{this.trainings = data}
    });

  }

  

}
