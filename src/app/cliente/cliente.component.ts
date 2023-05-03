import { Component } from '@angular/core';

export interface Cliente {
  nome: string;
  cpf: string;
  cidade: string;
}

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {
  public nome: string = '';
  public cpf: string = '';
  public cidade: string = '';


  public handleSalvar() {
    let objSalvar: Cliente = {
      cidade: this.cidade,
      cpf: this.cpf,
      nome: this.nome
    }

    let bancoAtual = this.getClientesFromLocalStorage();

    if (bancoAtual == null) {
      bancoAtual = [];
    }

    bancoAtual.push(objSalvar);

    this.salvarClientesNoLocalStorage(bancoAtual);

    alert("sucessagem")
  }

  public salvarClientesNoLocalStorage(clientes: Cliente[]): void {
    localStorage.setItem('clientes', JSON.stringify(clientes));

    this.limparClientes();
  }

  public limparClientes() {
    this.nome = "";
    this.cpf = "";
    this.cidade = "";
  }

  public getClientesFromLocalStorage(): Cliente[] {
    const clientes = JSON.parse(String(localStorage.getItem('clientes')));

    return clientes;
  }
}
