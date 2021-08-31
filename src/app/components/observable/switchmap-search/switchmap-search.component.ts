import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, pluck, switchMap, take, toArray } from 'rxjs/operators';
import { search } from 'src/app/interfaces/search.interface';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-switchmap-search',
  templateUrl: './switchmap-search.component.html',
  styleUrls: ['./switchmap-search.component.css']
})
export class SwitchmapSearchComponent implements AfterViewInit {

  @ViewChild('searchForm') searchForm:NgForm

  searchResults:any
  searchcount:any=0

  constructor(private addservice:AddServiceService) { }

  ngAfterViewInit(): void {

    // this.addservice.getSearches().subscribe(res=>{
    //   console.log(res)
    // })

    
      const formValue=this.searchForm.valueChanges;
      formValue!.pipe(
        filter(()=>this.searchForm.valid!),
       pluck('searchTerm'),
       debounceTime(1000),
       distinctUntilChanged(),
       switchMap(res=>this.addservice.getSearches(res)),

      ).subscribe(res=>{
       // console.log(res)
        this.searchResults=res
        this.searchcount=Object.keys(res).length
        console.log(this.searchResults)
      })
    
   
  }

 

}
