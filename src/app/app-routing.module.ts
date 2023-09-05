import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponentComponent } from './Components/api-component/api-component.component';
import { FilterSearchComponent } from './Components/filter-search/filter-search.component';

const routes: Routes = [{
  path: '', component: ApiComponentComponent,
 
},
{
  path: 'filter', component: FilterSearchComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
