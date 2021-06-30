import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url: string;
  private httpOptions: object;

  constructor(private http: HttpClient) { 
    this.url = "https://apiclients.azurewebsites.net/api";
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  getClients() {
    return this.http.get(`${this.url}/Client`, this.httpOptions);
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  registerClient(client: any){
    return this.http.post(`${this.url}/Client`, client, this.httpOptions)
  }

  validateLogin(login: string, senha: string): boolean{
    if(login == "concert" && senha == "prova"){
      return true;
    }
    return false;
  }
  deleteClient(id:any){
    return this.http.delete(`${this.url}/Client/${id}`)
  }
}
