import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styleUrls: ['./combinelatest.component.css']
})
export class CombinelatestComponent implements OnInit ,AfterViewInit {

  constructor() { }

  nameSource:any[] = ['ajay','aditya','rohan','atharva']
  colorSource:any[] = ['red','yellow','green','pink','blue']

  @ViewChild('name') name:ElementRef
  @ViewChild('color') color:ElementRef

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const nameobs=fromEvent<any>(this.name.nativeElement,'change').pipe(map(data=>data.target.value))
    const colorobs=fromEvent<any>(this.color.nativeElement,'change').pipe(map(data=>data.target.value))

    //eg 1 combine latest
    combineLatest(nameobs,colorobs).subscribe(([name,color])=>{
      console.log(name,color)
      //elContainer
      this.createBox(name,color,'elContainer')
    })

     //eg 1  withlatestForm
     //master nameobs
     //slave colorobs
    nameobs.pipe(withLatestFrom(colorobs)).subscribe(([name,color])=>{
      console.log(name,color)
      //elContainer
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
