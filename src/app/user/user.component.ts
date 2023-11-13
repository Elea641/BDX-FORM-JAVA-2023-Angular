import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from '../validators/password-validator';
import { emailValidator } from '../validators/email-validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    credentials: this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, passwordValidator]],
    }),
    address: this.fb.group({
      streetNumber: [''],
      postal: [''],
      street: [''],
    }),
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.userForm.value);
  }
}
