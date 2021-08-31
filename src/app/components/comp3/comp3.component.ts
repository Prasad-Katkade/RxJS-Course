import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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
