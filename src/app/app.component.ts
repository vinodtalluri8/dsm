import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { DefaultUrlSerializer } from '../../node_modules/@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'System Maintenance';
  src = './assets/DIVA_Home.gif';
  headerStyle = 'header';
  displayName: string;

  constructor(private login: LoginService) {
    this.login.displayName.subscribe(displayName => {
      this.displayName = displayName;
    });
  }

}
