import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() activityToDisplay: EventEmitter<object> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  goToActivity(activity: object){
    this.activityToDisplay.emit(activity)
  }
}
