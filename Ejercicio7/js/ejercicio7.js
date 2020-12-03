let edad
let nombre
let m=0

while (m<3) {
    bandera=true
    nombre = prompt("(While) Ingrese nombre de una persona: ")
    edad = parseInt(prompt("(While) Ingrese edad de "+nombre+":"))
    if(edad <18){
        alert("(While) Si se encontró un menor de edad")
        break
    } else {
        alert("(While) no hay ningún menor de edad")
    }
    m++
}



let edad2
let nombre2
let m2=0

do {
    nombre2 = prompt("(Do While) Ingrese nombre de una persona: ")
    edad2 = parseInt(prompt("(Do While) Ingrese edad de "+nombre2+":"))
    if(edad2 <18){
        alert("(Do While) Si se encontró un menor de edad")
        break
    } else {
        alert("(Do While) no hay ningún menor de edad")
    } 
    m2++
}while (m2<3)



let edad3
let nombre3

for(i=0;i<3;i++) {
    nombre3 = prompt("(For) Ingrese nombre de una persona: ")
    edad3 = parseInt(prompt("(For) Ingrese edad de "+nombre3+":"))
    if(edad3 <18){
        alert("(For) Si se encontró un menor de edad")
        break
    } else{
        alert("(For) no hay ningún menor de edad")
    }
}

