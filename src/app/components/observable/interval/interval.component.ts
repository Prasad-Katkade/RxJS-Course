import { Component, OnInit } from '@angular/core';
import { interval, Subscription,timer } from 'rxjs';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor(private addService:AddServiceService) { }

  item:any;
  itemsubscription:Subscription

  ngOnInit(): void {

    //const broadcaseItem=interval(1000)
    //timer(delay,interval)
    const broadcaseItem=timer(3000,1000)
    this.itemsubscription = broadcaseItem.subscribe(res=>{
      console.log(res)
      this.addService.print("Item : "+res,"elContainer")
      this.addService.print("Item : "+res,"elContainer2")
      this.addService.print("Item : "+res,"elContainer3")


      if(res>=5){
        this.itemsubscription.unsubscribe()
      }
    })
  }

}
