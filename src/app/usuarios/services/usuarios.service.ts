import { Injectable } from "@angular/core";
import { Cliente } from '../interfaces/cliente.interface';


@Injectable()
export class UsuariosService
{
    _clientes: Cliente[] = [
        {
            NomUsuario: "Juan2312",
            Contraseña: "minimini1221",
            Nombre: "Juan Pedro",
            ApePaterno: "Riquelme",
            ApeMaterno: "Solis",
            DNI: "70445736",
            Sexo: "M",
            NumTelefono: "983709107",
            Email: "juanRiquelme@hotmail.com",
            Direccion:"Av. Los Rozales",  
            CodContrato:["1","2"]  
        },
        {
            NomUsuario: "Leo1010",
            Contraseña: "minimini",
            Nombre: "Leonardo Piero",
            ApePaterno: "Paucar",
            ApeMaterno: "Dima",
            DNI: "70445732",
            Sexo: "M",
            NumTelefono: "983709102",
            Email: "leoPD@hotmail.com",
            Direccion:"Av. Bella Vista",  
            CodContrato:[] 
        }
      ]

    get clientes(): Cliente[]{
      return this._clientes;
    }


    agregar(nuevoCliente: Cliente): void {
        this.clientes.push(nuevoCliente);
    }

}



