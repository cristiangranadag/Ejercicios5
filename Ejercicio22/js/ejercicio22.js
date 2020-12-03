document.write("<h1>"+"While"+"</h1>")
let acuM2 = 0
let m2
let n2
let edad2
let promedioN2
let promedioM2
let acuN2
let i2 = 0
let j2
m2 = parseInt(prompt("(While) Ingrese M Salon:"))
while (i2 < m2) {
    n2= parseInt(prompt("(While) Ingrese N estudiantes:"))
    acuN2 = 0
    j2 = 0
    while (j2 < n2) {
        edad2 = parseInt(prompt("(While) Ingrese la edad del estudiante:"))
        acuN2+=edad2
        j2++
        promedioN2=acuN2/n2
    }
    document.write("La edad promedio del salon: "+promedioN2+"</br>")
    acuM2+=promedioN2
    i2++
}
promedioM2=acuM2/m2
document.write("La edad promedio de la escuela: "+promedioM2)



document.write("<h1>"+"Do While"+"</h1>")
let acuM3 = 0
let m3
let n3
let edad3
let promedioN3
let promedioM3
let acuN3
let i3 = 0
let j3
m3 = parseInt(prompt("(Do While) Ingrese M Salon:"))
do {
    n3= parseInt(prompt("(Do While) Ingrese N estudiantes:"))
    acuN3 = 0
    j3 = 0
    do {
        edad3 = parseInt(prompt("(Do While) Ingrese la edad del estudiante:"))
        acuN3+=edad3
        j3++
        promedioN3=acuN3/n3
    } while (j3 < n3)
    document.write("La edad promedio del salon: "+promedioN3+"</br>")
    acuM3+=promedioN3
    i3++
} while (i3 < m3)
promedioM3=acuM3/m3
document.write("La edad promedio de la escuela: "+promedioM3)



document.write("<h1>"+"for"+"</h1>")
let acuM = 0
let m
let n
let edad
let promedioN
let promedioM
let acuN
m = parseInt(prompt("(For) Ingrese M Salon:"))
for (let i = 1; i <= m; i++) {
    n = parseInt(prompt("(For) Ingrese N estudiantes:"))
    acuN = 0
    for (let j = 1; j <= n; j++) {
        edad = parseInt(prompt("(For) Ingrese la edad del estudiante:"))
        acuN+=edad
        promedioN=acuN/n
    }
    document.write("La edad promedio del salon: "+promedioN+"</br>")
    acuM+=promedioN
}
promedioM=acuM/m
document.write("La edad promedio de la escuela: "+promedioM)