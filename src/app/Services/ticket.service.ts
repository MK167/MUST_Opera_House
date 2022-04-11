import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  readonly BaseUrl = environment.BaseUrl;

  apiUrlTable: string = 'Event';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private HttpClient: HttpClient) { }

  //Get All
  GetAll() : Observable<any> {
    return this.HttpClient.get(this.BaseUrl + this.apiUrlTable+ "/GetAllEvent")
    .pipe(
      catchError(this.handleError)
    );
  }

  //Get by ID
  GetByID(id: any): Observable<any> {
    return this.HttpClient.get(`${this.BaseUrl + this.apiUrlTable + "/GetEventByID"}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  //Create / Add
  Create(data: any): Observable<any> {
    return this.HttpClient.post(this.BaseUrl  + this.apiUrlTable + "/AddEvent" , data).pipe(
      catchError(this.handleError)
    );
  }
  // Edit/ Update
  UpdateEvent(id: any): Observable<any> {
    return this.HttpClient.put(this.BaseUrl  + this.apiUrlTable + "/UpdateEvent" , id).pipe(
      catchError(this.handleError)
    );
  }

  // Delete/ Remove
  DeleteEvent(id: any): Observable<any> {
    return this.HttpClient.delete(`${this.BaseUrl + this.apiUrlTable + "/DeleteEvent"}/${id}`).pipe(
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

