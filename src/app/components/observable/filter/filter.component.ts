import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  items=[
    {id:1,
    name:"Itemmmm 1",
    type:'new'
    },
    {id:2,
    name:"Itemmmm 2",
    type:'old'},
    {id:3,
    name:"Itemmm 3",
    type:'new'},
    {id:4,
    name:"Itemm 4",
    type:'old'},
    {id:5,
    name:"Item 5",
    type:'new'},
  ]

  data:any;
  data2:any;
  data3:any;

  constructor() { }

  ngOnInit(): void {
    const source=from(this.items)

    //eg 1 filter by length
    source.pipe(
      filter(data=>data.name.length <= 8),
      toArray(),

    ).subscribe(res=>{
      console.log(res)
      this.data=res
    })

    //eg2 filter by type
    source.pipe(
     filter(data=>data.type=='new'),
      toArray(),

    ).subscribe(res=>{
      console.log(res)
      this.data2=res
    })

    //eg3 filter by nth-item
    source.pipe(
      filter(data=>data.id<3),
       toArray(),
 
     ).subscribe(res=>{
       console.log(res)
       this.data3=res
     })
  }

}
