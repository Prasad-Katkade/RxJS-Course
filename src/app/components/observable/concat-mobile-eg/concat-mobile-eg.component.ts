import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-concat-mobile-eg',
  templateUrl: './concat-mobile-eg.component.html',
  styleUrls: ['./concat-mobile-eg.component.css']
})
export class ConcatMobileEgComponent implements OnInit {

  constructor(private addservice:AddServiceService) { }

  notifydata=[
    {
      name:'Facebook',
      icon:'https://image.flaticon.com/icons/png/512/124/124010.png',
      time:'4 seconds ago',
      img:'https://placeimg.com/50/50/tech/4',
      strong:'Mr Abc',
      p:'Comented on your post..'
    },
    {
      name:'Twitter',
      icon:'https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-featured.png',
      time:'3 seconds ago',
      img:'https://placeimg.com/50/50/tech/4',
      strong:'Mr Abc',
      p:'Tweeted on your post..'
    },
    {
      name:'Facebook',
      icon:'https://image.flaticon.com/icons/png/512/124/124010.png',
      time:'2 seconds ago',
      img:'https://placeimg.com/50/50/tech/4',
      strong:'Mr Abc',
      p:'Comented on your post..'
    },
    {
      name:'Twitter',
      icon:'https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-featured.png',
      time:'1 seconds ago',
      img:'https://placeimg.com/50/50/tech/4',
      strong:'Mr Abc',
      p:'Tweeted on your post..'
    },
  ]

  ngOnInit(): void {

    //using merge mapp

    // from(this.notifydata).pipe(mergeMap(res=>this.getHtml(res))).subscribe(res=>{
    //     console.log(res)
    //     this.addservice.print2(res,"elcontainer")
    // })

    //using concat  mapp
    from(this.notifydata).pipe(concatMap(res=>this.getHtml(res))).subscribe(res=>{
      console.log(res)
      this.addservice.print2(res,"elcontainer")
  })

  }

  getHtml(data:any){

   return of(`
    <div class="header">
              <div class="app">
                <img src="${data.icon}" alt="na" width="20" height="20">
                ${data.name}
              </div>
              <div class="time"> ${data.time}</div>
    </div>
    <div class="body">
         <img class="item-img" src="${data.img}" alt="na" width="50" height="50">
         <strong>${data.strong}</strong>
         <p>${data.p}</p>
  </div>`).pipe(delay(2000))


  }


}
