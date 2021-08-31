import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatMap, exhaustMap, tap } from 'rxjs/operators';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-exhaustmap',
  templateUrl: './exhaustmap.component.html',
  styleUrls: ['./exhaustmap.component.css']
})
export class ExhaustmapComponent implements OnInit,AfterViewInit {

  constructor(private http:HttpClient,private addservice:AddServiceService) { }

  url="https://global-1bb0f.firebaseio.com/exhaustMap.json"
  num=0;
  data=0;
  fetching=true;
  

  @ViewChild('btn') btn:ElementRef

  ngOnInit(): void {
  }

  ngAfterViewInit(){

      fromEvent(this.btn.nativeElement,'click').pipe(
        tap(()=>this.fetching=true),
       exhaustMap(res=>this.onSave(this.num++))
        ).subscribe(res=>{
          console.log(res)
          this.onFetch()
          this.fetching=false
         
      })
  }

  onSave(val:any){
    return this.http.put(this.url,{data:val})
  }

  onFetch(){
    this.http.get<any>(this.url).subscribe(res=>{
      console.log(res)
      this.data=res.data
    })
  }



}
