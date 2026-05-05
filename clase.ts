interface Pausa {
    edad: number
    estudiante: string
    nombre: string
    apellido : string
    facultad: string
    estado: string
    id: number
    fecha: string
}

let Kisbel: Pausa = {
    edad: 20,
    estudiante: "si",
    nombre: "Kisbel",
    apellido: "Mendoza",
    facultad: "Ingeniería",
    estado: "feliz",
    id: 1,
    fecha: "05/05/26"
}

console.log(`Características de Kisbel: ${
        JSON.stringify(Kisbel)
}`)

interface Medidor {
    sentimiento: string
    nivel: number
    estres: string
    ayuda: string
    idStudent: number
}

let medidorKisbel: Medidor = {
    sentimiento: "feliz",
    nivel: 10,
    estres: "bajo",
    ayuda: "no",
    idStudent: 1
}
console.log(`Medidor de Kisbel: ${
    JSON.stringify(medidorKisbel)
}`)

interface Meditacion {
    nombre:string
    duracion: number
    categoria: string
}

let meditacionKisbel: Meditacion = {
    nombre: "Kisbel",
    duracion: 5,
    categoria: "respiración"
}
console.log(`Meditación de Kisbel: ${
    JSON.stringify(meditacionKisbel)
}`)
