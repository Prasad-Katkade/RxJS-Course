import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {

  type:any="New";

  constructor(private addservice:AddServiceService) { 
    this.addservice.type.subscribe(res=>{
        this.type=res
    })
  }


  ngOnInit(): void {
    this.addservice.exclusive.next(true)
  }

  ngOnDestroy(){
    this.addservice.exclusive.next(false)
  }

}
