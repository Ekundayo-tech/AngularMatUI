import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { routing } from './routes';
import {HttpClientModule} from '@angular/common/http';
import { SampleServiceService } from './sample-service.service';
import { AppComponent } from './app.component';
import { SampleDataComponent } from './sample-data/sample-data.component';
import { SamplePagingComponent } from './sample-paging/sample-paging.component';
import { SampleSortComponent } from './sample-sort/sample-sort.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SampleDataComponent,
    SamplePagingComponent,
    SampleSortComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'data-list', component: SampleDataComponent},
      {path: 'sorting-list', component: SampleSortComponent},
      {path: 'paging-list', component: SamplePagingComponent},
    ]),
    HttpClientModule,  
    routing,  
    BrowserAnimationsModule, 
    BrowserModule,
    MatToolbarModule , MatMenuModule , MatInputModule , MatTableModule ,MatButtonModule,MatCardModule,MatPaginatorModule,MatSortModule  
  ],
  exports:[  
    MatToolbarModule , MatMenuModule , MatInputModule , MatTableModule ,MatButtonModule,MatCardModule,MatPaginatorModule,MatSortModule  
  ],
  providers: [SampleServiceService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
