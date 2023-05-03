import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { PedidoComponent } from './pedido/pedido.component';

const routes: Routes = [
  {path:'cidade', component:CadastroCidadeComponent},
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path: 'usuario', component:UsuarioComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cliente', component:CadastroClienteComponent},
  {path: 'produto', component:CadastroProdutoComponent},
  {path: 'pedido', component:PedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
