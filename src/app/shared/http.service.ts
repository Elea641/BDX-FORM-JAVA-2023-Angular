import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(private http: HttpClient) {}

  getApi() {
    return this.http.get(`${this.apiUrl}`);
  }

  login(): Observable<boolean> {
    return of(false).pipe(delay(3000));
  }
}
