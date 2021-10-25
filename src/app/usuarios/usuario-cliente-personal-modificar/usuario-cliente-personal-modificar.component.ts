import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente.interface';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuario-cliente-personal-modificar',
  templateUrl: './usuario-cliente-personal-modificar.component.html',
  styleUrls: ['./usuario-cliente-personal-modificar.component.css']
})
export class UsuarioClientePersonalModificarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  private usuariosService: UsuariosService = new UsuariosService;

  clientes: Cliente[] = this.usuariosService.clientes 
  
  modificarDatos(cliente:Cliente): void{
    for(let cli of this.clientes){
      if (cli.Nombre == cliente.Nombre){
        cliente.Nombre = cli.Nombre,
        cliente.ApePaterno = cli.ApePaterno,
        cliente.ApeMaterno = cli.ApeMaterno,
        cliente.NumTelefono = cli.NumTelefono,
        cliente.Email = cli.Email,
        cliente.Sexo = cli.Sexo,
        cliente.Direccion = cli.Direccion,
        cliente.DNI = cli.DNI
      }

    }
  }
}
