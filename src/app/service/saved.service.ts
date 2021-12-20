import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavedService {

  api = '/api/saved-api/saved';
  apiPublic = this.api + '/public';
  apiPrivate = this.api + '/private';

  constructor(
    private http: HttpClient
  ) {}

  getSavedsByOwnerId(ownerId: any): Observable<any>{
    return this.http.get(this.apiPublic + `/getByOwnerId/${ownerId}`);
  }

  createNew(saved: any): Observable<any> {
    return this.http.post(this.apiPrivate + '/create', saved);
  }
}
