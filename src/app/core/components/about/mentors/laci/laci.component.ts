import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MentorModel } from 'src/app/model/mentor.model';
import { MentorService } from 'src/app/services/mentor.service';

@Component({
  selector: 'app-laci',
  templateUrl: './laci.component.html',
  styleUrls: ['./laci.component.scss']
})
export class LaciComponent implements OnInit {

  constructor(private router: Router, private mentorService: MentorService) { }

  laciArray: MentorModel[] = [];

  ngOnInit(): void {
    this.mentorService.mentorObs$.subscribe({
      next: (data: MentorModel[]) => this.laciArray = data
    })
  }

  goBackToTeachers(){
    this.router.navigate(["rolunk"])
  }

  goToEnroll(){
    this.router.navigate(["jelentkezes"])
  }

}
