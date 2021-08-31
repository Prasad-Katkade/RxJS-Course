import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { take, takeLast, takeUntil } from 'rxjs/operators';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor(private addService:AddServiceService) { }

   items=['Item1','Item2','Item3','Item4','Item5','Item6']
  ngOnInit(): void {


   //eg 1
    const source=interval(1000).pipe(take(5))
    source.subscribe(res=>{
      console.log(res);
      this.addService.print(res,"elContainer1")
    })


    //eg 2

    const itemsource=from(this.items).pipe(takeLast(5))
    itemsource.subscribe(res=>{
      console.log(res)
      this.addService.print(res,"elContainer2")
    })

    //eg 2

    let condition1=timer(8000)
    let condition2=fromEvent(document,'click')
    const source2=interval(1000).pipe(
      takeUntil(condition2)
    )
    source2.subscribe(res=>{
      console.log(res);
      this.addService.print(res,"elContainer3")
    })
    

  }

}
