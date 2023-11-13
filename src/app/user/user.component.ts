import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  userForm = this.fb.group({
    username: [''],
    credentials: this.fb.group({ email: [''], password: [''] }),
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
