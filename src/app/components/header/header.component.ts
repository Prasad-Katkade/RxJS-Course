import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AddServiceService } from 'src/app/services/add-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  exclusive:boolean=false;
  switchLang:string
  browserLang:string
  pagename:any;

  constructor(private addservice:AddServiceService,public translate:TranslateService) { 
    this.addservice.selectedLang.subscribe(res=>{
      this.switchLang=res
    })
    this.translate.addLangs(['de','en'])
    this.translate.setDefaultLang('en')
    this.translate.use('en')
    this.browserLang=translate.getDefaultLang()
    //this.languageChanged()
    this.addservice.selectedLang.next(this.browserLang)


    this.addservice.pageName.subscribe(res=>{
      this.pagename=res
    })
  

  }

  ngOnInit(): void {
    this.addservice.exclusive.subscribe(res=>{
      this.exclusive=res
    })
  }

  selectedLanguage(lang:string){
    console.log(lang)
    this.addservice.selectedLang.next(lang)
    this.browserLang=lang
    this.languageChanged()
  }

  languageChanged(){
    this.translate.use(this.browserLang.match(/de|en/)? this.browserLang:'en')
  }

  

}
