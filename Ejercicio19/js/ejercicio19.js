document.write("<h1>"+"While"+"</h1>")
let acS=0
let acD=0
let acT=0
let coS
let coD
let coT
let con=0
let tipo
let pag=0
let tp
let n 
n = parseInt(prompt("(While) Ingrese # hamburguesas: "))
while (con<n) {
    tipo = prompt("(While) Tipos de hamburguesas:")
    if (tipo=="s" || tipo=="S") {
        coS=20
        acS+=coS
    } else if (tipo=="d" || tipo=="D") {
        coD=25
        acD+=coD
    } else if (tipo=="t" || tipo=="T") {
        coT=28
        acT+=coT
    } else {
        alert("Error")
    }
    con++
}
pag=acS+acD+acT
tp="si"
tp = prompt("(While) Cual es su tipo de pago: tarjeta de crédito?")
if (tp=="si" || tp=="Si" || tp=="SI") {
    pag=pag+pag*.05
}
document.write("Deben pagar "+pag)



document.write("<h1>"+"Do While"+"</h1>")
let acS2=0
let acD2=0
let acT2=0
let coS2
let coD2
let coT2
let con2=0
let tipo2
let pag2=0
let tp2
let n2 
n2 = parseInt(prompt("(Do While) Ingrese # hamburguesas: "))
do {
    tipo2 = prompt("(Do While) Tipos de hamburguesas:")
    if (tipo2=="s" || tipo2=="S") {
        coS2=20
        acS2+=coS2
    } else if (tipo2=="d" || tipo2=="D") {
        coD2=25
        acD2+=coD2
    } else if (tipo2=="t" || tipo2=="T") {
        coT2=28
        acT2+=coT2
    } else {
        alert("Error")
    }
    con2++
} while (con2<n2) 
pag2=acS2+acD2+acT2
tp2="si"
tp2 = prompt("(Do While) Cual es su tipo de pago: tarjeta de crédito?")
if (tp2=="si" || tp2=="Si" || tp2=="SI") {
    pag2=pag2+pag2*.05
}
document.write("Deben pagar "+pag2)



document.write("<h1>"+"For"+"</h1>")
let acS3=0
let acD3=0
let acT3=0
let coS3
let coD3
let coT3
let con3=0
let tipo3
let pag3=0
let tp3
let n3
n3 = parseInt(prompt("(For) Ingrese # hamburguesas: "))
for (let i=0;i<n3;i++) {
    tipo3 = prompt("(For) Tipos de hamburguesas:")
    if (tipo3=="s" || tipo3=="S") {
        coS3=20
        acS3+=coS3
    } else if (tipo3=="d" || tipo3=="D") {
        coD3=25
        acD3+=coD3
    } else if (tipo3=="t" || tipo3=="T") {
        coT3=28
        acT3+=coT3
    } else {
        alert("Error")
    }
    con3++
} 
pag3=acS3+acD3+acT3
tp3="si"
tp3 = prompt("(For) Cual es su tipo de pago: tarjeta de crédito?")
if (tp3=="si" || tp3=="Si" || tp3=="SI") {
    pag3=pag3+pag3*.05
}
document.write("Deben pagar "+pag3)