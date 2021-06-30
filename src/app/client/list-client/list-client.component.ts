import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.sass']
})
export class ListClientComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;

  constructor(private _clientService: ClientService){

  }

  
  ngOnInit(){
    this.dataSource = this._clientService.getClients().subscribe(
      clients => {
        this.dataSource = clients;
      },
      error => error
    )
  }

}