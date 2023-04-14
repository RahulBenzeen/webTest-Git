import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Child1Component } from 'src/component/main/child1/child1.component';
import { Child2Component } from 'src/component/main/child2/child2.component';
import { Child3Component } from 'src/component/main/child3/child3.component';
import { Child4Component } from 'src/component/main/child4/child4.component';
import { Child5Component } from 'src/component/main/child5/child5.component';


const routes: Routes = [
  // {path:'', component:MainComponent},
  {path:'child2', component:Child2Component},
  {path:'child1', component:Child1Component},
  {path:'child3', component:Child3Component},
  {path:'child4', component:Child4Component},
  {path:'child5', component:Child5Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
