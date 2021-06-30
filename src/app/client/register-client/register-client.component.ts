import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.sass']
})
export class RegisterClientComponent implements OnInit {
  public nomeDoFormulario: string = "Registrar cliente";
  public buttomName: string = "Registrar";
  public errorMessageCard: string = "";
  public okMessage: string = "Enviado com sucesso!";
  public okBool: boolean = false;
  public errorBool: boolean = false;
  constructor(private _clientService: ClientService) { }

  ngOnInit(): void {
  }
  
  onSendData(evento: any){
    console.log(evento)
    this._clientService.registerClient(evento).subscribe(
      accept => this.okBool=true,
      error => {this.errorMessageCard = error.error.errorMessage; this.errorBool=true},
      )
  }
}
