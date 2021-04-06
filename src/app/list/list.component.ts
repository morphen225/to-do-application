import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  index = 0;
  showAddComponent = false;
  toDoList = []

  constructor(public router : Router, public dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.getToDoList().subscribe(data=>{
      this.toDoList = data;
    });
  }

  editClickHanlder(index){
    this.dataService.setSelectedItem(index);
    this.router.navigate(['/edit']);
  }

  deleteClickHandler(index){
    this.toDoList.splice(index,1);
  }

  addItemClickHandler(){
    this.showAddComponent = true;
    // this.index++;
    // this.toDoList.push(
    //   {
    //     title : 'Activity' + this.index,
    //     description : 'Activity' + this.index
    //   }
    // )
  }

  addDataEventHandler($event){
    var newItem = $event.data;
    this.toDoList.push(newItem);
    this.showAddComponent = false;
  }

}
