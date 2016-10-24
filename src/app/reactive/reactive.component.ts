import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit, OnDestroy {
  private userForm: FormGroup;
  private formSubscription: Subscription;
  private controlSubscription: Subscription;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      'username': ['', Validators.required],
      'password': ['', [Validators.minLength(6), Validators.required]]
    });
   }

  ngOnInit() {
    this.formSubscription = this.userForm.valueChanges
      .subscribe((value) => {
        console.log(value);
        const usernameControl = this.userForm.get('username');
        const passwordControl = this.userForm.get('password');
        console.log('username control', usernameControl);
        console.log('password control', passwordControl);
      });

    this.controlSubscription =  this.userForm.get('username')
      .valueChanges
      .debounceTime(500)
      .subscribe((value) => console.log('new value', value));
  }

  onSubmit() {
    console.log('reactive form', this.userForm.value);
  }

  ngOnDestroy () {
    this.formSubscription.unsubscribe();
    this.controlSubscription.unsubscribe();
  }
}
