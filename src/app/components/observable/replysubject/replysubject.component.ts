import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-replysubject',
  templateUrl: './replysubject.component.html',
  styleUrls: ['./replysubject.component.css']
})
export class ReplysubjectComponent implements OnInit {

  constructor(private addservice:AddServiceService) { }

  itemlist1=['item1','item2'];
  itemlist2:any=[];
  itemlist3:any=[];
  submode2:boolean=false;
  submode3:boolean=false;

  sub2:Subscription;
  sub3:Subscription;

  @ViewChild('iteminput') iteminput:ElementRef;

  ngOnInit(): void {
    this.addservice.itemEmit.subscribe(res=>{
      console.log(res)
      this.itemlist1.push(res)
    })
 
  }

  onVideoAdd(item:any){
     // console.log(item.value)
      this.addservice.itemEmit.next(item.value)
  }

  list2subscribe(){
    if(this.submode2){
      this.sub2.unsubscribe()
    }else{
      this.sub2=this.addservice.itemEmit.subscribe(res=>{
        this.itemlist2.push(res)
      })
    }

    this.submode2=!this.submode2;
  }
  list3subscribe(){

    if(this.submode3){
      this.sub3.unsubscribe()
    }else{
      this.sub3=this.addservice.itemEmit.subscribe(res=>{
        this.itemlist3.push(res)
      })
    }
    this.submode3=!this.submode3;
  }
sub4:Subscription
  methodInterval:boolean=false;
  toggleMethod(){
   
    if(!this.methodInterval){
      const item=interval(1000)
      this.sub4=item.subscribe(res=>{
       this.addservice.itemEmit.next('item : '+res)
      })
    }else{
    this.sub4.unsubscribe()
    }

    
  this.methodInterval= !this.methodInterval
  }

}
