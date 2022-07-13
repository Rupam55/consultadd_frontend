import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad',
  templateUrl: './cad.component.html',
  styleUrls: ['./cad.component.css']
})
export class CADComponent implements OnInit {

  @Input() APP_curr = "";

  F_ANS = ""; 

  constructor() { }

  ngOnInit(): void {

    this.F_ANS = (parseFloat(this.APP_curr)*0.016).toString();

  }

}
