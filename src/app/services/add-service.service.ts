import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, throwError } from 'rxjs';
import { take } from 'rxjs/operators';
import { search } from '../interfaces/search.interface';

@Injectable({
  providedIn: 'root'
})
export class AddServiceService {

  constructor(private http:HttpClient) { }

  exclusive=new Subject<boolean>();
  type=new Subject<string>();
  //reply subject(how much previous values to be stored,time interval)
  itemEmit=new ReplaySubject<string>(5,2000)
  asyncitemEmit=new AsyncSubject()
  selectedLang=new BehaviorSubject('en')
  pageName=new BehaviorSubject('')


  url="https://jsonplaceholder.typicode.com/photos"

  print(i:any,id:string){
    let el=document.createElement('li')
    el.innerText=i

    document.getElementById(id)?.appendChild(el)
  }
  print2(i:any,id:string){
    let el=document.createElement('div')
    el.setAttribute('class','item')
    el.innerHTML=i

    document.getElementById(id)?.prepend(el)
  }

  getSearches(searchTerm:any):Observable<search>{
    return this.http.get<search>(this.url+'?q='+searchTerm)
  }

  
  handleError(err:HttpErrorResponse){
    console.log(err)
    let errmsg=''
    if(!err.error||!err.error.error){
      console.log("some error")
      errmsg="Unknown Error"
    
  }else{
    errmsg=err.error.error
  }
  return throwError(errmsg)
  }
}
