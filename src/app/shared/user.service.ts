import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private role: 'ANONYMOUS' | 'USER' | 'ADMIN' = 'ANONYMOUS';

  getRole(): 'ANONYMOUS' | 'USER' | 'ADMIN' {
    return this.role;
  }

  isConnected(): boolean {
    return this.role !== 'ANONYMOUS';
  }

  isAdmin(): boolean {
    return this.role === 'ADMIN';
  }
}
