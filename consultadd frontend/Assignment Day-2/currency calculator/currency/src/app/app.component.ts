import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ans = "";
  title = 'currency';
  curr = "";
  type = "";

  func1(){
    if(this.curr === ""){
      this.ans = "no value given";
    }else{
      console.log(this.type);
      if(this.type === "USD"){
        this.ans = (parseFloat(this.curr)/79).toString(); 
      }else if(this.type === "ERO"){
        this.ans = (parseFloat(this.curr)*0.013).toString();
      }else if(this.type === "AUD"){
        this.ans = (parseFloat(this.curr)*0.019).toString();
      }else if(this.type === "CAD"){
        this.ans = (parseFloat(this.curr)*0.016).toString();
      }else if(this.type === "JPY"){
        this.ans = (parseFloat(this.curr)*1.72).toString();
      } 
    }
  }

}
