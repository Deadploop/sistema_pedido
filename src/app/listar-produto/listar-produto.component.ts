import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto.component';
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.scss']
})
export class ListarProdutoComponent implements OnInit {
  faTrash = faTrash;
  faPen = faPen;

  public produtos: Produto[] = [];

  constructor(public produto_service:ProdutoService){}

  ngOnInit(): void {
    this.produto_service.getProdutosFromLocalStorage();
  }

  
}
