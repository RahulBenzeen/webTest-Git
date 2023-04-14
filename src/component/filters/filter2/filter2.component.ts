import { Component } from '@angular/core';
import { DataService } from 'src/component/services.service';


@Component({
  selector: 'app-filter2',
  templateUrl: './filter2.component.html',
  styleUrls: ['./filter2.component.css']
})
export class Filter2Component {
  constructor(private filteredServices:DataService){}
  data:any

  ngOnInit(){
      this.filteredServices.data$.subscribe(data=>{
        this.data = data
        console.log('my data from observable');
        console.log(this.data);
      })
  }
}
