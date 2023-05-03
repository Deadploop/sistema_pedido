import { Injectable } from '@angular/core';
import { Produto } from '../produto/produto.component';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  public produtos: Produto[] = [];

  constructor() {  }

  public getProdutosFromLocalStorage(): void {
    const produtosS = JSON.parse(String(localStorage.getItem('produtos')));

    this.produtos = produtosS ? produtosS : [];
  }

  excluir(indice:number){
    this.produtos.splice(indice,1);
    this.salvar();
  }

  salvar(){
    localStorage.setItem('produto',JSON.stringify(this.produtos)); 
  }
  
}
