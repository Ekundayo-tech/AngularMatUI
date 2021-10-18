import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'; 
import { SampleServiceService } from '../sample-service.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-sample-paging',
  templateUrl: './sample-paging.component.html',
  styleUrls: ['./sample-paging.component.css']
})
export class SamplePagingComponent implements OnInit {

  MyDataSource: any;  
  displayedColumns = ['id', 'albumId','title','url','thumbnailUrl'];

  constructor(public dataService: SampleServiceService) { }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.RenderDataTable();
  }

   RenderDataTable() {  
    this.dataService.GetAllPhotos()  
      .subscribe(  
      res => {  
        this.MyDataSource = new MatTableDataSource();  
        this.MyDataSource.data = res;  
        this.MyDataSource.paginator = this.paginator;  
        console.log(this.MyDataSource.data);  
      },  
      error => {  
        console.log('There was an error while retrieving Photos !!!' + error);  
      });  
  }  

}
