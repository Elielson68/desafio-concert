import { Component, OnInit, ViewChildren } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.sass']
})
export class DeleteClientComponent implements OnInit {
  @ViewChildren("valorIndex") inputIndex!: any;
  constructor(private _clientService: ClientService) { }

  ngOnInit(): void {
  }

  deleteClient(){
    console.log(this.inputIndex.first.nativeElement.value);
    this._clientService.deleteClient(this.inputIndex.first.nativeElement.value).subscribe();
  }
}
