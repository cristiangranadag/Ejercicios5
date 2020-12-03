document.write("<br>" +"<h2>" +"Ciclo While"+ "</h2>")
let cant = 1
let nro
let cp=0
let cc=0
let cn=0
while (cant <= 10) {
    nro = Number(prompt('(While) Ingrese número '+cant))
    if (nro > 0){
        cp=cp+1
    } else if (nro == 0) {
        cc=cc+1
    } else {
        cn=cn+1
    }
    cant++
}
document.write('Cuántos positivos: '+cp)
document.write('<br>'+'Cuántos ceros '+cc)
document.write('<br>'+'Cuántos negativos '+cn)


document.write("<br><br>" +"<h2>" +"Ciclo Do While"+ "</h2>")
let cant2 = 1
let nro2
let cp2=0
let cc2=0
let cn2=0
do {
    nro2 = Number(prompt('(Do While) Ingrese número '+cant2))
    if (nro2 > 0){
        cp2=cp2+1
    } else if (nro2 == 0) {
        cc2=cc2+1
    } else {
        cn2=cn2+1
    }
    cant2++
} while (cant2 <= 10)
document.write('Cuántos positivos: '+cp2)
document.write('<br>'+'Cuántos ceros '+cc2)
document.write('<br>'+'Cuántos negativos '+cn2)


document.write("<br><br>" +"<h2>" +"Ciclo For"+ "</h2>")
let nro3
let cp3=0
let cc3=0
let cn3=0
for (let i = 1; i <= 10; i++) {    
    nro3 = Number(prompt('(For) Ingrese número '+i))
    if (nro3 > 0){
        cp3=cp3+1
    } else if (nro3 == 0) {
        cc3=cc3+1
    } else {
        cn3=cn3+1
    }
}
document.write('Cuántos positivos: '+cp3)
document.write('<br>'+'Cuántos ceros '+cc3)
document.write('<br>'+'Cuántos negativos '+cn3)