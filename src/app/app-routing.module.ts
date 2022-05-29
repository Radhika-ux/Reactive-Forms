import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms/reactiveforms.component';

const routes: Routes = [
  {path:'registrationform',component: ReactiveformsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
