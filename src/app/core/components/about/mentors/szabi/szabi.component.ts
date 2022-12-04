import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MentorModel } from 'src/app/model/mentor.model';
import { MentorService } from 'src/app/services/mentor.service';

@Component({
  selector: 'app-szabi',
  templateUrl: './szabi.component.html',
  styleUrls: ['./szabi.component.scss']
})
export class SzabiComponent implements OnInit, OnDestroy {

  szabiArray: MentorModel[] = [];
  dataSubscription?: Subscription;

  constructor(private router: Router, private mentorService: MentorService) { }


  ngOnInit(): void {
    this.dataSubscription = this.mentorService.mentorObs$.subscribe({
      next: (data: MentorModel[]) => this.szabiArray = data
    })
  }

  goBackToTeachers(){
    this.router.navigate(["rolunk"])
  }

  goToEnroll(){
    this.router.navigate(["jelentkezes"])
  }

  ngOnDestroy(): void {
    // console.log('szabi mentor leíratkozás');
    this.dataSubscription?.unsubscribe();
  }

  

  

}
