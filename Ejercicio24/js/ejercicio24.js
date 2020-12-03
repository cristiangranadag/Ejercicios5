document.write("<h1>"+"While"+"</h1>")
let sumaSuel=0
let t=0
let nom
let ht
let sh
let suel
let n = parseInt(prompt("(While) Ingresa N trabajadores: "))
while (t<n) {
    nom = prompt("(While) Nombre del trabajador:")
    ht = parseFloat(prompt("(While) Horas trabajadas:"))
    sh = parseFloat(prompt("(While) Sueldo por hora:"))
    suel = ht*sh
    if (suel>=0 && suel<150) {
        suel=suel-(suel*.05)
    } else if (suel>=150 && suel<300) {
        suel=suel-(suel*.07)
    } else if (suel>=300 && suel<450) {
        suel=suel-(suel*.09)
    } else {
        document.write("Nadie gana mas de 449"+"</br>")
    }
    sumaSuel+=suel
    t++
}
document.write("La suma de todos sueldos "+sumaSuel)



document.write("<h1>"+"Do While"+"</h1>")
let sumaSuel2=0
let t2=0
let nom2
let ht2
let sh2
let suel2
let n2 = parseInt(prompt("(Do While) Ingresa N trabajadores: "))
do {
    nom2 = prompt("(Do While) Nombre del trabajador:")
    ht2 = parseFloat(prompt("(Do While) Horas trabajadas:"))
    sh2 = parseFloat(prompt("(Do While) Sueldo por hora:"))
    suel2 = ht2*sh2
    if (suel2>=0 && suel2<150) {
        suel2=suel2-(suel2*.05)
    } else if (suel2>=150 && suel2<300) {
        suel2=suel2-(suel2*.07)
    } else if (suel2>=300 && suel2<450) {
        suel2=suel2-(suel2*.09)
    } else {
        document.write("Nadie gana mas de 449"+"</br>")
    }
    sumaSuel2+=suel2
    t2++
} while (t2<n2)
document.write("La suma de todos sueldos "+sumaSuel2)



document.write("<h1>"+"For"+"</h1>")
let sumaSuel3=0
let nom3
let ht3
let sh3
let suel3
let n3 = parseInt(prompt("(For) Ingresa N trabajadores: "))
for (let i=0; i<n3; i++) {
    nom3 = prompt("(For) Nombre del trabajador:")
    ht3 = parseFloat(prompt("(For) Horas trabajadas:"))
    sh3 = parseFloat(prompt("(For) Sueldo por hora:"))
    suel3 = ht3*sh3
    if (suel3>=0 && suel3<150) {
        suel3=suel3-(suel3*.05)
    } else if (suel3>=150 && suel3<300) {
        suel3=suel3-(suel3*.07)
    } else if (suel3>=300 && suel3<450) {
        suel3=suel3-(suel3*.09)
    } else {
        document.write("Nadie gana mas de 449"+"</br>")
    }
    sumaSuel3+=suel3
} 
document.write("La suma de todos sueldos "+sumaSuel3)