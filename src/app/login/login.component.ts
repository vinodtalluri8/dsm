import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginData = {username: '', pass: ''};
  constructor(private loginservice: LoginService ) { }

  ngOnInit() {
    this.loginservice.loadRoles();

  }
  login() {
    this.loginservice.obtainAccessToken(this.loginData).subscribe((data) => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }


}
