import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProdutoComponent } from './produto/produto.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "cidade",
    component: CadastroCidadeComponent
  },
  {
    path: "usuario",
    component: CadastroUsuarioComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "clientes",
    component: ClienteComponent
  },
  {
    path: "pedidos",
    component: PedidoComponent
  },
  {
    path: "produtos",
    component: ListarProdutoComponent,
  },
  {
    path: "produtos/criar",
    component: ProdutoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
