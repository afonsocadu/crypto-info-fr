import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  protected _email: string = '';
  protected _password: string = '';
  protected _password_confirmation: string = '';
  protected _isCreatingUser: boolean = false;

  
  /**
   * Logs in as a recruiter by creating a new user with a unique email and default password.
   * Upon successful user creation, submits the login form.
   */
  protected _logInRecruiter() {
    this._email = this._generateUniqueEmail();
    this._password = '123456'
    this._password_confirmation = '123456'
  }

  protected _toggleForm() {
    this._isCreatingUser = !this._isCreatingUser;
  }

  /**
   * Handles the login form submission.
   */
  protected onSubmit() {
    
  }

    
  /**
   * Generates a unique email
   */
  private _generateUniqueEmail(): string {
    const timestamp = new Date().getTime();
    return `recruiter${timestamp}@example.com`; 
  }

  
}
