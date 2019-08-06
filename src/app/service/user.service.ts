import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userUrl: 'http://5d4883ca2d59e50014f20c44.mockapi.io/study/data/users';

  // GET USER
  public getUser() {
    return this.http.get(this.userUrl);
  }
}
