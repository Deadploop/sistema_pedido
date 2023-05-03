import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
  public nome: string = "";
  public email: string = "";
  public password: string = "";
  public passwordM: string = "";

  ngOnInit(): void {
    this.carregar();
  }

  public carregar(): void {
    this.nome = String(localStorage.getItem('nome'));
    this.email = String(localStorage.getItem('email'));
    this.password = String(localStorage.getItem('password'));

    if (this.nome == "null") this.nome = "";
    if (this.email == "null") this.email = "";
    if (this.password == "null") this.password = "";
  }

  public salvar(): void {

    if (
      this.nome.trim().length == 0 ||
      this.email.trim().length == 0 ||
      this.password.trim().length == 0 ||
      this.passwordM.trim().length == 0
    ) {
      return alert("É necessário informar todos os campos");
    }

    if (this.password !== this.passwordM) {
      return alert("As senhas devem ser iguais");
    }

    localStorage.setItem('nome', this.nome);
    localStorage.setItem('email', this.email);
    localStorage.setItem('password', window.btoa(this.password));

    alert("Usuário cadastrado com sucesso");

  }

  public limparStorage(): void {
    localStorage.clear();

    this.nome = "";
    this.email = "";
    this.password = "";
    this.passwordM = "";
  }
}
