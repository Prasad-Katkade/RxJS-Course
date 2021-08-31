import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, map, take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-share-reply',
  templateUrl: './share-reply.component.html',
  styleUrls: ['./share-reply.component.css']
})
export class ShareReplyComponent implements OnInit {

  constructor(private http:HttpClient) { }
 
  allProducts:any;
  allposts:any
  userid1:any
  userid2:any

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res=>{
      //console.log(res)
      this.allProducts=res

      from(this.allProducts).pipe(take(20),toArray()).subscribe((res:any)=>{
        //console.log(res)
        this.allposts=res
      })

      from(this.allposts).pipe(filter((data:any)=>data.userId==1),toArray()).subscribe(res=>{
        console.log(res)
        this.userid1=res
      })
      from(this.allposts).pipe(filter((data:any)=>data.userId==2),toArray()).subscribe(res=>{
        console.log(res)
        this.userid2=res
      })
    
    })
 




   
  }

}
