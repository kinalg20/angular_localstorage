import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stupanel',
  templateUrl: './stupanel.component.html',
  styleUrls: ['./stupanel.component.scss']
})
export class StupanelComponent implements OnInit {
  @Output() myCountEmit = new EventEmitter(); // output Emitter variable
  displayUser = [] as any;
  data :any;

  Isvisible:boolean=false
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
    this.Isvisible = true;
    this.data=dataparams;
    console.log(this.data)
    this.myCountEmit.emit({'displayform':this.data, 'component' : 'stupanel component'});
    this.router.navigate(['/result']);
  }
}

