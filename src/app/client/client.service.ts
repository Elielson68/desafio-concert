import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Client } from './model/client.model';

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

  getClient(id: string) {
    return this.http.get<Client>(`${this.url}/Client/${id}`, this.httpOptions);
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
