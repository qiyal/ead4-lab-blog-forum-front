import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  signInForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  get username(): FormControl {
    return this.signInForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.signInForm.get('password') as FormControl;
  }

  onClick(): void {
    this.authService.login(this.signInForm.getRawValue()).subscribe(res => {
      if (res.headers.get('authorization')) {
        this.authService.setToken(res.headers.get('authorization'), this.signInForm.getRawValue().username);
        this.authService.setUserId(res.headers.get('AuthorizationUserId'));
        this.router.navigate(['/profile']);
      }
    });
  }
}
