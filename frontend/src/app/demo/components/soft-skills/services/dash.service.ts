import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashService {
  baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    const token = sessionStorage.getItem('accessToken');
    if (!token) {
      console.error('Token not found in session storage');
      return of(null); // Return observable with null value
    }
    const userId = this.extractUserIdFromToken(token);
    if (!userId) {
      console.error('User ID not found in token');
      return of(null); // Return observable with null value
    }
    
    // Set headers with Authorization token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(`${this.baseUrl}/get_assetFirstDocument/${userId}`, { headers }).pipe(
      catchError(error => {
        console.error('Error fetching DF3 data:', error);
        return of(null); // Return observable with null value
      })
    );
  }

  fetchdf3Data(): Observable<any> {
    const token = sessionStorage.getItem('accessToken');
    if (!token) {
      console.error('Token not found in session storage');
      return of(null); // Return observable with null value
    }
    const userId = this.extractUserIdFromToken(token);
    if (!userId) {
      console.error('User ID not found in token');
      return of(null); // Return observable with null value
    }
    
    // Set headers with Authorization token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(`${this.baseUrl}/get_df3/${userId}`, { headers }).pipe(
      catchError(error => {
        console.error('Error fetching DF3 data:', error);
        return of(null); // Return observable with null value
      })
    );
  }

  private extractUserIdFromToken(token: string): string {
    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      return decodedToken.sub;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}
