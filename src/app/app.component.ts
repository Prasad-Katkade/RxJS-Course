import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { AddServiceService } from './services/add-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-course';
  pageName:string

  constructor(private router:Router,private addservice:AddServiceService){
      this.router.events.subscribe((e:any)=>{
          if(e instanceof NavigationEnd){
            var lastindex=window.location.pathname.lastIndexOf('/')+1
            this.pageName=window.location.pathname.substring(lastindex)
            console.log(this.pageName)
            this.addservice.pageName.next(this.pageName)
          }
      })
  }
}
