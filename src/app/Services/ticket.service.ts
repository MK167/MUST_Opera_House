import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  readonly BaseUrl = environment.BaseUrl;
  apiUrlTable: string = 'EventSpeaker';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private HttpClient: HttpClient) { }

  RetrieveAllEvents() : Observable<any>{
    return this.HttpClient.get(this.BaseUrl + this.apiUrlTable+ "/RetrieveAllEvents")
    .pipe(
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

