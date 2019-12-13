// export interface Usuario {
//   usuarioId: number;
//   usuarioNombre: string;
//   usuarioClave: string;
//   usuarioSexo: string;
//   usuarioFechaNacimiento?: string;
//   usuarioMedioTransporte?: string;
//   usuarioProfesion?: string;
//   usuarioInteres?: string;
//   tipoUsuario_Id?: number;
//   tipoPersonalidad_Id?: number;
//   estadoCivil_Id?: number;
//   tipoAmbiente_Id?: number;
//   tipoUsuario?: any;
//   tipoPersonalidad?: any;
//   estadoCivil?: any;
//   tipoAmbiente?: any;
//   itinerarioEncabezados?: any;
// }

export class Usuario {
  usuarioId: number;
  usuarioNombre: string;
  usuarioClave: string;
  usuarioSexo: string;
  usuarioFechaNacimiento?: string;
  usuarioMedioTransporte?: string;
  usuarioProfesion?: string;
  usuarioInteres?: string;
  tipoUsuario_Id?: number;
  tipoPersonalidad_Id?: number;
  estadoCivil_Id?: number;
  tipoAmbiente_Id?: number;

  itinerarioEncabezados?: any;

  constructor(
    usuarioId: number,
    usuarioNombre: string,
    usuarioClave: string,
    usuarioSexo: string,
    usuarioFechaNacimiento?: string,
    usuarioMedioTransporte?: string,
    usuarioProfesion?: string,
    usuarioInteres?: string,
    tipoUsuario_Id?: number,
    tipoPersonalidad_Id?: number,
    estadoCivil_Id?: number,
    tipoAmbiente_Id?: number,
    itinerarioEncabezados?: any
  ) {

    this.usuarioId = usuarioId;
    this.usuarioNombre = usuarioNombre;
    this.usuarioClave = usuarioClave;
    this.usuarioSexo = usuarioSexo;
    this.usuarioFechaNacimiento = usuarioFechaNacimiento;
    this.usuarioMedioTransporte = usuarioMedioTransporte;
    this.usuarioProfesion = usuarioProfesion;
    this.usuarioInteres = usuarioInteres;
    this.tipoUsuario_Id = tipoUsuario_Id;
    this.tipoPersonalidad_Id = tipoPersonalidad_Id;
    this.estadoCivil_Id = estadoCivil_Id;
    this.tipoAmbiente_Id = tipoAmbiente_Id;
    this.itinerarioEncabezados = itinerarioEncabezados;

  }
}