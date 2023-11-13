import { Component } from '@angular/core';
import { HttpService } from './shared/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Quests-advances';

  constructor(private httpService: HttpService) {}

  getApiResponse() {
    this.httpService.getApi().subscribe((data) => {});
  }
}
