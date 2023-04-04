import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawerComponent } from 'src/component/drawer/drawer.component';
import { Child1Component } from 'src/component/main/child1/child1.component';


const routes: Routes = [
  // {path:'', component:MainComponent},
  {path:'drawer', component:DrawerComponent},
  {path:'child1', component:Child1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
