import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  selectedItem = new BehaviorSubject(0);
  toDoList = new BehaviorSubject([
    {
      title : 'Draw',
      description : 'Drawing Activity'
    },
    {
      title : 'Write',
      description : 'Writing Activity'
    }
  ]);

  constructor() { }

  getSelectedItem(){
    return this.selectedItem.asObservable();
  }

  setSelectedItem(item){
    this.selectedItem.next(item)
  }

  getToDoList(){
    return this.toDoList.asObservable();
  }

  setToDoList(list){
    this.toDoList.next(list);
  }

}
