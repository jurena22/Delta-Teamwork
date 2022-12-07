import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { ApplicantModel } from 'src/app/model/applicant.model';
import { TrainingModel } from 'src/app/model/training.model';
import { ApplicationService } from 'src/app/services/application.service';
import { TrainingdataService } from 'src/app/services/trainingdata.service';

@Component({
  selector: 'app-training-admin',
  templateUrl: './training-admin.component.html',
  styleUrls: ['./training-admin.component.scss']
})
export class TrainingAdminComponent implements OnInit {

  trainings?: TrainingModel[];

  applicants?:ApplicantModel[];

  chosenTraining: TrainingModel = {} as TrainingModel;

  trainingForm!: FormGroup;

  constructor(
    private trainingDataService: TrainingdataService,
    private applicationService: ApplicationService
    ) { }

  ngOnInit(): void {

    this.trainingDataService.getAll().subscribe({
      next: (data: TrainingModel[])=>{this.trainings = data}
    });

    this.applicationService.getAll().subscribe({
      next: (data: ApplicantModel[])=>{this.applicants = data}
    });

    this.trainingForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required
      ]),
      teacher: new FormControl('', [
        Validators.required
      ]),
      imageURL: new FormControl('', [
        Validators.required
      ])
    })

  }

  

  chooseTraining(training: TrainingModel) {
    this.chosenTraining = training;
    console.log(this.chosenTraining);
  }

  deleteTraining() {
    if (this.chosenTraining.id) {
      this.trainingDataService.delete(this.chosenTraining.id);

    }
  }

  saveTraining(): void {
    if(this.trainingForm.valid){
    this.trainingDataService.create(this.trainingForm.value);
  }
  }

  getApplicantsNumber(name:string):number{
    return this.applicants?.filter(applicant => applicant.course === name).length || 0;
  }
}
