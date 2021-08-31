import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private addService:AddServiceService) { }

  sub1:Subscription;
  msg1:any;
  sub2:Subscription;
  msg2:any;
  sub3:Subscription;



  ngOnInit(): void {

    //eg 1
    const broadCastItem = interval(1000)
    this.sub1=broadCastItem.pipe(
      map(data=>'Item: '+data)

    ).subscribe(res=>{
     this.msg1=res
    })
    setTimeout(()=>{
        this.sub1.unsubscribe()
    },10000)


     //eg 2
    
     this.sub2=broadCastItem.pipe(
       map(data=>data*10)
 
     ).subscribe(res=>{
      this.msg2=res
     })
     setTimeout(()=>{
         this.sub2.unsubscribe()
     },10000)

     //eg 3
     const items=[
       {id:1,name:"Item 1"},
       {id:2,name:"Item 2"},
       {id:3,name:"Item 3"},
       {id:4,name:"Item 4"},
       {id:5,name:"Item 5"},
     ]

     let obs3=from(items)
     obs3.pipe(
       map(data=>data.name)
     )
     .subscribe(res=>{
       console.log(res)
       this.addService.print(res,"elContainer")
     })
    

  }

}
