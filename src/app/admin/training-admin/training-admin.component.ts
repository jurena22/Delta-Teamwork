import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { TrainingModel } from 'src/app/model/training.model';
import { TrainingdataService } from 'src/app/services/trainingdata.service';

@Component({
  selector: 'app-training-admin',
  templateUrl: './training-admin.component.html',
  styleUrls: ['./training-admin.component.scss']
})
export class TrainingAdminComponent implements OnInit {

  trainings?: TrainingModel[];

  chosenTraining: TrainingModel = {} as TrainingModel;

  trainingForm!: FormGroup;

  constructor(private trainingDataService: TrainingdataService) { }

  ngOnInit(): void {
    this.getTrainings();

    this.trainingForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required
      ]),
      teacher: new FormControl('', [
        Validators.required
      ])
    })

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

  chooseTraining(training: TrainingModel) {
    this.chosenTraining = training;
    console.log(this.chosenTraining);
  }

  deleteTraining() {
    if (this.chosenTraining.id) {
      this.trainingDataService.delete(this.chosenTraining.id)
        .then(() => {
          this.getTrainings();
        })

    }
  }

  saveTraining(): void {
    if(this.trainingForm.valid){
    this.trainingDataService.create(this.trainingForm.value).then(() => {
      console.log('Created new item successfully!');
    });
    this.getTrainings()
  }
  }
}
