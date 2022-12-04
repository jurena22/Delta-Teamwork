import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MentorModel } from 'src/app/model/mentor.model';
import { MentorService } from 'src/app/services/mentor.service';

@Component({
  selector: 'app-zoli',
  templateUrl: './zoli.component.html',
  styleUrls: ['./zoli.component.scss']
})
export class ZoliComponent implements OnInit, OnDestroy {

  zoliArray: MentorModel[] = [];
  dataSubscription?: Subscription;

  constructor(private router: Router, private mentorService: MentorService) { }


  ngOnInit(): void {
    this.dataSubscription = this.mentorService.mentorObs$.subscribe({
      next: (data: MentorModel[]) => this.zoliArray = data
    })
  }

  goBackToTeachers(){
    this.router.navigate(["rolunk"])
  }

  goToEnroll(){
    this.router.navigate(["jelentkezes"])
  }

  ngOnDestroy(): void {
    // console.log('zoli mentor leíratkozás');
    this.dataSubscription?.unsubscribe();
  }
}
