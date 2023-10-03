import { Component } from '@angular/core';
import { DoublePipe } from './double.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'First';
  Heading:string="Appcomponent";
  Heading1:string="appcomp";
  display:boolean=true;
  textValueDisplay:string="comp to dom text"
  listDatas:any[]=[1,2,3,4,5];

  assignValue():void{
    alert("this call from dom")
  }
  ngDoCheck()
  {
    console.log(this.textValueDisplay);
  }
  }
 
  



















