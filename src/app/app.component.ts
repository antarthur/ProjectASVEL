import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectASVEL';

  coreToDisplay: string = "Home"
  activityToDisplay: string = "Alpinisme"

  coreToDisplayHandler(core: string) {
    this.coreToDisplay = core
  }

  activityToDisplayHandler(element) {
    this.coreToDisplay = element.core
    this.activityToDisplay = element.activity
  }
}
