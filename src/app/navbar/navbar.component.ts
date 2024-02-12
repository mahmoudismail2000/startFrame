import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(){
   
    $(window).on('scroll',function(){
      let scrollTop:any=$(window).scrollTop();
          
          
            if(scrollTop>100){
              $('.container-fluid').animate({
                height:'60px'
              },500)
            }
           
          
         
    })
  }
 
}
