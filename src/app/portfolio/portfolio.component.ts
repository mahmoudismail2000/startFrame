import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgId:string=''
 

  imgLinks:string[]=["./assets/poert1.png","./assets/port2.png","./assets/port3.png","./assets/poert1.png","./assets/port2.png","./assets/port3.png"]

  imgClick(info:any){  
    let img:string=info.target.id
    this.imgId=img  
  }
  closeImg():void{
    this.imgId=''
  }
  


}


