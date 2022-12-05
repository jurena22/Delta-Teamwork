import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TrainingModel } from 'src/app/model/training.model';
import { TrainingdataService } from 'src/app/services/trainingdata.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit, OnDestroy {

  trainings?: TrainingModel[];
  dataSubscription?: Subscription;

  constructor(
    private trainingDataService: TrainingdataService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.dataSubscription = this.trainingDataService.getAll().subscribe({
      next: (data: TrainingModel[])=>{this.trainings = data}
    });

  }

  goToApplication(): void {
    this.router.navigate(['jelentkezes']);
  }

  ngOnDestroy(): void {
    // console.log('trainings leíratkozás');
    this.dataSubscription?.unsubscribe();
  }
  

}
