import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-asyncsubject',
  templateUrl: './asyncsubject.component.html',
  styleUrls: ['./asyncsubject.component.css']
})
export class AsyncsubjectComponent implements OnInit {

  constructor(private addservice:AddServiceService) { }

  
  @ViewChild('iteminput') iteminput:ElementRef;

  asyncitem:any;

  ngOnInit(): void {
    
 this.addservice.asyncitemEmit.subscribe(res=>{
   console.log(res)
   this.asyncitem=res
 })
 
  }

  onVideoAdd(item:any){
    console.log(item.value)
     this.addservice.asyncitemEmit.next(item.value)
      
  }

 
  oncomplete(){
    this.addservice.asyncitemEmit.complete()
  }

}
