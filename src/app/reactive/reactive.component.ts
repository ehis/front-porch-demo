import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  private registerForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.registerForm = fb.group({
      'username': ['', Validators.required],
      'password': ['', [Validators.minLength(6), Validators.required]]
    });
   }

  ngOnInit() {
    this.registerForm.valueChanges
      .subscribe((value) => {
        console.log(value)
        const usernameControl = this.registerForm.get('username');
        const passwordControl = this.registerForm.get('password');
        console.log('username control', usernameControl);
        console.log('password control', passwordControl);
      });
  }

  onSubmit() {
    console.log('reactive form', this.registerForm.value);
  }
}
