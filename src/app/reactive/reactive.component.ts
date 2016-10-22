import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  private userForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      'username': ['', Validators.required],
      'password': ['', [Validators.minLength(6), Validators.required]]
    });
   }

  ngOnInit() {
    this.userForm.valueChanges
      .subscribe((value) => {
        console.log(value)
        const usernameControl = this.userForm.get('username');
        const passwordControl = this.userForm.get('password');
        console.log('username control', usernameControl);
        console.log('password control', passwordControl);
      });
  }

  onSubmit() {
    console.log('reactive form', this.userForm.value);
  }
}
