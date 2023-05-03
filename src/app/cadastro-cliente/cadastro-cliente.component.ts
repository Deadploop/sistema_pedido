import { Component, OnInit } from '@angular/core';

export interface Cliente{
  nome:string;
  cpf:string;
  cidade:string;
}

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit{

  public nome: string = '';
  public cpf: string = '';
  public cidade: string = '';

  ngOnInit(): void {
    this.carregar();
  }

  salvar(){

    let dados:Cliente = {
      nome:this.nome,
      cpf:this.cpf,
      cidade:this.cidade
    }
   localStorage.setItem('cliente', JSON.stringify(dados));

  }

  limpar(){
    this.nome = '';
    this.cpf = '';
    this.cidade = '';
    localStorage.clear();
  }

  carregar(){
    let nome = String(localStorage.getItem('nome'));

    if (nome == 'null'){
      this.limpar();
      return;
    }

    this.nome = String(localStorage.getItem('nome'));
    this.cpf = String(localStorage.getItem('cpf'));
    this.cidade = String(localStorage.getItem('cidade'));
  }

}