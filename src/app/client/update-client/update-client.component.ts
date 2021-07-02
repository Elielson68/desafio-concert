import { Component, ElementRef, OnInit, AfterViewInit, ViewChild, ViewChildren, Renderer2, asNativeElements } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { Client } from '../model/client.model';



@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.sass']
})
export class UpdateClientComponent implements OnInit, AfterViewInit {
  public nomeDoFormulario: string = "Modificar cliente";
  public buttomName: string = "Modificar";
  formulario!: FormGroup;
  public index: number = 0;
  public errorMessageCard: string = "";
  public okMessage: string = "Enviado com sucesso!";
  public okBool: boolean = false;
  public errorBool: boolean = false;
  @ViewChildren("valorIndex") inputIndex!: any;

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

  ngAfterViewInit() {
    this.inputIndex.nativeElement;
  }

  onSendData(evento: any){
    let id: string = this.inputIndex.first.nativeElement.value;
    this._clientService.updateClient(id, evento).subscribe(
      () => this.okBool=true,
      error => {this.errorMessageCard = error.error.errorMessage; this.errorBool=true},
    )
  }
  
  searchClient(){
    let id: string = this.inputIndex.first.nativeElement.value;
    this.index = parseInt(id);
    this._clientService.getClient(id).subscribe(
      (c:Client) => {
        this.formulario.setValue({
          name: c.name,
          email: c.email,
          phoneNumber: c.phoneNumber,
          numberComputer: c.numberComputer,
          alertStreamer: c.alertStreamer,
          haveAnimal: c.haveAnimal ? "sim":"não",
          data: new Date(c.data)

        })
      }
    )
    
  }
}
