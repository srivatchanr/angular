import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListdataComponent } from './listdata/listdata.component';

const routes: Routes = [
  {path:'listdata',component:ListdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
