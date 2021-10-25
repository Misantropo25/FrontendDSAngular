import { Component, OnInit} from '@angular/core';
import { Cliente } from '../interfaces/cliente.interface';




@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  constructor(
  ){  } 

  ngOnInit(): void {
  }

  login(): void{
  }

}
