import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  student_data : any
  Isshowmodel:boolean=true;
  Isvisible:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }


  clickEvent(value : any) {
    this.Isvisible=true;
    this.Isshowmodel=false;
    this.student_data=value;
    console.log("values:" , value); // output emit result
  }

}
