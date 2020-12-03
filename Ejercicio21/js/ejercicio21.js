document.write("<h1>"+"While"+"</h1>")
let ahorra = 1
let dia = 0
while(dia<365){
    dia++
    ahorra=ahorra*3
    document.write("Dia "+dia+" $"+ahorra+"</br>")
}


document.write("<h1>"+"Do While"+"</h1>")
let ahorra2 = 1
let dia2 = 0
do {
    dia2++
    ahorra2=ahorra2*3
    document.write("Dia "+dia2+" $"+ahorra2+"</br>")
} while(dia2<365)



document.write("<h1>"+"For"+"</h1>")
let ahorra3 = 1
for (let i=1; i<=365; i++) {
    ahorra3=ahorra3*3
    document.write("Dia "+i+" $"+ahorra3+"</br>")
} 