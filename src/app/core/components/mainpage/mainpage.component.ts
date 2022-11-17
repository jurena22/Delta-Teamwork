import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  wordText1: string[] = ['Új kihívásra vágysz?', 'Kipróbálnál valami újat?', 'Érdekel az IT világa?', 'Munkahelyváltás előtt állsz?', 'PROGmasters?'];

  constructor() {}

  ngOnInit(): void {}
}
