import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  parent: string = "hello welcome to all"
  form_data: object = {};
  data: any;
  isenabled = true;
  arrayobject = [] as any;
  @Output() myOutput: EventEmitter<string> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  enable() {
    this.isenabled = !this.isenabled;
  }

  userList = [];

  registerUser(data: any) {
    this.form_data = Object.assign({}, data.value);
    this.arrayobject.push(this.form_data)
    console.log(this.arrayobject)

    let userdata = localStorage.getItem('userFormData')
    console.log(userdata)
    if (userdata != null) {
      let user = JSON.parse(userdata);
      
      if(Array.isArray(user))
      {
        console.log(user)
        user.push(this.form_data)
        localStorage.setItem('userFormData', JSON.stringify(user))
      }
      else
      {
        user.push(this.form_data)
        localStorage.setItem('userFormData', JSON.stringify([user]))
      }
    
    }
    else {
      localStorage.setItem('userFormData', JSON.stringify(this.arrayobject))
    }
    // localStorage.setItem('userFormData', JSON.stringify(this.arrayobject))
    // this.router.navigate(['/studentpanel']);

    window.location.reload()

  }

}
