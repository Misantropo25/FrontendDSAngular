import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empleado } from '../interfaces/empleado.interface';

@Component({
  selector: 'app-usuario-mantenimiento-empleado',
  templateUrl: './usuario-mantenimiento-empleado.component.html',
  styleUrls: ['./usuario-mantenimiento-empleado.component.css']
})
export class UsuarioMantenimientoEmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  empleados: Empleado[] = [
    {
      NomUsuario: "Johans212",
      Contrasenia: "ABCDEF",
      Nombre: "Johan Andre",
      ApePaterno: "Saraya",
      ApeMaterno: "Rivera",
      DNI: "70445734",
      Sexo: "M",
      NumTelefono: "970445734",
      Email: "Joha@hotmail.com",
      Direccion:  "Av.Nueva Vista",   
      Area: "Tecnica"
    },
    {
      NomUsuario: "Juan212",
      Contrasenia: "ABCDEF",
      Nombre: "Juan Andre",
      ApePaterno: "Rivera",
      ApeMaterno: "Saraya",
      DNI: "70245734",
      Sexo: "M",
      NumTelefono: "970442734",
      Email: "Juancito@hotmail.com",
      Direccion:  "Av.Salta Vista",   
      Area: "Marketing"
    },

  ]

    agregarNuevoProveedor(nuevo: Empleado):void {
    this.empleados.push(nuevo);
  }

  nuevoEmpleado: Empleado = {
    NomUsuario: "",
      Contrasenia: "",
      Nombre: " ",
      ApePaterno: "",
      ApeMaterno: "",
      DNI: "",
      Sexo: "",
      NumTelefono: "",
      Email: "",
      Direccion:  "",   
      Area: ""
  }

  @Output() 
  onNuevoEmpleado: EventEmitter<Empleado> = new EventEmitter();

  agregar(): void {
    if (this.nuevoEmpleado.DNI.trim().length == 0) {
      console.log('no paso validacion');
      return;
    }
    this.onNuevoEmpleado.emit(this.nuevoEmpleado);
    // console.log(this.nuevoProveedor);
    this.nuevoEmpleado = {
      NomUsuario: "",
      Contrasenia: "",
      Nombre: " ",
      ApePaterno: "",
      ApeMaterno: "",
      DNI: "",
      Sexo: "",
      NumTelefono: "",
      Email: "",
      Direccion:  "",   
      Area: ""
    }

  }

  agregarNuevoEmpleado(nuevo: Empleado):void {
    this.empleados.push(nuevo);}

}
