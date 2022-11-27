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

    this.getTrainings();

  }

  getTrainings(): void {
    this.trainingDataService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.trainings = data;
    });
  }

}
