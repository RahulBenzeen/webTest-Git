import { Component, EventEmitter, Injectable, Output,OnChanges , SimpleChanges, Input, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
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
  constructor(private filterService: DataService, private cdr: ChangeDetectorRef) {
    this.filterService.myFilterObject
    console.log('i am log')
    console.log( this.filterService.myFilterObject)
  }

  @Output() appliedFilter = new EventEmitter<any>();


  filteObjectReset:any 
  myCloneData = this.filterService.myFilterObject;

  // myCloneData = structuredClone(this.filteObjectCopy);

 
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  appliedFilters() {
    this.appliedFilter.emit(this.myCloneData)
    this.postDataOnApi();
  }

  ngDoCheck(){
    console.log('this is onChanges');
    this.appliedFilter.emit(this.myCloneData)
  
  }


  postDataOnApi() {
    this.filterService.updateMyFilters(this.myCloneData);
  }
  ngOnInit() {
    console.log('my clone data 0.')

  }
  // ngOnDestroy() {
  //   this.dataSubscription.unsubscribe();
  // }

checkboxDisplayFlag1:any =false
checkboxDisplayFlag2:any =false
checkboxDisplayFlag3:any =false

checkFilters(event:any,checkBoxHelper:any){
     if(checkBoxHelper==='inventory'){
         this.checkboxDisplayFlag1=event.checked
     }
    
     if(checkBoxHelper==='model'){
      this.checkboxDisplayFlag2=event.checked
     }
     if(checkBoxHelper==='make'){
      this.checkboxDisplayFlag3=event.checked
     }

    
  }

  getobjectvalue(){
    console.log(this.filterService.myFilterObject)
  }
checkBoxChangeDetection(event:any, checkBoxlabel:any){
    
//inventory
     if(checkBoxlabel==='latest')
       if(event.checked==true){
         this.myCloneData[1].filterType.selectedFilters1.value = event.source.value
       }
     if(checkBoxlabel==='moderate')
       if(event.checked==true){
         this.myCloneData[1].filterType.selectedFilters2.value = event.source.value
       }
     if(checkBoxlabel==='old')
       if(event.checked==true){
         this.myCloneData[1].filterType.selectedFilters3.value = event.source.value
       }

//model

     if(checkBoxlabel==='range')
       if(event.checked==true){
         this.myCloneData[2].filterType.selectedFilters1.value = event.source.value
       }
     if(checkBoxlabel==='bmws')
       if(event.checked==true){
         this.myCloneData[2].filterType.selectedFilters2.value = event.source.value
       }
     if(checkBoxlabel==='dodge')
       if(event.checked==true){
         this.myCloneData[2].filterType.selectedFilters3.value = event.source.value
       }
//make

     if(checkBoxlabel==='mercedes')
       if(event.checked==true){
         this.myCloneData[3].filterType.selectedFilters1.value = event.source.value
       }
     if(checkBoxlabel==='bmw')
       if(event.checked==true){
         this.myCloneData[3].filterType.selectedFilters2.value = event.source.value
       }
     if(checkBoxlabel==='maruti')
       if(event.checked==true){
         this.myCloneData[3].filterType.selectedFilters3.value = event.source.value
       }
  }






}
