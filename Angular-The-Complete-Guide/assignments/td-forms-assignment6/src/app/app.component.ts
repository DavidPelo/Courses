import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') form: NgForm;
  defaultSubscription = 'pro';
  submitted = false;
  user = {
    email: '',
    sub: '',
    password: '',
  }
  
  onSubmit() {
    console.log(this.form.value);
    this.submitted = true;

    this.user.email = this.form.value.userData.email;
    this.user.sub = this.form.value.userData.subscription;
    this.user.password = this.form.value.userData.password;

    this.form.reset();
  }

}
