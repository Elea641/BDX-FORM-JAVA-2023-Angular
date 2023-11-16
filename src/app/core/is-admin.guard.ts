import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root',
})
export class isAdminGuard implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate(): boolean {
    return this.userService.isAdmin();
  }
}
