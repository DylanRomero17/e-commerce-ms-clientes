import {Entity, model, property, hasOne} from '@loopback/repository';
import {DireccionCliente} from './direccion-cliente.model';
import {UsuarioCliente} from './usuario-cliente.model';

@model()
export class Cliente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Documento: string;

  @property({
    type: 'string',
    required: true,
  })
  Correo: string;

  @property({
    type: 'string',
    required: true,
  })
  Celular: string;

  @property({
    type: 'number',
    default: 1,
  })
  Estado?: number;

  @hasOne(() => DireccionCliente, {keyTo: 'id_cliente'})
  direccionCliente: DireccionCliente;

  @hasOne(() => UsuarioCliente, {keyTo: 'id_cliente'})
  usuarioCliente: UsuarioCliente;

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
