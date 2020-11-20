import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    if (!this.email) { return alert('Please enter email'); }
    if (!this.password) { return alert('Please enter password'); }
    alert('Login with: ' + this.email + ' / ' + this.password);
  }
}
