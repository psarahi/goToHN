export  interface Actividad {
    actividadId: number;
    actividadNombre: string;
    actividadDescripcion: string;
    actividadHorario: string;
    actividadDuracion: string;
    lugar_Id: number;
    categoria_Id: number;
    jornada_Id: number;
    categoria?: any;
    jornada?: any;
    lugar?: any;
    itinerarioDetalles?: any;
}