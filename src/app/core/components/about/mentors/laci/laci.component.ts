import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MentorModel } from 'src/app/model/mentor.model';
import { MentorService } from 'src/app/services/mentor.service';

@Component({
  selector: 'app-laci',
  templateUrl: './laci.component.html',
  styleUrls: ['./laci.component.scss']
})
export class LaciComponent implements OnInit, OnDestroy {

  laciArray: MentorModel[] = [];
  dataSubscription?: Subscription;
  
  constructor(private router: Router, private mentorService: MentorService) { }


  ngOnInit(): void {
    this.dataSubscription = this.mentorService.mentorObs$.subscribe({
      next: (data: MentorModel[]) => this.laciArray = data
    })
  }

  goBackToTeachers(){
    this.router.navigate(["rolunk"])
  }

  goToEnroll(){
    this.router.navigate(["jelentkezes"])
  }

  ngOnDestroy(): void {
    // console.log('laci mentor leíratkozás');
    this.dataSubscription?.unsubscribe();
  }
}
