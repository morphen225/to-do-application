import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  toDolist = [];
  selectedItem;
  selectedItemIndex = 0;

  constructor(public dataService : DataService, public router : Router) {
    this.dataService.getToDoList().subscribe(data => {
      this.toDolist = data;
    })
   }

  ngOnInit(): void {
    this.dataService.getSelectedItem().subscribe(data => {
      this.selectedItemIndex = data;
      if(this.toDolist.length >0){
        this.selectedItem = this.toDolist[this.selectedItemIndex];
      }
    })
  }

  editClickHandler(){
    this.toDolist[this.selectedItemIndex] = this.selectedItem;
    this.dataService.setToDoList(this.toDolist);
    this.router.navigate(['/lists']);
  }

}
