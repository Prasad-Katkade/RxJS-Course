import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  type2='new'
  constructor(private addService:AddServiceService) { this.addService.type.subscribe(res=>{
    this.type2=res
  })}

  @ViewChild('type') type:ElementRef

  ngOnInit(): void {
  }
 
  onClick(type1:any){
    console.log(type1.value)
    this.addService.type.next(type1.value)
   
  }

}




