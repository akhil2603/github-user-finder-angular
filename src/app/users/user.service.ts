import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from './users-detail/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(
      `${environment.API_URL}/users?
      client_id=${environment.GITHUB_CLIENT_ID}
      &client_secret=${environment.GITHUB_CLIENT_SECRET}`);
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(
      `${environment.API_URL}/users/${id}?
      client_id=${environment.GITHUB_CLIENT_ID}
      &client_secret=${environment.GITHUB_CLIENT_SECRET}`
    );
  }

  searchUsers(text) {
    return this.http.get(`${environment.API_URL}/search/users?q=${text}
    &client_id=${environment.GITHUB_CLIENT_ID}
    &client_secret=${environment.GITHUB_CLIENT_SECRET}`).pipe(
      map((data: any) => data.items));
  }
}
