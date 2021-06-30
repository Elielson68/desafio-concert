import { Component, ViewChildren, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.sass']
})
export class FormClientComponent {
  public inputFormControl: any;
  public options: FormGroup;
  public hideRequiredControl = new FormControl(false);
  public floatLabelControl = new FormControl('auto');
  @ViewChildren("picker") picker!: any;
  @ViewChildren("computerSelection") computerSelection!: any;
  name: any;
  email: any;
  phoneNumber: any;
  numberComputer: any;
  streamer: any;
  haveAnimal: any;
  data: any;
  @Input() nomeFormulario = "";
  @Input() buttomName = "";
  @Output() dataToSend = new EventEmitter();
  constructor(private _fb: FormBuilder) { 
    this.inputFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.options = this._fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  sendData(){
    this.dataToSend.emit({
      name: this.name.value,
      email: this.email.value,
      phoneNumber: `55${this.phoneNumber.value}`,
      numberComputer: this.computerSelection.first.value,
      alertStreamer: this.streamer.value == "on"?true:false,
      haveAnimal: this.haveAnimal.value =="sim"?true:false,
      data: this.picker.first._model.selection.toString(),
    })
  }

}
