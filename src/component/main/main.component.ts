import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: []
})
export class MainComponent {
 constructor( ){}

ngOnInit(){
  this.getTestData()
    
}

newStr = "a messsage from parents component "


getTestData(){
  console.log('i am from parent component!');
  
}

}


