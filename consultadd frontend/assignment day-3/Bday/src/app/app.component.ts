import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data : any;
  title = 'Bday';

  rMsg($event: any){
    this.data = $event;
  }
}
