document.write("<h1>"+"While"+"</h1>")
let cont=0
let acu=0
let promedio
let nota
let mayor=0
let menor=5
while (cont<20) {
    nota=parseFloat(prompt("(While) Ingrese nota del estudiante"))
    acu+=nota
    cont++
    if (mayor < nota) {
        mayor = nota
    } else if (menor >= nota){
        menor = nota
    }    
}
promedio=acu/cont
document.write("El promedio del grupo: "+promedio+"<br>")
document.write("La nota mas alta: "+mayor+"<br>")
document.write("La nota mas baja: "+menor)


document.write("<h1>"+"Do While"+"</h1>")
let cont2=0
let acu2=0
let promedio2
let nota2
let mayor2=0
let menor2=5
do {
    nota2=parseFloat(prompt("(Do While) Ingrese nota del estudiante"))
    acu2+=nota2
    cont2++
    if (mayor2 < nota2) {
        mayor2 = nota2
    } else if (menor2 >= nota2){
        menor2 = nota2
    }    
} while (cont2<20)
promedio2=acu2/cont2
document.write("El promedio del grupo: "+promedio2+"<br>")
document.write("La nota mas alta: "+mayor2+"<br>")
document.write("La nota mas baja: "+menor2)


document.write("<h1>"+"For"+"</h1>")
let cont3=0
let acu3=0
let promedio3
let nota3
let mayor3=0
let menor3=5
for (let i=1; i<=20; i++) {
    nota3=Number(prompt("(For) Ingrese nota del estudiante #"+i))
    acu3=acu3+nota3
    cont3++
    if (mayor3 < nota3) {
        mayor3 = nota3
    } else if (menor3 >= nota3){
        menor3 = nota3
    }    
} 
promedio3=acu3/cont3
document.write("El promedio del grupo: "+promedio3+"<br>")
document.write("La nota mas alta: "+mayor3+"<br>")
document.write("La nota mas baja: "+menor3)

