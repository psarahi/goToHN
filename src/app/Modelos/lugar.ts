export  interface Lugar {
    lugarId: number;
    lugarNombre: string;
    lugarFoto: string;
    lugarHoraEntrada: string;
    lugarHoraCierre: string;
    ciudad_Id: number;
    tipoAmbiente_Id: number;
    ciudad?: any;
    tipoAmbiente?: any;
    itinerarioEncabezado?: any;
    actividades?: any;
}