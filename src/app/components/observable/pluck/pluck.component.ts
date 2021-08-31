import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  constructor() { }

   items=[
    {id:1,
    name:"Item 1",
    desc:{
        type:'new'
      }
    },
    {id:2,
    name:"Item 2",
    desc:{
        type:'old'
      }},
    {id:3,
    name:"Item 3",
    desc:{
        type:'new'
      }},
    {id:4,
    name:"Item 4",
    desc:{
        type:'old'
      }},
    {id:5,
    name:"Item 5",
    desc:{
        type:'new'
      }},
  ]

  data:any;
  data2:any;
  data3:any;

  ngOnInit(): void {

    //eg 1
    from(this.items)
    .pipe(
      pluck('name'),
      toArray()
    ).subscribe(res=>{
      console.log(res);
      this.data=res;
    })

    //eg2
    from(this.items)
    .pipe(
      pluck('desc','type'),
      toArray()
    ).subscribe(res=>{
      console.log(res);
      this.data3=res;
    })

  }

}
