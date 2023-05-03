import { Component, OnInit } from '@angular/core';

export interface Usuario{
  nome:string;
  senha:string;
  email:string;
}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{

  public nome: string = '';
  public email: string = '';
  public senha: string = '';

  ngOnInit(): void {
      this.carregar();    
  }

  cripotografar():string{

    const password = this.senha;
    const encodedPassword = btoa(password);
    return encodedPassword;
    
   }

    salvar(){

    if(this.nome == '' || this.email == '' || this.senha == ""){
    return;
    } else{
    let dados:Usuario = {
      nome:this.nome,
      email:this.email,
      senha:this.cripotografar()
    }
   localStorage.setItem('usuario', JSON.stringify(dados));
  }
  }

  limpar(){
    this.nome = '';
    this.email = '';
    this.senha = '';
    localStorage.clear();
  }

  carregar(){

    let nome = this.nome = String(localStorage.getItem('nome'));;

    if (nome == 'null'){
      this.limpar();
      return;
    }

    this.nome = String(localStorage.getItem('nome'));
    this.email = String(localStorage.getItem('email'));
    this.senha = atob(String(localStorage.getItem('senha')));

  }

}
