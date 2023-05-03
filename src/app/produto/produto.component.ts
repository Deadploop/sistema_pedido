import { Component } from '@angular/core';

export interface Produto {
  nome: string;
  valor: number;
}

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent {
  public nome: string = "";
  public valor: string = "";

  public handleSalvar() {
    console.log(`nome ${this.nome} - valor ${this.valor}`);

    if (this.nome.trim().length == 0 || this.valor.trim().length == 0) {
      return alert("É necessário informar todos os campos");
    }

    const objSalvar: Produto = {
      nome: this.nome,
      valor: parseInt(this.valor)
    };

    const produtosStorage = this.getProdutosFromLocalStorage();

    const newProducts = [...produtosStorage, objSalvar];

    this.salvarProdutosNoLocalStorage(newProducts);

  }

  public getProdutosFromLocalStorage(): Produto[] {
    const produtos = JSON.parse(String(localStorage.getItem('produtos')));

    return produtos ? produtos : [];
  }

  public salvarProdutosNoLocalStorage(produtos: Produto[]): void {
    localStorage.setItem('produtos', JSON.stringify(produtos));

    this.limparProdutos();
  }

  public limparProdutos() {
    this.nome = "";
    this.valor = "";
  }
}
