import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-catchthrow',
  templateUrl: './catchthrow.component.html',
  styleUrls: ['./catchthrow.component.css']
})
export class CatchthrowComponent implements OnInit {

  error:any;
  allProducts:any;
  fetching:boolean = false
  showerr=false
  constructor(private http:HttpClient,private addservice:AddServiceService) { }

  ngOnInit(): void {
  }
  onGetProducts(){
    this.fetching = true;
    this.getProducts().subscribe(res=>{
      console.log(res)
      this.allProducts = res
      this.fetching = false;

    },(err)=>{
      console.log(err)
      if(!err.error||!err.error.error){
          console.log("some error")
          this.error="Unknown Error"
          this.showerr=true
      }else{
        this.error=err.error.error
        this.fetching = false
        this.showerr=true
      }
     
    })
  }
  getProducts(){
    return this.http.get<any>('https://jsonplaceholder.typcode.com/posts').pipe(catchError(this.addservice.handleError))
  }

}
