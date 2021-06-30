import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ModuleWithProviders } from "@angular/core"
import { ClientComponent } from "./client/client.component"
import { FormClientComponent } from "./client/form-client/form-client.component"
import { LoginClientComponent } from "./client/login-client/login-client.component"
import { RegisterClientComponent } from './client/register-client/register-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { DeleteClientComponent } from './client/delete-client/delete-client.component';

const routes: Routes = [
  { path: "", component: LoginClientComponent },
  { path: "login", component: LoginClientComponent },
  { path: "signin", component: LoginClientComponent },
  { path: "register-client", component: RegisterClientComponent },
  { path: "list-client", component: ListClientComponent },
  { path: "update-client", component: UpdateClientComponent },
  { path: "delete-client", component: DeleteClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
