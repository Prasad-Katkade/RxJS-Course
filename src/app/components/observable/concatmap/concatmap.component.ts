import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, map } from 'rxjs/operators';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.css']
})
export class ConcatmapComponent implements OnInit {

  constructor(private addservice:AddServiceService) { }

  ngOnInit(): void {

    const source=from(['item1','item2','item3'])
    source.pipe(
      map((res:any)=> this.getData(res))
    ).subscribe(res=>res.subscribe(res2=>{
     
      this.addservice.print(res2,'elcontainer')
    }))

     //eg2 map+concatall
     source.pipe(
      map((res:any)=> this.getData(res)),
      concatAll()
    ).subscribe(res=>{
     
      this.addservice.print(res,'elcontainer2')
    })
    //eg3 mergemap
    source.pipe(
      concatMap((res:any)=> this.getData(res)),
         
    ).subscribe(res=>{
         this.addservice.print(res,'elcontainer3')
    })
    

  }
  getData(data:any){
    return of(data+' updated')
  }

}
