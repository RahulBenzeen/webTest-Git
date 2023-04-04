import { Component } from '@angular/core';
import { DataService } from '../services.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
 constructor( private dataServices:DataService){}

ngOnInit(){
  this.getAllData()
}

newStr = "a messsage from parents component "

getAllData(){
  const data = this.dataServices.getPersonalData()
  console.log('my data is fetched');
  console.log(data);
  
}
getTestData(){
  console.log('i am from parent component!');
  
}

}


