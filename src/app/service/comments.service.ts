import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../object/comment';
import {AuthService} from './auth.service';

// import {Http, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  api = '/comments';

  constructor(
    private http: HttpClient,
  ) {
  }

  getCommentById(bookId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.api + '?postId=' + bookId);
  }

  createComment(comment: any): Observable<any> {
    return this.http.post<any>(this.api + '/create', comment);
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete<any>(this.api + '/delete/' + id);
  }
}
