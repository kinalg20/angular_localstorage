import { Component, ElementRef, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})

export class AppComponent {
  title = 'firstproject';
  name = new FormControl('');
}
