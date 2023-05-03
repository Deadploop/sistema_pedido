import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cidade',
  templateUrl: './cadastro-cidade.component.html',
  styleUrls: ['./cadastro-cidade.component.scss']
})
export class CadastroCidadeComponent implements OnInit {
  public nome: string = "";
  public estado: string = "";

  ngOnInit(): void {
    this.load();
  }

  public salvar() {
    localStorage.setItem('nome', this.nome);
    localStorage.setItem('estado', this.estado);
  }

  public limparStorage() {
    localStorage.clear();
  }

  public load() {
    this.nome = String(localStorage.getItem('nome'));
  }
}
