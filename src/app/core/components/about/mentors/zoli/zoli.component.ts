import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MentorModel } from 'src/app/model/mentor.model';
import { MentorService } from 'src/app/services/mentor.service';

@Component({
  selector: 'app-zoli',
  templateUrl: './zoli.component.html',
  styleUrls: ['./zoli.component.scss']
})
export class ZoliComponent implements OnInit {

  constructor(private router: Router, private mentorService: MentorService) { }

  zoliArray: MentorModel[] = [];

  ngOnInit(): void {
    this.mentorService.mentorObs$.subscribe({
      next: (data: MentorModel[]) => this.zoliArray = data
    })
  }

  goBackToTeachers(){
    this.router.navigate(["rolunk"])
  }

  goToEnroll(){
    this.router.navigate(["jelentkezes"])
  }
}
