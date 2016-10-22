import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private register;

  constructor() {
    this.register = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('register', this.register);
  }
}
