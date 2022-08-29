import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatComponent } from './creat/creat.component';
import { EditComponent } from './edit/edit.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create' },
  { path: 'create', component: CreatComponent },
  { path: 'table', component: TableComponent },
  { path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
