import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  private user;

  constructor() {
    this.user = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('user', this.user);
  }
}
