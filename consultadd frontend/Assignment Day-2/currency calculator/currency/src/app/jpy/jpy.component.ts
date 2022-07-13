import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jpy',
  templateUrl: './jpy.component.html',
  styleUrls: ['./jpy.component.css']
})
export class JPYComponent implements OnInit {

  @Input() APP_curr = "";

  F_ANS = "";

  constructor() { }

  ngOnInit(): void {
  
    this.F_ANS = (parseFloat(this.APP_curr)*1.72).toString();
  
  }

}
