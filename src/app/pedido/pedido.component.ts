import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto.component';
import { Cliente } from '../cliente/cliente.component';

interface Pedido {
  cliente: string;
  produto: string;
  quantidade: number;
  data: Date;
}

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {
  public cliente: string = "";
  public produto: string = "";
  public quantidade: string = "";

  public comboProdutos: Produto[] = [];
  public comboClientes: Cliente[] = [];

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllClients();
  }

  public handleSalvar() {
    var objSalvar: Pedido = {
      cliente: this.cliente,
      produto: this.produto,
      quantidade: parseInt(this.quantidade),
      data: new Date()
    }

    const pedidoStored = this.getAllPedidos();

    this.savePedidosLocalStorage([...pedidoStored, objSalvar]);
  }

  public getAllPedidos() {
    const pedidos = JSON.parse(String(localStorage.getItem('pedidos')));

    return pedidos ? pedidos : [];
  }

  public savePedidosLocalStorage(pedidos: Pedido[]) {
    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    this.cliente = "";
    this.produto = "";
    this.quantidade = "";
  }

  public getAllProducts() {
    const produtos = JSON.parse(String(localStorage.getItem('produtos')));

    const produtosCombo = produtos ? produtos : [];

    this.comboProdutos = produtosCombo;
  }

  public getAllClients() {
    const clientes = JSON.parse(String(localStorage.getItem('clientes')));

    const clientesCombos = clientes ? clientes : [];

    this.comboClientes = clientesCombos;
  }
}
