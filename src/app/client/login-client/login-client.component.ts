import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.sass']
})
export class LoginClientComponent implements OnInit {

  public inputFormControl: any;
  public options: FormGroup;
  public hideRequiredControl = new FormControl(false);
  public floatLabelControl = new FormControl('auto');
  public login:any = '';
  public senha:any = '';
  public errorLogin: boolean = false;
  @Output() public signInSystem = new EventEmitter();

  constructor(private _fb: FormBuilder, private _clientService: ClientService, private _router: Router) { 
    this.inputFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.options = this._fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  Logar(){
    if (this._clientService.validateLogin(this.login.value, this.senha.value)){
      this._router.navigate(['list-client']);
    }
    else{
      this.errorLogin = true;
    }
  }

  ngOnInit(): void {
  }

}
