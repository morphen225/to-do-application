import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  item = {
    title : '',
    description : ''
  }

  @Input() showComponent;
  @Output() addDataEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  addClickHandler(){
    this.addDataEvent.emit({
      data : this.item
    });
  }

}
