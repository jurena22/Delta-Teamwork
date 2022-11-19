import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-szabi',
  templateUrl: './szabi.component.html',
  styleUrls: ['./szabi.component.scss']
})
export class SzabiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBackToTeachers(){
    this.router.navigate(["rolunk"])
  }

}
