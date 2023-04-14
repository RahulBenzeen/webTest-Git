import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filter1Component } from 'src/component/filters/filter1/filter1.component';
 


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  providers: [Filter1Component]
})
export class Child2Component {
  constructor(private appliedFilter:Filter1Component) {}





  ngOnInit() {
  
  }

}
