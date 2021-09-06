import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { StupanelComponent } from './stupanel/stupanel.component';
import {ResultComponent} from './result/result.component';
const routes: Routes = [
    { path: 'form', component: FormComponent , pathMatch: 'full'},
    { path: 'studentpanel', component: StupanelComponent, pathMatch: 'full' },
    { path: 'result', component: ResultComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
