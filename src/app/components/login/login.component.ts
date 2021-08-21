import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public error: string = '';
  public loading: boolean = false;

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  constructor(private authService: AuthenticationService,
    private router: Router) {
  }


  ngOnInit(): void {
  }

  public async submitForm() {
    this.loading = true;
    this.loginForm.markAllAsTouched();
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    const authenticated: boolean = await this.authService.login(username, password);
    authenticated ? this.router.navigate(['/dashboard']) : this.error = 'Incorrect username or password';
    this.loading = false;
  }

}
