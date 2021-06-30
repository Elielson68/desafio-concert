import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { ClientComponent } from './client.component';
import { ClientService } from './client.service';
import { FormClientComponent } from './form-client/form-client.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { ListClientComponent } from './list-client/list-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';



@NgModule({
  declarations: [
    ClientComponent,
    FormClientComponent,
    LoginClientComponent,
    RegisterClientComponent,
    ListClientComponent,
    UpdateClientComponent,
    DeleteClientComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatNativeDateModule,
    ToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule,
    MatCardModule
  ],
  providers: [
    ClientService
  ],
  exports: [
    ClientComponent,
    LoginClientComponent
  ]
})
export class ClientModule { }
