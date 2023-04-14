import { Component, Injectable } from '@angular/core';
import { DataService } from 'src/component/services.service';

@Component({
  selector: 'app-filter1',
  templateUrl: './filter1.component.html',
  styleUrls: ['./filter1.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class Filter1Component {
  constructor(private filterService: DataService) {}

filteObjectCopy = this.filterService.myFilterObject
myCloneData =structuredClone(this.filteObjectCopy)

value1: any;
value2: any;
value3: any;
test1:any =true
test2:any=false
test3:any=false
myCheckeflag:any

  filterSchema: any = {
    filterType: [],
    selctedField: [],
  };

  ngOnInit(){
    console.log('my ng oninit');
    console.log('my clone data')
    console.log(this.myCloneData)
    // console.log(this.filteObjectCopy);
    console.log(this.myCloneData[1].filterType.selectedFilters1.value);

// for(let data of this.myCloneData){
//      console.log('dataX');
//      console.log(data.filterType);
//      console.log(data.filterType);
     
// }
    
  }

  checkedValue(event:any){
    console.log('my compromised event ')
    console.log(event.target.checked)
    this.myCheckeflag= event.target.checked

  }

  appliedFilters() {
  this.postDataOnApi();
  }
  postDataOnApi() {
    this.filterService.getFilterSchema(this.filterSchema).subscribe((data) => {
      console.log(`my data ${data}`);
    });
    this.filterService.setData(this.filterSchema)
  }
  changeDetection(event: any, selctedmasterCheckbox: any) {
    if (selctedmasterCheckbox === 'inventory') {
      this.value1 = event.checked;
      if (event.checked === true) {
        this.filterSchema.filterType.push(event.source.value);
      } else {
        this.filterSchema.filterType.pop(event.source.value);
      }
    }
    if (selctedmasterCheckbox === 'model') {
      this.value2 = event.checked;
      if (event.checked === true) {
        this.filterSchema.filterType.push(event.source.value);
      } else {
        this.filterSchema.filterType.pop(event.source.value);
      }
    }
    if (selctedmasterCheckbox === 'make') {
      this.value3 = event.checked;
      if (event.checked === true) {
        this.filterSchema.filterType.push(event.source.value);
      } else {
        this.filterSchema.filterType.pop(event.source.value);
      }
    }
  }
  
  inventorySelected(event: any, checkboxName: string) {

    if (checkboxName === 'inventory1') {
      
      if (event.checked === true) {
        this.filterSchema.selctedField.push(event.source.value);
      } else {
        this.filterSchema.selctedField.pop(event.source.value);
      }
    }
    if (checkboxName === 'inventory2') {
      if (event.checked === true) {
        this.filterSchema.selctedField.push(event.source.value);
      } else {
        this.filterSchema.selctedField.pop(event.source.value);
      }
    }
    if (checkboxName === 'inventory3') {
      if (event.checked === true) {
        this.filterSchema.selctedField.push(event.source.value);
      } else {
        this.filterSchema.selctedField.pop(event.source.value);
      }
    }
  }
  modelSelcted(event: any, checkboxName: string) {
    if (checkboxName === 'model1') {
      if (event.checked === true) {
        this.filterSchema.selctedField.push(event.source.value);
      } else {
        this.filterSchema.selctedField.pop(event.source.value);
      }
    }
    if (checkboxName === 'model2') {
      if (event.checked === true) {
        this.filterSchema.selctedField.push(event.source.value);
      } else {
        this.filterSchema.selctedField.pop(event.source.value);
      }
    }
    if (checkboxName === 'model3') {
      if (event.checked === true) {
        this.filterSchema.selctedField.push(event.source.value);
      } else {
        this.filterSchema.selctedField.pop(event.source.value);
      }
    }
  }
  makeSelected(event: any, checkboxName: string) {
    if (checkboxName === 'make1') {
      if (event.checked === true) {
        this.filterSchema.selctedField.push(event.source.value);
      } else {
        this.filterSchema.selctedField.pop(event.source.value);
      }
    }
    if (checkboxName === 'make2') {
      if (event.checked === true) {
        this.filterSchema.selctedField.push(event.source.value);
      } else {
        this.filterSchema.selctedField.pop(event.source.value);
      }
    }
    if (checkboxName === 'make3') {
      if (event.checked === true) {
        this.filterSchema.selctedField.push(event.source.value);
      } else {
        this.filterSchema.selctedField.pop(event.source.value);
      }
    }
  }
}
