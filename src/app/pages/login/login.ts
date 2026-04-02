import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;

  onLogin() {
    if (this.email && this.password) {
      console.log('Login attempt:', {
        email: this.email,
        rememberMe: this.rememberMe
      });
      // TODO: Intégrer avec AuthService
      // Redirection après authentification
    }
  }
}
