import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,AfterViewInit {

  constructor(private addService:AddServiceService) { }
  @ViewChild("addbtn") addbtn:ElementRef

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    let counnt=0;
    fromEvent(this.addbtn.nativeElement,'click').subscribe(res=>{
      //console.log("Item : " +counnt++)
      this.addService.print("Item : "+counnt++,"elContainer")
    })
  }

 

}
