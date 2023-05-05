import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';

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
  public valor: number = 0;

  public produtos:Array<Produto> = [];
  public indice:number = -1;

  constructor(
    public actived_route:ActivatedRoute,
    public produto_service:ProdutoService
  ){}

    ngOnInit(): void {
      this.actived_route.params.subscribe((params:any) => {
       if (params.indice > -1){
        this.indice = params.indice;
        let produto = this.produto_service.registro(this.indice);
        this.nome = produto.nome;
        this.valor = produto.valor;
       }
      });

    }


  public handleSalvar() {
    console.log(`nome ${this.nome} - valor ${this.valor}`);

    if (this.nome.trim().length == 0 || this.valor <= 0) {
      return alert("É necessário informar todos os campos");
    }

    const produtoSalvar: Produto = {
      nome: this.nome,
      valor: this.valor
    };

    if(this.indice !== -1){
      this.produto_service.update(this.indice, produtoSalvar);
    } else{
      this.produto_service.inserir(produtoSalvar);
    }
    this.limparProdutos();
  }

  public limparProdutos() {
    this.nome = "";
    this.valor = 0;
  }
}
