import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, map, mergeAll, mergeMap, switchAll, switchMap } from 'rxjs/operators';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css']
})
export class SwitchmapComponent implements OnInit {

  constructor(private addservice:AddServiceService) { }

  ngOnInit(): void {

    const source=from(['item1','item2','item3'])
     //eg1 MergeMap
     source.pipe(
      mergeMap((res:any)=> this.getData(res)),
     
    ).subscribe(res=>{
     
      this.addservice.print(res,'elcontainer')
    })
    //eg2 ConcatMap
    source.pipe(
      concatMap((res:any)=> this.getData(res)),
     
    ).subscribe(res=>{
     
      this.addservice.print(res,'elcontainer2')
    })
    //eg3 switchmap
    source.pipe(
      switchMap((res:any)=> this.getData(res)),
     
    ).subscribe(res=>{
     
      this.addservice.print(res,'elcontainer3')
    })
  }

  getData(data:any){
    return of(data+' updated').pipe(delay(1000))
  }

}
