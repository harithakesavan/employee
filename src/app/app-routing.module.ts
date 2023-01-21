import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaydetailsComponent } from './displaydetails/displaydetails.component';
import { SubmitdetailsComponent } from './submitdetails/submitdetails.component';

const routes: Routes = [
  {path:'',redirectTo:'submitdetails',pathMatch:'full'},
  {path:'submitdetails',component:SubmitdetailsComponent},
  {path:'displaydetails',component:DisplaydetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
