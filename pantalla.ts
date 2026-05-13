
//pantalla 4 principal home

type feeltoday = "Muy mal" | "Mal" | "Regular" | "Bien" | "Muy bien"

interface Pausa {
    id: number
    nombre: string
    saludo: string
    ComoTeSientesHoy: feeltoday
}

type NivelLeyenda = "Muy mal" | "Mal" | "Regular" | "Bien" | "Muy bien"

interface Leyenda {
    id: number
    nivel: NivelLeyenda
    descripcion: string
}

const leyenda: Leyenda[] = [
    { id: 1, nivel: "Muy mal", descripcion: "Te sientes abrumado, triste o desesperanzado." },
    { id: 2, nivel: "Mal", descripcion: "Te sientes decaído o con dificultades." },
    { id: 3, nivel: "Regular", descripcion: "Ni bien ni mal, un día promedio." },
    { id: 4, nivel: "Bien", descripcion: "Te sientes tranquilo y positivo." },
    { id: 5, nivel: "Muy bien", descripcion: "Te sientes excelente, lleno de energía." },
]

// pantalla 7 de bienestar monitoreo

type TipoSentimiento = "excelente" | "bien" | "neutral" | "bajo" | "mal";
type DiaSemana = "L" | "M" | "X" | "J" | "V" | "S" | "D";

interface PuntoHistorial {
  dia: DiaSemana;
  estado: TipoSentimiento;
  valorNumerico: number;
}

interface PantallaBienestar {
  usuario: {
    nombre: string;
    avatarUrl: string;
  };
  estadoActual: {
    titulo: string;
    mensajeInspirador: string;
    identificadorIcono: string;
  };
  historialSemanal: PuntoHistorial[];
  recomendacion: {
    titulo: string;
    descripcion: string;
    imagenUrl?: string;
  };
}

const datosUsuario: PantallaBienestar = {
  usuario: {
    nombre: "Valeria López",
    avatarUrl: "https://api.com/uploads/valeria_l.jpg"
  },
  estadoActual: {
    titulo: "Bien",
    mensajeInspirador: "¡Vas por buen camino!",
    identificadorIcono: "face_positive_default"
  },
  historialSemanal: [
    { dia: "L", estado: "bien", valorNumerico: 7 },
    { dia: "M", estado: "neutral", valorNumerico: 5 },
    { dia: "X", estado: "excelente", valorNumerico: 10 },
    { dia: "J", estado: "bien", valorNumerico: 7 },
    { dia: "V", estado: "excelente", valorNumerico: 9 },
    { dia: "S", estado: "neutral", valorNumerico: 6 },
    { dia: "D", estado: "excelente", valorNumerico: 9 }
  ],
  recomendacion: {
    titulo: "Recomendación para hoy",
    descripcion: "Dedica unos minutos a respirar profundo y descansar tu mente.",
    imagenUrl: "assets/images/meditation_vector.png"
  }
};

function registrarNuevoEstado(nuevoPunto: PuntoHistorial): void {
  datosUsuario.historialSemanal.push(nuevoPunto);
  if (datosUsuario.historialSemanal.length > 7) {
    datosUsuario.historialSemanal.shift();
  }
}

// Pantalla 8 Herramientas

type Herramienta = 'Meditación y respiración' | 'Tips anti-estrés' | 'Escaneo corporal' | 'Relajación muscular progresiva' | 'Frases motivacionales' | 'Modo crisis';

interface BotonHerramienta {
    titulo: Herramienta
    descripcion: string
}

interface PantallaHerramientas {
    seccion: string
    opciones: BotonHerramienta[]
}

let herramienta1 : BotonHerramienta = {
    titulo: "Meditación y respiración",
    descripcion: "Ejercicios para calmar tu mente"
}

let herramienta2 : BotonHerramienta = {
    titulo: "Tips anti-estrés",
    descripcion: "Pequeñas acciones, grandes cambios"
}

let herramienta3 : BotonHerramienta = {
    titulo: "Escaneo corporal",
    descripcion: "Conecta con tu cuerpo"
}

let herramienta4 : BotonHerramienta = {
    titulo: "Relajación muscular progresiva",
    descripcion: "Libera la tensión"
}

let herramienta5 : BotonHerramienta = {
    titulo: "Frases motivacionales",
    descripcion: "Inspírate cada día"
}

let herramienta6 : BotonHerramienta = {
    titulo: "Modo crisis",
    descripcion: "Si necesitas ayuda inmediata"
}

let menuHerramientas : PantallaHerramientas = {
    seccion: "Para tu bienestar diario",
    opciones: [herramienta1, herramienta2, herramienta3, herramienta4, herramienta5, herramienta6]
}