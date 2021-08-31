import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncsubjectComponent } from './components/observable/asyncsubject/asyncsubject.component';
import { CatchthrowComponent } from './components/observable/catchthrow/catchthrow.component';
import { CombinelatestComponent } from './components/observable/combinelatest/combinelatest.component';
import { ConcatMobileEgComponent } from './components/observable/concat-mobile-eg/concat-mobile-eg.component';
import { ConcatComponent } from './components/observable/concat/concat.component';
import { ConcatmapComponent } from './components/observable/concatmap/concatmap.component';
import { CustomComponent } from './components/observable/custom/custom.component';
import { D3jsComponent } from './components/observable/d3js/d3js.component';
import { DebouncetimeComponent } from './components/observable/debouncetime/debouncetime.component';
import { ExhaustmapComponent } from './components/observable/exhaustmap/exhaustmap.component';
import { ExternallibComponent } from './components/observable/externallib/externallib.component';
import { FilterComponent } from './components/observable/filter/filter.component';
import { FromEventComponent } from './components/observable/from-event/from-event.component';
import { IntervalComponent } from './components/observable/interval/interval.component';
import { ListComponent } from './components/observable/list/list.component';
import { MapComponent } from './components/observable/map/map.component';
import { MergeComponent } from './components/observable/merge/merge.component';
import { MergemapComponent } from './components/observable/mergemap/mergemap.component';
import { ObservableComponent } from './components/observable/observable.component';
import { OfFromComponent } from './components/observable/of-from/of-from.component';
import { PluckComponent } from './components/observable/pluck/pluck.component';
import { ReplysubjectComponent } from './components/observable/replysubject/replysubject.component';
import { RetryComponent } from './components/observable/retry/retry.component';
import { ShareReplyComponent } from './components/observable/share-reply/share-reply.component';
import { SubjectComponent } from './components/observable/subject/subject.component';
import { SwitchmapSearchComponent } from './components/observable/switchmap-search/switchmap-search.component';
import { SwitchmapComponent } from './components/observable/switchmap/switchmap.component';
import { TakeComponent } from './components/observable/take/take.component';
import { TapComponent } from './components/observable/tap/tap.component';
import { ToArrayComponent } from './components/observable/to-array/to-array.component';
import { ZipforkjoinComponent } from './components/observable/zipforkjoin/zipforkjoin.component';
import { PromiceComponent } from './components/promice/promice.component';

const routes: Routes = [
  {
    path:'promice' ,
    component:PromiceComponent
  },
  {
    path:'de/promice' ,
    component:PromiceComponent
  },
  {
    path:'observable',
    component:ObservableComponent,
    children:[
      {
        path:"",
        component:ListComponent
      },
      {
        path:"fromEvent",
        component:FromEventComponent
      },
      {
        path:"interval",
        component:IntervalComponent
      },
      {
        path:"ofFrom",
        component:OfFromComponent
      },
      {
        path:"toArray",
        component:ToArrayComponent
      },
      {
        path:"custom",
        component:CustomComponent
      },
      {
        path:"map",
        component:MapComponent
      },
      {
        path:"pluck",
        component:PluckComponent
      },
      {
        path:"filter",
        component:FilterComponent
      },
      {
        path:"tap",
        component:TapComponent
      },
      {
        path:"take",
        component:TakeComponent
      },
      {
        path:"retry",
        component:RetryComponent
      },
      {
        path:"debouncetime",
        component:DebouncetimeComponent
      },
      {
        path:"subject",
        component:SubjectComponent
      },
      {
        path:"replysubject",
        component:ReplysubjectComponent  
      },
      {
        path:"asyncsubject",
        component:AsyncsubjectComponent  
      },
      {
        path:"concat",
        component:ConcatComponent  
      },
      {
        path:"merge",
        component:MergeComponent  
      },
      {
        path:"mergemap",
        component:MergemapComponent  
      },
      {
        path:"concatmap",
        component:ConcatmapComponent  
      },
      {
        path:"concatmobile",
        component:ConcatMobileEgComponent  
      },
      {
        path:"switchmap",
        component:SwitchmapComponent  
      },
      {
        path:"switchmapsearch",
        component:SwitchmapSearchComponent  
      },
      {
        path:"exhaustmap",
        component:ExhaustmapComponent  
      },
      {
        path:"sharereply",
        component:ShareReplyComponent  
      },
      {
        path:"combinelatest",
        component:CombinelatestComponent  
      },
      {
        path:"zipforkjoin",
        component:ZipforkjoinComponent  
      },
      {
        path:"catchthrow",
        component:CatchthrowComponent  
      },
      {
        path:"externallib",
        component:ExternallibComponent  
      },
      {
        path:"d3js",
        component:D3jsComponent  
      }
    ]

  },
  {
    path:'**',
    redirectTo:'promice'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
