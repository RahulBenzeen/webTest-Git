import { Component } from '@angular/core';
import { DataService } from 'src/component/services.service';
@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {

constructor(private globalServices:DataService){}

val = ['none','no']

ngOnInit(){
   console.log(this.globalServices.getGlobalObject())
   console.log('this.globalServices.myFilterObjec')
   console.log(this.globalServices.myFilterObject)
   console.log(this.val.includes('none'))
}

myData = this.globalServices.myGlobalObject;
resetClone = structuredClone(this.myData);
newDat = structuredClone(this.myData);


applyAll(){
  console.log('i am applied from newData')
  this.globalServices.myGlobalObject=this.newDat
  console.log(this.globalServices.myGlobalObject);  
}


getAllvlues(){
  console.log('my all data from applied ')
 console.log(this.globalServices.myGlobalObject)
}

resetAllData(){
  this.globalServices.myGlobalObject=this.resetClone
}



}
