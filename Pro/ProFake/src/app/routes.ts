import { ModuleWithProviders } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { AppComponent } from './app.component';   
import { SampleSortComponent } from './sample-sort/sample-sort.component';  
import { SamplePagingComponent } from './sample-paging/sample-paging.component';  
import { SampleDataComponent } from './sample-data/sample-data.component';  
  
const appRoutes: Routes = [  
    { path: '', redirectTo: 'Data', pathMatch: 'full' }, 
    { path: 'Data', component: SampleDataComponent },  
    { path: 'Sorting', component: SampleSortComponent },  
    { path: 'Pagination', component: SamplePagingComponent },
  
];  

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); 