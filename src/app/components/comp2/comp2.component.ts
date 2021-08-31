import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddServiceService } from 'src/app/services/add-service.service';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  type2='new'
  destroyService: Subscription;
  constructor(private addService:AddServiceService) {
    
    
    
  this.destroyService=  this.addService.type.subscribe(res=>{
    this.type2=res
  })


}

ngOnDestry(){

  this.destroyService.unsubscribe();

}

  @ViewChild('type') type:ElementRef

  ngOnInit(): void {
  }
 
  onClick(type1:any){
    console.log(type1.value)
    this.addService.type.next(type1.value)
   
  }

}
