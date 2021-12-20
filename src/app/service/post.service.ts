import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../object/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  api = '/api/posts';
  apiPublic = '/api/post-api/post/public';
  apiPrivate = '/api/post-api/post/private';
  apiPostLike = '/like';

  constructor(private http: HttpClient) {
  }

  getPostsByUsername(username: any): Observable<any> {
    return this.http.get(this.apiPublic + `/getByUsername/${username}`);
  }

  getPostsByUserId(userId: number): Observable<any> {
    return this.http.get(this.apiPublic + `/user/${userId}`);
  }

  createPost(post: any): Observable<any> {
    return this.http.post(this.apiPrivate + `/create`, post);
  }

  getAllPost(): Observable<any> {
    return this.http.get(this.apiPublic + '/all');
  }

  getPostById(id: any): Observable<any> {
    return this.http.get(this.api + '/id/' + id);
  }

  find(like: string): Observable<any> {
    return this.http.get(this.apiPublic + `/searchByTitle/${like}`);
  }

  updateLikeCount(likeDto: any): Observable<any> {
    return this.http.post(this.apiPostLike + '/add-like', likeDto);
  }

  updateDislikeCount(likeDto: any): Observable<any> {
    return this.http.post(this.apiPostLike + '/add-dislike', likeDto);
  }
}
