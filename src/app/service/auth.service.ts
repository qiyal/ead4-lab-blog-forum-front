import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginData} from '../object/login-data';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  api = '/api/user-api/auth';
  isAuth = false;
  authUsername: string | null = '';
  userId: any;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.initService();
  }

  initService(): void {
    if (localStorage.getItem('Bearer')) {
      this.isAuth = true;

      if (typeof localStorage.getItem('username') === 'string') {
        this.authUsername = localStorage.getItem('username');
      }

      if (typeof localStorage.getItem('userId') === 'string') {
        this.userId = localStorage.getItem('userId');
      }
    }
  }

  getToken(): string | null {
    console.log(localStorage.getItem('Bearer'));
    return localStorage.getItem('Bearer') ? localStorage.getItem('Bearer') : '';
  }

  getIsAuth(): boolean {
    return this.isAuth;
  }

  public login(loginData: LoginData): Observable<any> {
    return this.http.post<any>(
      this.api,
      loginData,
      {
        params: {
          username: loginData.username,
          password: loginData.password
        },
        observe: 'response'
      }
    );
  }

  setToken(token: string | null, username: string): void {
    if (typeof token === 'string') {
      localStorage.setItem('username', username);
      localStorage.setItem('Bearer', token.replace('Bearer', ''));
      this.authUsername = username;
    }
    this.isAuth = true;
  }

  signOut(): void {
    localStorage.removeItem('Bearer');
    localStorage.removeItem('userId');
    this.isAuth = false;
    this.authUsername = '';
    this.userId = null;
    this.router.navigate(['/']);
  }

  getAuthUsername(): string | null {
    console.log(this.authUsername);
    return this.authUsername;
  }

  setUserId(authorizationUserId: any): void {
    localStorage.setItem('userId', authorizationUserId);
    this.userId = authorizationUserId;
  }

  getAuthUserId(): number | null {
    return this.userId;
  }
}
