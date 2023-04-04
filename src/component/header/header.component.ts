import { Component, Input } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  mode!: MatDrawerMode
  flag=true

  valuChange(){
    if(this.flag==false){
      this.flag=true
    }
    else{
      this.flag=false
    }
  }

}
