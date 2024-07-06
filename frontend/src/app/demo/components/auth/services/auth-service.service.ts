import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService  } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/login-request.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn$ = new BehaviorSubject<boolean>(false);
  private id: string | null = null; // Variable to store user ID

 
  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {
    if (this.isAuthenticated()) {
      this.loggedIn$.next(true);
    }
  }

  private readonly STORAGE_KEYS = {
    ACCESS_TOKEN: 'accessToken',
    ID: 'id',
    USERNAME: 'username',
    ROLES: 'roles'
  };

  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('accessToken');
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  isUserLoggedIn(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }



  login(loginRequestPayload: LoginRequest): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/login`, loginRequestPayload, { observe: 'response' }).pipe(
      map(response => {
        if (response.status === 200) {
          const token = response.body?.token;
          const userId = response.body?.user_id; // Assuming the user ID is included in the response
          if (token && userId) {
            sessionStorage.setItem(this.STORAGE_KEYS.ACCESS_TOKEN, token);
            sessionStorage.setItem(this.STORAGE_KEYS.ID, userId); // Store user ID in session storage
            this.id = userId; // Store user ID in the service variable
            this.loggedIn$.next(true);
          }
        }
        console.log(response.status); // Accessing the status code
        return response;
      })
    );
  }

  getUserId(): string | null {
    return this.id;
  }



  logout(): void {
    this.clearUserDataFromStorage()
    this.loggedIn$.next(false);
    this.router.navigate(['/']);
  }

  private clearUserDataFromStorage(): void {
    Object.values(this.STORAGE_KEYS).forEach(key => sessionStorage.removeItem(key));
  }
}
