import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, zip } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-zipforkjoin',
  templateUrl: './zipforkjoin.component.html',
  styleUrls: ['./zipforkjoin.component.css']
})
export class ZipforkjoinComponent implements OnInit,AfterViewInit {

  constructor() { }

  nameSource:any[] = ['ajay','aditya','rohan','atharva']
  colorSource:any[] = ['red','yellow','green','pink','blue']

  @ViewChild('name') name:ElementRef
  @ViewChild('color') color:ElementRef

  ngOnInit(): void {
   
  }

  ngAfterViewInit(){
    const nameobs=fromEvent<any>(this.name.nativeElement,'change').pipe(map(data=>data.target.value),take(2))
    const colorobs=fromEvent<any>(this.color.nativeElement,'change').pipe(map(data=>data.target.value),take(2))

    //eg 1 zip 
    zip(nameobs,colorobs).subscribe(([name,color])=>{
        console.log(name,color)
        this.createBox(name,color,'elContainer')
    })
    //eg 2 fork join 
    forkJoin(nameobs,colorobs).subscribe(([name,color])=>{
        console.log(name,color)
        this.createBox(name,color,'elcontainer2')
    })
  }

  createBox(name:any,color:any,id:any){
    let el=document.createElement('div')
    el.innerText=name;
    el.setAttribute('class',color)
    document.getElementById(id)!.append(el)
  }

}
