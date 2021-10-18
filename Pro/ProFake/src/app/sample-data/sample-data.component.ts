import { Component, OnInit } from '@angular/core';
import { SampleServiceService } from '../sample-service.service';
import { MatSort } from '@angular/material/sort'; 
import { MatTableDataSource } from '@angular/material/table'; 

@Component({
  selector: 'app-sample-data',
  templateUrl: './sample-data.component.html',
  styleUrls: ['./sample-data.component.css']
})
export class SampleDataComponent implements OnInit {
 
  MyDataSource: any;  
  displayedColumns = ['id', 'userId','title','body']; 

  constructor(public dataService: SampleServiceService) { }

  ngOnInit(): void {
    this.RenderDataTable(); 
  }

  RenderDataTable() {  
    this.dataService.GetAllRecords()  
      .subscribe(  
      res => {  
        this.MyDataSource = new MatTableDataSource();  
        this.MyDataSource.data = res;  
        console.log(this.MyDataSource.data);  
      },  
      error => {  
        console.log('There was an error while retrieving Posts !!!' + error);  
      });  
  } 

  

}
