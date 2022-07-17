import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  @Output() msgEvent = new EventEmitter<object[]>();

  constructor(private appService: AppService) { }

  data : any;
  // optionValue : string = "";
  myOp = "";

  // code not in use
  form = new FormGroup({
    option: new FormControl('')
  });
   
  get f(){
    return this.form.controls;
  }
  // 


  // function that sorts and send data to parent component. 
  submit(){
    
    console.log(this.myOp);
    if(this.myOp === "title"){
      this.data.sort((a: { title: string; },b: { title: string; }) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
      this.msgEvent.emit(this.data);
    }
    else if(this.myOp === "ID"){
      this.data.sort((a: { id:string; },b: { id:string; }) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0));
      this.msgEvent.emit(this.data);
    }
    else{
      this.data.sort((a: { id:string; },b: { id:string; }) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
      this.msgEvent.emit(this.data);
    }
  }

  ngOnInit(): void {

    this.appService.getData().subscribe((res) => {
      this.data  = res;
      console.log("res" , res);
    })

  }
}
