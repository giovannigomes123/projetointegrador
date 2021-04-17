import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidarComponent } from './pages/validar/validar.component';
import { ErroComponent } from './pages/erro/erro.component';
import { BloqueadoComponent } from './pages/bloqueado/bloqueado.component';
import { LogadoComponent } from './pages/logado/logado.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidarComponent,
    ErroComponent,
    BloqueadoComponent,
    LogadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
