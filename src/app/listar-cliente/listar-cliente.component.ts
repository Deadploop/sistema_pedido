import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Cliente } from '../cadastro-cliente/cadastro-cliente.component';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  
  constructor(
    public cliente_service:ClienteService,
    public router:Router
  ){}
  ngOnInit(): void {
    this.cliente_service.carregar();
  }

  editar(indice:number){
    this.router.navigateByUrl('cliente/' + indice);
  }
}
