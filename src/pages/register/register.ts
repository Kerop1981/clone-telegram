import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../app/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService,private router:Router){}

  register(){
    this.auth.register(this.email,this.password)
    .then(() => {
      this.error = '';
      this.router.navigate(['/login']);
    })
    .catch(err => {
      this.error = err.message;
    });
  }
}
