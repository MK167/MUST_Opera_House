import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  readonly BaseUrl = environment.BaseUrl;
  apiUrlTable: string = 'About';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  //Get All
  GetAll() : Observable<any> {
    return this.httpClient.get(this.BaseUrl + this.apiUrlTable+ "/GetAllAbout")
    .pipe(
      catchError(this.handleError)
    );
  }

  //Get by ID
  GetByID(id: any): Observable<any> {
    return this.httpClient.get(`${this.BaseUrl + this.apiUrlTable + "/GetAboutByID"}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  //Create / Add
  Create(data: any): Observable<any> {
    return this.httpClient.post(this.BaseUrl  + this.apiUrlTable + "/AddAbout" , data).pipe(
      catchError(this.handleError)
    );
  }

  // Edit/ Update
  UpdateAbout(id: any): Observable<any> {
    return this.httpClient.put(this.BaseUrl  + this.apiUrlTable + "/UpdateAbout" , id).pipe(
      catchError(this.handleError)
    );
  }

  // Delete/ Remove
  DeleteAbout(id: any): Observable<any> {
    return this.httpClient.delete(`${this.BaseUrl + this.apiUrlTable + "/DeleteAbout"}/${id}`).pipe(
      catchError(this.handleError)
    );
  }


  // Handle API errors << You Can Add this Function as an Interceptor >>
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}
