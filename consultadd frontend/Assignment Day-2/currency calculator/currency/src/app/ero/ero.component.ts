import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ero',
  templateUrl: './ero.component.html',
  styleUrls: ['./ero.component.css']
})
export class EROComponent implements OnInit {

  @Input() APP_curr = "";

  F_ANS = ""; 

  constructor() { }

  ngOnInit(): void {

    this.F_ANS = (parseFloat(this.APP_curr)*0.013).toString();

  }

}
