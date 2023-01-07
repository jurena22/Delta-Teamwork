import { Component, OnInit } from '@angular/core';
import { MentorModel } from 'src/app/model/mentor.model';
import { MentorService } from 'src/app/services/mentor.service';

@Component({
  selector: 'app-teachers-admin',
  templateUrl: './teachers-admin.component.html',
  styleUrls: ['./teachers-admin.component.scss']
})
export class TeachersAdminComponent implements OnInit {

  mentors?: MentorModel[];

  constructor(
    private mentorService: MentorService
  ) { }

  ngOnInit(): void {
    this.mentorService.getAll().subscribe({
      next: (data: MentorModel[]) => { this.mentors = data }
    })
  }

}
