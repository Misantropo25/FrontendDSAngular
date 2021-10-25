import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsuarioInicioComponent } from './usuarios/usuario-inicio/usuario-inicio.component';
import { UsuarioNosotrosComponent } from './usuarios/usuario-nosotros/usuario-nosotros.component';
import { UsuarioPlanesComponent } from './usuarios/usuario-planes/usuario-planes.component';
import { UsuarioContactoComponent } from './usuarios/usuario-contacto/usuario-contacto.component';
import { UsuarioAyudaSoporteComponent } from './usuarios/usuario-ayuda-soporte/usuario-ayuda-soporte.component';
import { UsuarioLoginComponent } from './usuarios/usuario-login/usuario-login.component';
import { UsuarioClienteLogeadoHeaderComponent } from "./usuarios/usuario-cliente-logeado-header/usuario-cliente-logeado-header.component";
import { UsuarioRegisterComponent } from './usuarios/usuario-register/usuario-register.component';
import { UsuarioMantenimientoClienteComponent } from './usuarios/usuario-mantenimiento-cliente/usuario-mantenimiento-cliente.component';
import { ServicioCompraPlanesComponent } from './servicios/servicio-compra-planes/servicio-compra-planes.component';
import { ServicioCompraPlanesEnvioDatosComponent } from './servicios/servicio-compra-planes-envio-datos/servicio-compra-planes-envio-datos.component';
import { ContratoVisualizacionComponent } from './contratos/contrato-visualizacion/contrato-visualizacion.component';
import { UsuarioClientePersonalComponent } from './usuarios/usuario-cliente-personal/usuario-cliente-personal.component';
import { UsuarioClientePersonalModificarComponent } from './usuarios/usuario-cliente-personal-modificar/usuario-cliente-personal-modificar.component';

const routes: Routes = [
    //Seccion Principal Usuarios
    {
        path: '',
        component: UsuarioInicioComponent,
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: UsuarioInicioComponent,
        pathMatch: 'full'
    },
    {
        path: 'nosotros',
        component: UsuarioNosotrosComponent,
        pathMatch: 'prefix'
    },
    {
        path: 'planes',
        component: UsuarioPlanesComponent,
        pathMatch: 'full'
    },
    {
        path: 'contacto',
        component: UsuarioContactoComponent,
        pathMatch: 'full'
    },
    {
        path: 'ayudaYSoporte',
        component: UsuarioAyudaSoporteComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: UsuarioLoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: UsuarioRegisterComponent,
        pathMatch: 'full'
    },
    ////Seccion Cliente
    {
        path: 'cliente/personal',
        component: UsuarioClientePersonalComponent,
        pathMatch: 'full'
    },
    {
        path: 'cliente/planes',
        component: ServicioCompraPlanesComponent,
        pathMatch: 'full'
    },
    {
        path: 'cliente/planes/compra',
        component: ServicioCompraPlanesEnvioDatosComponent,
        pathMatch: 'full'
    },
    {
        path: 'cliente/contrato',
        component: ContratoVisualizacionComponent,
        pathMatch: 'full'
    },
    {
        path: 'cliente/tickets',
        component: ContratoVisualizacionComponent,
        pathMatch: 'full'
    },
    {
        path: 'cliente/personal/modificar',
        component: UsuarioClientePersonalModificarComponent,
        pathMatch: 'full'
    },
    //Seccion Administrador
    {
        path: 'login',
        component: UsuarioLoginComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: "inicio"
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ] 
})
export class AppRoutingModule {

}