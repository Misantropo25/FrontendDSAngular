import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente.interface';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuario-validar-login',
  templateUrl: './usuario-validar-login.component.html',
  styleUrls: ['./usuario-validar-login.component.css']
})
export class UsuarioValidarLoginComponent implements OnInit {

  constructor(
    public usuariosService: UsuariosService
  ) 
  { }

  ngOnInit(): void {
  }


  RegClientees: Cliente[] = this.usuariosService.clientes

  validar(): void{

  }
  




}
