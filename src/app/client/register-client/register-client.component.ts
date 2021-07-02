import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { Client } from '../model/client.model';

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
  formulario!: FormGroup;
  constructor(private _clientService: ClientService, private formBuilder: FormBuilder) { 
    this.formulario = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      phoneNumber: [null],
      numberComputer: [null],
      alertStreamer: [null],
      haveAnimal: [null],
      data: [null]
    })
  }

  ngOnInit(): void {

  }
  
  onSendData(evento: any){
    this._clientService.registerClient(evento).subscribe(
      () => this.okBool=true,
      error => {this.errorMessageCard = error.error.errorMessage; this.errorBool=true},
    )
  }
}
