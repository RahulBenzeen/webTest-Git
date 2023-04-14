import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from 'src/component/main/main.component';
import { Child1Component } from 'src/component/main/child1/child1.component';
import { SharedmoduleModule } from 'src/sharedModule/sharedmodule.module';
import { FooterComponent } from 'src/component/footer/footer.component';
import { HeaderComponent } from 'src/component/header/header.component';
import { DrawerComponent } from 'src/component/drawer/drawer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Child2Component } from 'src/component/main/child2/child2.component';
import { Child3Component } from 'src/component/main/child3/child3.component';
import { Filter1Component } from 'src/component/filters/filter1/filter1.component';
import { Filter2Component } from 'src/component/filters/filter2/filter2.component';
import { Filter3Component } from 'src/component/filters/filter3/filter3.component';
import { Filter4Component } from 'src/component/filters/filter4/filter4.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/component/services.service';
import { Child4Component } from 'src/component/main/child4/child4.component';
import { Child5Component } from 'src/component/main/child5/child5.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Child1Component,
    FooterComponent,
    HeaderComponent,
    DrawerComponent,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component,
    Filter1Component,
    Filter2Component,
    Filter3Component,
    Filter4Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedmoduleModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
