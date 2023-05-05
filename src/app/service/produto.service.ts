import { Injectable } from '@angular/core';
import { Produto } from '../produto/produto.component';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  public produtos: Produto[] = [];

  constructor() {  }

  public getProdutosFromLocalStorage() {
    const produtosS = JSON.parse(String(localStorage.getItem('produtos')));

    this.produtos = produtosS ? produtosS : [];

    return produtosS ? produtosS : [];
 
  }

  excluir(indice:number){
    this.produtos.splice(indice,1);
    this.salvar();
  }

  salvar(){
    localStorage.setItem('produtos',JSON.stringify(this.produtos)); 
  }
  

  update(indice:number,produto:Produto){
    this.produtos[indice] = produto;
    this.salvar();
  }

  inserir(produto:Produto){
    this.produtos.push(produto);
    this.salvar();
  }

  registro(indice:number){
    this.produtos = this.getProdutosFromLocalStorage();
    return this.produtos[indice];
  }
}
