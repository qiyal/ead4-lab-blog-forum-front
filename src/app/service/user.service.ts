import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../object/user';

@Injectable()
export class UserService {
  api = '/api/user-api/public';
  apiPublic = '/api/user-api/user/public';

  constructor(
    private http: HttpClient
  ) {}

  getUserByUsername(username: string | null): Observable<User> {
    return this.http.get<User>(this.apiPublic + `/getByUsername/${username}`);
  }

  createUser(data: any): Observable<User> {
    return this.http.post<User>(this.api + '/create', data);
  }

  updateUsername(username: string, idUser: number): Observable<any> {
    return this.http.patch<User>(this.api + '/' + idUser + '/update/username', username);
  }

  getAll(): Observable<any> {
    return this.http.get(this.api + '/all');
  }

  getMyFriend(username: any): Observable<any> {
    return this.http.get(this.api + '/my-friends/' + username);
  }

  getNotMyFriend(like: any, username: any): Observable<any> {
    return this.http.get(this.api + '/find-new-friends?like=' + like + '&username=' + username);
  }

  addFriend(friend: any): Observable<any> {
    return this.http.post(this.api + '/add-friend', friend);
  }
}
