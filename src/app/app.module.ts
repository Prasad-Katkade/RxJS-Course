import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PromiceComponent } from './components/promice/promice.component';
import { ObservableComponent } from './components/observable/observable.component';
import { ListComponent } from './components/observable/list/list.component';
import { FromEventComponent } from './components/observable/from-event/from-event.component';
import { AddServiceService } from './services/add-service.service';
import { IntervalComponent } from './components/observable/interval/interval.component';
import { OfFromComponent } from './components/observable/of-from/of-from.component';
import { ToArrayComponent } from './components/observable/to-array/to-array.component';
import { CustomComponent } from './components/observable/custom/custom.component';
import { MapComponent } from './components/observable/map/map.component';
import { PluckComponent } from './components/observable/pluck/pluck.component';
import { FilterComponent } from './components/observable/filter/filter.component';
import { TapComponent } from './components/observable/tap/tap.component';
import { TakeComponent } from './components/observable/take/take.component';
import { RetryComponent } from './components/observable/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DebouncetimeComponent } from './components/observable/debouncetime/debouncetime.component';
import { SubjectComponent } from './components/observable/subject/subject.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { ReplysubjectComponent } from './components/observable/replysubject/replysubject.component';
import { AsyncsubjectComponent } from './components/observable/asyncsubject/asyncsubject.component';
import { ConcatComponent } from './components/observable/concat/concat.component';
import { MergeComponent } from './components/observable/merge/merge.component';
import { MergemapComponent } from './components/observable/mergemap/mergemap.component';
import { ConcatmapComponent } from './components/observable/concatmap/concatmap.component';
import { ConcatMobileEgComponent } from './components/observable/concat-mobile-eg/concat-mobile-eg.component';
import { SwitchmapComponent } from './components/observable/switchmap/switchmap.component';
import { SwitchmapSearchComponent } from './components/observable/switchmap-search/switchmap-search.component';
import { FormsModule } from '@angular/forms';
import { ExhaustmapComponent } from './components/observable/exhaustmap/exhaustmap.component';
import { ShareReplyComponent } from './components/observable/share-reply/share-reply.component';
import { CombinelatestComponent } from './components/observable/combinelatest/combinelatest.component';
import { ZipforkjoinComponent } from './components/observable/zipforkjoin/zipforkjoin.component';
import { CatchthrowComponent } from './components/observable/catchthrow/catchthrow.component';
import { ExternallibComponent } from './components/observable/externallib/externallib.component';
import { D3jsComponent } from './components/observable/d3js/d3js.component';
import { LangTranslateModule } from './modules/lang-translate/lang-translate.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiceComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebouncetimeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplysubjectComponent,
    AsyncsubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergemapComponent,
    ConcatmapComponent,
    ConcatMobileEgComponent,
    SwitchmapComponent,
    SwitchmapSearchComponent,
    ExhaustmapComponent,
    ShareReplyComponent,
    CombinelatestComponent,
    ZipforkjoinComponent,
    CatchthrowComponent,
    ExternallibComponent,
    D3jsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarRouterModule,
    FormsModule,
    LangTranslateModule
  ],
  providers: [AddServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
