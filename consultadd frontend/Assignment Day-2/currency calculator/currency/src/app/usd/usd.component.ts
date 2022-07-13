import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html',
  styleUrls: ['./usd.component.css']
})
export class USDComponent implements OnInit {

  @Input() APP_curr = "";
  F_ANS = "";

  constructor() { }

  ngOnInit(): void {

    this.F_ANS = (parseFloat(this.APP_curr)/79).toString();

  }

}
