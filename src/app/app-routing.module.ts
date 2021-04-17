import { LoginComponent } from './pages/login/login.component';
import { LogadoComponent } from './pages/logado/logado.component';
import { BloqueadoComponent } from './pages/bloqueado/bloqueado.component';
import { ErroComponent } from './pages/erro/erro.component';
import { ValidarComponent } from './pages/validar/validar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path:'validar', component:ValidarComponent},
    {path:'erro', component:ErroComponent},
    {path:'bloqueado', component:BloqueadoComponent},
    {path:'logado', component: LogadoComponent},
    {path:'login', component:LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
