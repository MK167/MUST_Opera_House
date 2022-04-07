import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  readonly BaseUrl = environment.BaseUrl;
  apiUrlTable: string = 'Workshop';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  //Get All
  GetAll() : Observable<any> {
    return this.httpClient.get(this.BaseUrl + this.apiUrlTable+ "/GetAllWorkshop")
    .pipe(
      catchError(this.handleError)
    );
  }

  //Get by ID
  GetByID(id: any): Observable<any> {
    return this.httpClient.get(`${this.BaseUrl + this.apiUrlTable + "/GetWorkshopByID"}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  //Create / Add
  Create(data: any): Observable<any> {
    return this.httpClient.post(this.BaseUrl  + this.apiUrlTable + "/AddWorkshop" , data).pipe(
      catchError(this.handleError)
    );
  }

  // Edit/ Update
  UpdateWorkshop(id: any): Observable<any> {
    return this.httpClient.put(this.BaseUrl  + this.apiUrlTable + "/UpdateWorkshop" , id).pipe(
      catchError(this.handleError)
    );
  }

  // Delete/ Remove
  DeleteWorkshop(id: any): Observable<any> {
    return this.httpClient.delete(`${this.BaseUrl + this.apiUrlTable + "/DeleteWorkshop"}/${id}`).pipe(
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
