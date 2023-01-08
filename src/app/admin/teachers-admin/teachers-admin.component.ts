import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MentorModel } from 'src/app/model/mentor.model';
import { TrainingModel } from 'src/app/model/training.model';
import { MentorService } from 'src/app/services/mentor.service';
import { TrainingdataService } from 'src/app/services/trainingdata.service';

@Component({
  selector: 'app-teachers-admin',
  templateUrl: './teachers-admin.component.html',
  styleUrls: ['./teachers-admin.component.scss']
})
export class TeachersAdminComponent implements OnInit {

  mentors?: MentorModel[];
  chosenMentor: MentorModel = {} as MentorModel;

  teacherForm!: FormGroup;
  // trainings?: TrainingModel[];

  constructor(
    private mentorService: MentorService,
    // private trainingDataService: TrainingdataService
  ) { }

  ngOnInit(): void {
    this.mentorService.getAll().subscribe({
      next: (data: MentorModel[]) => { this.mentors = data }
    })

    // this.trainingDataService.getAll().subscribe({
    //   next: (data: TrainingModel[])=>{this.trainings = data}
    // });

    this.teacherForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl([]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      imgURL: new FormControl('https://images.unsplash.com/photo-1554533899-787ef890e98f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'),
      // training: new FormControl(null, Validators.required),
    })

  }

  chooseMentor(mentor: MentorModel) {
    this.chosenMentor = mentor;
  }


  deleteMentor() {
    if (this.chosenMentor.id) {
      this.mentorService.delete(this.chosenMentor.id);
    }
  }

  saveMentor() {
    if(this.teacherForm.valid){
      if(this.chosenMentor.id) {
        const updatedMentor: MentorModel = this.teacherForm.value;
        updatedMentor.id = this.chosenMentor.id; 
        this.mentorService.update(updatedMentor);
      }else {
        this.mentorService.create(this.teacherForm.value);
      }
      this.teacherForm.reset();
    }
  }

  editMentor(mentor: MentorModel) {
    this.chooseMentor(mentor);
    this.teacherForm.patchValue(this.chosenMentor);
  }
}
