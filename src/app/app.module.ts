import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UsuariosModule } from './usuarios/usuarios.module';
import { ReclamosModule } from './reclamos/reclamos.module';
import { ContratosModule } from './contratos/contratos.module';
import { RegistrosModule } from './registros/registros.module';
import { TicketsModule } from './tickets/tickets.module';
import { ServiciosModule } from './servicios/servicios.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],

  imports: [
    BrowserModule,
    UsuariosModule,
    ReclamosModule,
    ContratosModule,
    RegistrosModule,
    TicketsModule,
    ServiciosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
