import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MentorModel } from 'src/app/model/mentor.model';
import { MentorService } from 'src/app/services/mentor.service';

@Component({
  selector: 'app-szabi',
  templateUrl: './szabi.component.html',
  styleUrls: ['./szabi.component.scss']
})
export class SzabiComponent implements OnInit {

  constructor(private router: Router, private mentorService: MentorService) { }

  szabiArray: MentorModel[] = [];

  ngOnInit(): void {
    this.mentorService.mentorObs$.subscribe({
      next: (data: MentorModel[]) => this.szabiArray = data
    })
  }

  goBackToTeachers(){
    this.router.navigate(["rolunk"])
  }

  goToEnroll(){
    this.router.navigate(["jelentkezes"])
  }

  

  

}
