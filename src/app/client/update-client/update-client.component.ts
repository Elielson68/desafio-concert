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
  inputFormControl: any = {
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ])
  }
  formulario!: FormGroup;
  public index: number = 0;
  @ViewChildren("valorIndex") inputIndex!: any;

  constructor(private _clientService: ClientService, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      name: [null],
      email: [null],
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

  onSendData(){
    
  }
  
  searchClient(){
    let id: string = this.inputIndex.first.nativeElement.value;
    this.index = parseInt(id);
    console.log("Entrou aqui")
    this.formulario.value.name = "sdsadds";
    this._clientService.getClient(id).subscribe(
      (c:Client) => {
        this.formulario.value.name = "sdsadds";
        this.formulario.value.name = c.name;
        this.formulario.value.email = c.email;
        this.formulario.value.phoneNumber = c.phoneNumber;
        this.formulario.value.numberComputer = c.numberComputer;
        this.formulario.value.haveAnimal = c.haveAnimal;
      }
    )
    
  }
}
