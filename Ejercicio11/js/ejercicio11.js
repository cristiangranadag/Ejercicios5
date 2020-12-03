document.write("<h1>"+"While"+"</h1>")
let nota
let acum=0
let cont=0
let pro
let res=true
while (res==true) {
    nota=parseFloat(prompt("La nota:"))
    acum=acum+nota
    cont++
    res=prompt("Más notas? ")
    if (res=="Si" || res=="si" || res=="SI") {
        res=true
    } else if (res=="No" || res=="no" || res=="NO") {
        res=false
    }
    pro=acum/cont
}
document.write("El promedio de las notas es: "+pro)


document.write("<h1>"+"Do While"+"</h1>")
let nota2
let acum2=0
let cont2=0
let pro2
let res2=true
do {
    nota2=parseFloat(prompt("La nota:"))
    acum2=acum2+nota2
    cont2++
    res2=prompt("Más notas? ")
    if (res2=="Si" || res2=="si" || res2=="SI") {
        res2=true
    } else if (res2=="No" || res2=="no" || res2=="NO") {
        res2=false
    }
    pro2=acum2/cont2
} while (res2==true)
document.write("El promedio de las notas es: "+pro2)