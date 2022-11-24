import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  wordText1: string[] = ['Új kihívásra vágysz?', 'Kipróbálnál valami újat?', 'Érdekel az IT világa?', 'Munkahelyváltás előtt állsz?', 'PROGmasters?'];
  images = [
    {
      title: 'testz',
      secodTitle: '1',
      url:"assets/images/new-job.jpg",
    },
    {
      title: 'teszt2',
      secodTitle: '2',
      url:"assets/images/languages.png",
    },
    {
      title: 'teszt3',
      secodTitle: '3',
      url:"assets/images/softskills.jpg",
    },
    {
      title: 'teszt4',
      secodTitle: '4',
      url:"assets/images/partners.jpg",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
