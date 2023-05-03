import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public email: string = "";
  public password: string = "";

  constructor(public router: Router) { }

  public autenticar() {
    let email_ls = localStorage.getItem('email');
    let password_ls = localStorage.getItem('password');

    console.log(password_ls);
    if (email_ls == this.email && window.atob(password_ls!) == this.password) {
      // da bom
      return this.router.navigateByUrl('/home');
    } else {
      // da ruim
      return alert('deu ruim')
    }
  }
}
