import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(private http: HttpClient) { }

  getUserRepos(login) {
    return this.http.get(
      `${environment.API_URL}/users/${login}/repos?per_page=5&sort=created:asc&client_id=${environment.GITHUB_CLIENT_ID}
      &client_secret=${environment.GITHUB_CLIENT_SECRET}`
    );
  }
}
