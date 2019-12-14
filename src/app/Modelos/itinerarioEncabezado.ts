export class ItinerarioEncabezado {
    itinerarioEncabezadoId: number;
    itinerarioEncabezadoNombre: string;
    itinerarioEncabezadoFechaInicio: string;
    itinerarioEncabezadoFechaFinal: string;
    lugar_Id: number;
    ciudad_Id: number;
    usuario_Id: number;
    lugar?: any;
    ciudad?: any;
    usuario?: any;
    itinerarioDetalles?: any;
}