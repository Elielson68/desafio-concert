import { Component } from '@angular/core';
import { ClientService } from './client/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public logado: boolean;
  title = 'desafio-concert';
  
  onSignIn(evento: any){
    this.logado = this._serviceClient.validateLogin(evento.login, evento.senha);
  }

  constructor(private _serviceClient: ClientService){
    this.logado = false;
  }

  
}
