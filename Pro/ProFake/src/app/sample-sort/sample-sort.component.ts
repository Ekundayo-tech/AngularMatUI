import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SampleServiceService } from '../sample-service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sample-sort',
  templateUrl: './sample-sort.component.html',
  styleUrls: ['./sample-sort.component.css']
})
export class SampleSortComponent implements OnInit {

  MyDataSource: any;  
  displayedColumns = ['id', 'userId','title'];  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;  
  @ViewChild(MatSort)
  sort!: MatSort;
  
  constructor(public dataService: SampleServiceService) { }

  ngOnInit(): void {
    this.RenderDataTable();
  }

  RenderDataTable() {  
    this.dataService.GetAllAlbums()  
      .subscribe(  
      res => {  
        this.MyDataSource = new MatTableDataSource();  
        this.MyDataSource.data = res;  
        this.MyDataSource.sort = this.sort;  
        this.MyDataSource.paginator = this.paginator;  
        console.log(this.MyDataSource.data);  
      },  
      error => {  
        console.log('There was an error while retrieving Albums !!!' + error);  
      });  
  } 

}
