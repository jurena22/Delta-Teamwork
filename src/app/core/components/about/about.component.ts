import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }



  public imgURLS: any = [
    '../assets/images/gallery/headquerter.png',
    '../assets/images/gallery/tanterem2.png',
    '../assets/images/gallery/tanterem3.png',
    '../assets/images/gallery/tanterem4.png',
    '../assets/images/gallery/tanterem5.png',    
    '../assets/images/gallery/tanterem6.png',
    '../assets/images/gallery/tanterem7.png'
  ];
 
  public pictures: any = this.imgURLS[0];
  
  

  public goForward(){

    let i = this.imgURLS.indexOf(this.pictures);
    if(i === this.imgURLS.length - 1){
      this.pictures = this.imgURLS[0]
    }else{
      this.pictures = this.imgURLS[i+1]
    }
  }
  
  public goBackward(){
  
    let i = this.imgURLS.indexOf(this.pictures);
    if(i === 0){
      this.pictures = this.imgURLS[this.imgURLS.length-1]
    }else{
      this.pictures = this.imgURLS[i-1]
    }
  }



  goToEnroll(){
    this.router.navigate(["jelentkezes"])
  }


  goToSzabi(){
    this.router.navigate(["rolunk/szabi"])
  }

  goToZoli(){
    this.router.navigate(["rolunk/zoli"])
  }

  goToLaci(){
    this.router.navigate(["rolunk/laci"])
  }
}
