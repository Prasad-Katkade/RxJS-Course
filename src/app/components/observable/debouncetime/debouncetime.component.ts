import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.css']
})
export class DebouncetimeComponent implements AfterViewInit{

  constructor(private loadingbar:LoadingBarService) { }
  
  @ViewChild('searchInput') searchInput:ElementRef
  data:any=null;
  @ViewChild('searchInput2') searchInput2:ElementRef
  data2:any=null;

  ngAfterViewInit(): void {

    //eg-1 debounce time
  const searchterm = fromEvent(this.searchInput.nativeElement,'keyup').pipe(
    map((event:any)=>event.target.value),
    debounceTime(1000)
  )
  searchterm.subscribe(res=>{
    console.log(res)
    this.data=res
    this.loadingbar.start()

    setTimeout(()=>{
        this.data=null
        this.loadingbar.stop()
    },2000)
    
  })

      //eg-2 debounce time
      const searchterm2 = fromEvent(this.searchInput2.nativeElement,'keyup').pipe(
        map((event:any)=>event.target.value),
        debounceTime(1000),
        distinctUntilChanged()
      )
      searchterm2.subscribe(res=>{
        console.log(res)
        this.data2=res
        this.loadingbar.start()
    
        setTimeout(()=>{
            this.data2=null
            this.loadingbar.stop()
        },2000)
        
      })

  }

 

}
