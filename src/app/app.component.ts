import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-demo-grid-layout-wc';
  layoutList = [
    {x: 1,  y: 1,   w: 44, h: 40, "slot":"1","id":1},
    {x: 46, y: 1,   w: 81, h: 40, "slot":"2","id":2},
    {x: 1,  y: 42,  w: 69, h: 35, "slot":"3","id":3},
    {x: 71, y: 42,  w: 56, h: 35, "slot":"4","id":4},
    {x: 1,  y: 55,  w: 37, h: 34, "slot":"5","id":5,float: true}
  ]
  isEdit = false;
  onEdit(e:any){
    this.isEdit= true;
  }
  onClose(e:any){
    console.log(e);
    this.isEdit = false;
  }
  onSave(e:any){
    console.log(e);
  }
}
