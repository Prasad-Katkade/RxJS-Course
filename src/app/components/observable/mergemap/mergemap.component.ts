import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent implements OnInit {

  constructor(private addservice:AddServiceService) { }

  ngOnInit(): void {
    const source=from(['item1','item2','item3'])

    //eg1 map
    source.pipe(
      map((res:any)=> this.getData(res))
    ).subscribe(res=>res.subscribe(res2=>{
     
      this.addservice.print(res2,'elcontainer')
    }))
    //eg2 map+mergeall
    source.pipe(
      map((res:any)=> this.getData(res)),
      mergeAll()
    ).subscribe(res=>{
     
      this.addservice.print(res,'elcontainer2')
    })
    //eg3 mergemap
    source.pipe(
      mergeMap((res:any)=> this.getData(res)),
     
    ).subscribe(res=>{
     
      this.addservice.print(res,'elcontainer3')
    })
    
  }


  getData(data:any){
    return of(data+' updated')
  }
}




