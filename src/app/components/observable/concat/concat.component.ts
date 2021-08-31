import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor(private addservice:AddServiceService) { }

  ngOnInit(): void {

    const source=interval(1000).pipe(map(res=>'from Item list 1 : '+(res+1)),take(5))
    const source2=interval(1000).pipe(map(res=>'from Item list 2 : '+(res+1)),take(3))
    const source3=interval(1000).pipe(map(res=>'from Item list 3 : '+(res+1)),take(4))

    // source.subscribe(res=>{
    //   console.log(res)
    //   this.addservice.print(res,'elcontainer')
    // })

    const finalobs=concat(source,source2,source3).subscribe(res=>{
      console.log(res)
        this.addservice.print(res,'elcontainer')
    })
  }

}
