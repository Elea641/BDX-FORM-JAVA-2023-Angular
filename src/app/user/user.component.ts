import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  streetNumber = new FormControl('');
  postal = new FormControl('');
  street = new FormControl('');
  user!: User;

  onSubmit() {
    this.user = new User(
      this.username.value as string,
      this.email.value as string,
      this.password.value as string,
      this.streetNumber.value as string,
      this.postal.value as string,
      this.street.value as string
    );
    console.log(this.user);
  }
}
