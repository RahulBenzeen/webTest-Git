import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient:HttpClient) { }

 data =[{
      name:"rahul bhardwaj",
      role:"developer",
      experience:'2 years',
      project:"angular based, react based and node js "
    }]

     
    data$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    
    setData(data: any) {
      this.data$.next(data);
    }


    getPersonalData(){
      return this.data
    }
    url = 'https://google.com/'

getFilterSchema(req:any){
return this._httpClient.post(this.url,req)
}


//new experiments


private globalObject: any = {};

setGlobalValue(key: string, value: any) {
  this.globalObject[key] = value;
}

resetGlobalValue(key: string) {
  delete this.globalObject[key];
}

getGlobalObject() {
  return this.globalObject;
}

resetGlobalObject() {
  this.globalObject = {};
}

myGlobalObject =  {
name: '',
  age: 0,
  email: '',
  address: {
    street: '',
    city: '',
    state: '',
    zip: ''
  }
}

// myFilterObject:any = {

//     filterType:[
//       {
//         Name:'Inventory Id'
//       },
//     {
//       selectedFilter1:{
//         name:'Latest',
//         value:''
//       }
//     },
//     {
//       selectedFilter2:{
//         name:'Moderate',
//         value:''
//       }
//     },
//       {
//       selectedFilter3:{
//         name:'Old',
//         value:''
//       }
    
//       }
  
  
// ],

//     filterType1:[
//       {
//         name:'Model',
//       },
//       {
//       selectedFilter1:{
//         name:'Range Rover',
//         value:''
//       }
//     },
//       {
//       selectedFilter2:{
//         name:'BMW series',
//         value:''
//       }
//     },
//       {
//       selectedFilter3:{
//         name:'Dodge',
//         value:''
//       }
//       }
//   ]
// ,

//     filterType2:[
//       { 
//         name:'Make'
//       },
//       {
//       selectedFilter1:{
//         name:'Mercedes',
//         value:''
//       }
//     },
//       {
//       selectedFilter2:{
//         name:'BMW',
//         value:''
//       }
//     },
//       {
//       selectedFilter3:{
//         name:'Maruti',
//         value:''
//       }
//     }
//     ]

//   }


//   myFilterObject:any={
       
//   }


myFilterObject:any =[
      {
        filterlabel:'Personal Data'
      },
      {
        filterType:{
          name:'Inventory Id' ,
          selectedFilters1:{
             name:'Latest',
             value:'ggggg'
          },
          selectedFilters2:{
            name:'Moderate',
            value:''
          },
          selectedFilters3:{
            name:'Old',
            value:''
          }
        }  
     }
]




}
