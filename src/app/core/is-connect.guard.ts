import { Injectable } from '@angular/core';
import { UserService } from '../shared/user.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class isConnectGuard implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate(): boolean {
    return this.userService.isConnected();
  }
}
