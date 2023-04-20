import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Filter1Component } from 'src/component/filters/filter1/filter1.component';
import { DataService } from 'src/component/services.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  providers: [Filter1Component],
})
export class Child2Component {

@ViewChild(Filter1Component) filter1!:Filter1Component

  constructor(
    private ObjectService: DataService
  ) {}

  ngOnInit() {}


  reqBody: any;
  onAppliedFilterChanged(event: any) {
    console.log('my other filter1 data through event emitter');
    console.log(event);
    this.reqBody = event;
  }

  applyAllFilters() {
    console.log('applied')
    this.ObjectService.updateMyFilters(this.reqBody);
   
  }

  resetAllFilters() {
    console.log('reset')
    this.ObjectService.resetMyAppliedFilters();
    this.filter1.myDupliCateFunction()

  }

}
