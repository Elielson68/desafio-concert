import { Component, ElementRef, OnInit, AfterViewInit, ViewChild, ViewChildren, Renderer2, asNativeElements } from '@angular/core';
import { ClientService } from '../client.service';

interface Client{
  name: string;
  email: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.sass']
})
export class UpdateClientComponent implements OnInit, AfterViewInit {
  public nomeDoFormulario: string = "Modificar cliente";
  public buttomName: string = "Modificar";
  
  public index: number = 0;
  @ViewChildren("valorIndex") inputIndex!: any;
  @ViewChildren("inputName") inputName!: any;
  @ViewChildren("inputEmail") inputEmail!: any;
  @ViewChildren("inputPhone") inputPhone!: any;

  constructor(private _clientService: ClientService) {
    
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.inputIndex.nativeElement;
  }

  onSendData(){
    
  }
  
  searchClient(){
    console.log(this.inputIndex.first.nativeElement.value);
    this.index = this.inputIndex.first.nativeElement.value;
    console.log(this._clientService.getClients());
  }
}
