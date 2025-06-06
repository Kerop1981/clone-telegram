import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../app/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
email = '';
password = '';
error = '';

constructor(
  private auth: AuthService,
  private router : Router) {}

  login(){
    this.auth.login(this.email,this.password)
    .then (() => {
      this.error = '';
      this.router.navigate(['/'])
    })
    .catch(err => {
      this.error = err.message;
    })
  }
}

