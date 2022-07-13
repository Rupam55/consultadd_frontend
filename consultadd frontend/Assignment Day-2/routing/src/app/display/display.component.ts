import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private appService: AppService) { }
  
  data : any;
  
  ngOnInit(): void {

    this.appService.getData().subscribe((res) => {
      this.data  = res;
      console.log("res" , res);
    })

  }

}
