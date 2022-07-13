import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aud',
  templateUrl: './aud.component.html',
  styleUrls: ['./aud.component.css']
})
export class AUDComponent implements OnInit {

  @Input() APP_curr = "";

  F_ANS =  "";

  constructor() { }

  ngOnInit(): void {

    this.F_ANS = (parseFloat(this.APP_curr)*0.019).toString();

  }

}
