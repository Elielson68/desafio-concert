import { Component } from '@angular/core';


import { ClientService } from './client.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.sass']
})
export class ClientComponent {
  public clients: any;
  public error: any;
  
  
  constructor(private _clientService: ClientService) { 
    this.getListClients();
    
  }
  

  getListClients() {
    this._clientService.getClients().subscribe(
      dataClients => this.clients = dataClients,
      error => this.error = error
    );
    console.log(this.clients);
  }

}

