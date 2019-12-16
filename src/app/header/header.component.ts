import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() coreToDisplay: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateCore(target: string) {
    this.coreToDisplay.emit(target)
  }

}
