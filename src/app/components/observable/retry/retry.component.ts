import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { delay, retry, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  constructor(private http:HttpClient) { }
  fetching=false

  ngOnInit(): void {
    
  }

  data:any;
  status="No Data"

  fetchDetails(){
    this.fetching=true
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').pipe(
     // retry(5)
     retryWhen(err=>err.pipe(
       delay(1000),
       scan((retryCount)=>{
          if(retryCount>=5){
            throw err;
          }else{
            retryCount=retryCount+1
            console.log('retry count=='+retryCount)
            this.status="retrying attempt #"+retryCount
            return retryCount
          }
       },0)
       ))
    ).subscribe(res=>{
      console.log(res)
      this.data=res
      this.status="data fetched"
      this.fetching=false
    },(err)=>{
      console.log(err)
      this.fetching=false
      this.status="error fetching data"
    })
  }

}
