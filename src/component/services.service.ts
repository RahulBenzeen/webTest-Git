import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

    data =[{
      name:"rahul bhardwaj",
      role:"developer",
      experience:'2 years',
      project:"angular based, react based and node js "
    }]
     
    getPersonalData(){
      return this.data
    }

}
