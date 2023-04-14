import { Component } from '@angular/core';
import { DataService } from 'src/component/services.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component {

  value: string = '';
   value1:string ='';
obj:any = []
  constructor(private globalService: DataService) {}

  setGlobalValue() {
     this.obj.push(this.value)
    this.globalService.setGlobalValue('value', this.value);
  }

  ngOnInit(){
    console.log('m console log data from services')
   console.log(this.globalService.myGlobalObject)
  }

}
