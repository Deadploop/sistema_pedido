import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';
import { FormsModule } from '@angular/forms';
import { ListaEstadoComponent } from './lista-estado/lista-estado.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RouteModule } from './route.module';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroCidadeComponent,
    ListaEstadoComponent,
    LayoutComponent,
    MenuComponent,
    HomeComponent,
    CadastroUsuarioComponent,
    LoginComponent,
    ClienteComponent,
    ProdutoComponent,
    PedidoComponent,
    ListarProdutoComponent,
    CadastroProdutoComponent,
    ListarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouteModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
