import { Component, ViewChildren, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Client } from '../../client/model/client.model';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.sass']
})
export class FormClientComponent {
  @Input() public inputFormControl: any;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  @Input() formulario!: FormGroup
  @Input() nomeFormulario = "";
  @Input() buttomName = "";
  @Output() dataToSend = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { 
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
  

  sendData(){
    
    let animal = this.formulario.value.haveAnimal;
    let date = this.formulario.value?.data;
    let number = this.formulario.value.phoneNumber;

    this.formulario.value.phoneNumber = "55"+number;
    this.formulario.value.haveAnimal = animal == "sim" ? true:false;
    this.formulario.value.data = date.toDateString();

    this.dataToSend.emit(this.formulario.value);
  }

}
