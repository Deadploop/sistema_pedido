import { Injectable } from '@angular/core';
import { Cliente } from '../cliente/cliente.component';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public clientes: Cliente [] =[];
  
  constructor() { }

  public getClientesFromLocalStorage(){
    const clienteS = JSON.parse(String(localStorage.getItem('clientes')));

    this.clientes = clienteS ? clienteS : [];

    return clienteS ? clienteS : [];
  }

  excluir (indice:number){
    this.clientes.splice(indice,1);
    this.salvar();
  }

  salvar(){
    localStorage.setItem('clientes',JSON.stringify(this.clientes));
  }

  update(indice:number,cliente:Cliente){
    this.clientes[indice] = cliente;
    this.salvar();

  }

  Inserir(cliente:Cliente){
    this.clientes.push(cliente);
    this.salvar();
  }

  registro(indice:number){
    this.clientes = this.getClientesFromLocalStorage();
    return this.clientes[indice];
  }
}
