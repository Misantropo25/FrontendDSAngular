import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente.interface';
import { UsuariosService } from '../services/usuarios.service';
import { RegistrosModule } from '../../registros/registros.module';

@Component({
  selector: 'app-usuario-cliente-personal',
  templateUrl: './usuario-cliente-personal.component.html',
  styleUrls: ['./usuario-cliente-personal.component.css']
})
export class UsuarioClientePersonalComponent implements OnInit {

  constructor(
    
  ) { }

  ngOnInit(): void {
  }
  private usuariosService: UsuariosService = new UsuariosService;

  clientes: Cliente[] = this.usuariosService.clientes 

  // mostrar(): Cliente{
  // let cliente:Cliente
  // for (let cliente of this.clientes){
  //   if (cliente.Nombre="Juan Pedro"){
  //       return cliente
  //     }
  //       return cliente
  //     }    
  // }

  // conditon(cliente: Cliente){
  //   if (cliente.Nombre="Juan Pedro"){
  //     return true
  //   }
  // }
  
}
