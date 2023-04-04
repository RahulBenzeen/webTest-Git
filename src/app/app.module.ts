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
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Child1Component,
    FooterComponent,
    HeaderComponent,
    DrawerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedmoduleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
