import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  api = '/bookmark';

  constructor(private http: HttpClient) {
  }

  add(bookmark: any): Observable<any> {
    return this.http.post(this.api + '/add', bookmark);
  }

  getByUsername(username: any): Observable<any> {
    return this.http.get(this.api + '/getUserId/' + username);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(this.api + '/delete/' + id);
  }
}
