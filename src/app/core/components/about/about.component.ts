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
    {imgUrl:'https://i0.wp.com/blog.scoutingmagazine.org/wp-content/uploads/sites/2/2019/06/Toy-Story-Andy.jpg?fit=1200%2C630&ssl=1'},
    {imgUrl:'https://images.unsplash.com/photo-1534996858221-380b92700493?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'},
    {imgUrl:'https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1488&q=80'},
    {imgUrl:'https://images.unsplash.com/photo-1519719498756-2f0d81cdf13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1375&q=80'},
    {imgUrl:'https://images.unsplash.com/photo-1561422419-9120edee6a9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'},    
    {imgUrl:'https://miro.medium.com/max/500/1*lvMZr7T_NTUSTrVc6EMgbA.jpeg'},
    {imgUrl:'https://www.napimesek.hu/tartalom/uploads/2019/05/nemo-nyomaban-mese-borito.jpg'}
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
