import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../servises/get-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [ 'Name', 'Email', 'Phone','Address','Gender', 'Actions'];
  dataSource : any;

  constructor(private service : GetDataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.dataSource=users;
  }
}
export const users=[
  {
    name:'ali',
    email:"ali@gmail.com",
    phone:123654847,
    address:"cairo",
    gender:"Male"
  },
  {
    name:'ali',
    email:"ali@gmail.com",
    phone:123654847,
    address:"cairo",
    gender:"Male"
  },
  {
    name:'ali',
    email:"ali@gmail.com",
    phone:123654847,
    address:"cairo",
    gender:"Male"
  }
]