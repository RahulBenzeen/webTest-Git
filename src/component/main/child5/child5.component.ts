import { Component } from '@angular/core';
import { DataService } from 'src/component/services.service';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component {
  constructor(private globalService: DataService) {}

  get globalValue() {
    return this.globalService.getGlobalObject().value;
  }

  resetGlobalValue() {
    this.globalService.resetGlobalValue('value');
  }
}
