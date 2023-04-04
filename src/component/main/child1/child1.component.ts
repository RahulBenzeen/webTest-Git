import { Component, Input } from '@angular/core';
import { MainComponent } from '../main.component';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  providers:[MainComponent]
})
export class Child1Component {
   constructor(private mainData :MainComponent){}
  @Input() messageToChild!:string

ngOnInit(){

}

  demoFuntion(){
   this.mainData.getTestData()
  }
}
