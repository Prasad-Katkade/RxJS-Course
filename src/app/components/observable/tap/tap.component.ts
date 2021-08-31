import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  constructor(private addService:AddServiceService) { }

  subs:Subscription
  subs2:Subscription
  mycolor:string="";

  ngOnInit(): void {


    const source=interval(1000)
   

    //eg 1
    const arr=['Item1','Item2','Item3']

    this.subs=source.pipe(
      tap(data=>{
        if(data==3){
          this.subs.unsubscribe()
        }
      }),
      map(data=>arr[data]),
      
    ).subscribe(res=>{
     // console.log(res)
      this.addService.print(res,"elcontainer")
    })

    //eg-2
    const colors=['Red','Green','Blue']

    

    this.subs2=source.pipe(
      tap(data=>{
        this.mycolor=colors[data]
        if(data==3){
          this.subs2.unsubscribe()
        }
      }),
      map(data=>colors[data]),
      
    ).subscribe(res=>{
      console.log(res)
      this.addService.print(res,"elcontainer2")
    })

  }

}
