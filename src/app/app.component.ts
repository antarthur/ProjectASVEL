import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectASVEL';

  firstname: string = ""
  secondname: string = ""
  coreToDisplay: string = "Login"

  coreToDisplayHandler(core: string) {
    this.coreToDisplay = core
  }
}
