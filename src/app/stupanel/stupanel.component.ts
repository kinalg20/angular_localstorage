import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stupanel',
  templateUrl: './stupanel.component.html',
  styleUrls: ['./stupanel.component.scss']
})
export class StupanelComponent implements OnInit {

  displayUser = [] as any;
  studentdata :any
  data :any;
  Isshowmodel:boolean=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getUserData_from_localstorage()
    console.log("DIplsy", this.displayUser)
  }


  getUserData_from_localstorage() {
    let user = localStorage.getItem('userFormData');
    if (user) {
      this.displayUser = JSON.parse(user);
      console.log(this.displayUser)
    }
  }

  usingcarddata(dataparams:any) {
    this.data=dataparams;
    this.router.navigate(['/app-result'] , this.data);
    this.studentdata=dataparams;
    this.Isshowmodel=true;
    // console.log("you clicked on card",dataparams);
  }
}

