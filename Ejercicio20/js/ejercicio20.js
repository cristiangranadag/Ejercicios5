document.write("<h1>"+"While"+"</h1>")
let conV=0
let conB=0
let conR=0
let con=0
let color
let n = parseInt(prompt("(While) Digite N focos: "))
while (con<n) {
    color = prompt("(While) Digite cual es color: ")
    if (color == "verde") {
        conV++
    } else if (color == "blanco") {
        conB++
    } else if (color == "rojo") {
        conR++
    } else {
        document.write("Solo tres colores o error"+"<br>")
    }
    con++
}
document.write("Verdes: "+conV+",  blancos: "+conB+" y rojos: "+conR)



document.write("<h1>"+"Do While"+"</h1>")
let conV2=0
let conB2=0
let conR2=0
let con2=0
let color2
let n2 = parseInt(prompt("(Do While) Digite N focos: "))
do {
    color2 = prompt("(Do While) Digite cual es color: ")
    if (color2 == "verde") {
        conV2++
    } else if (color2 == "blanco") {
        conB2++
    } else if (color2 == "rojo") {
        conR2++
    } else {
        document.write("Solo tres colores o error"+"<br>")
    }
    con2++
} while (con2<n2)
document.write("Verdes: "+conV2+",  blancos: "+conB2+" y rojos: "+conR2)


document.write("<h1>"+"For"+"</h1>")
let conV3=0
let conB3=0
let conR3=0
// let con2=0
let color3
let n3 = parseInt(prompt("(For) Digite N focos: "))
for (let i=0;i<n3;i++) {
    color3 = prompt("(For) Digite cual es color: ")
    if (color3 == "verde") {
        conV3++
    } else if (color3 == "blanco") {
        conB3++
    } else if (color3 == "rojo") {
        conR3++
    } else {
        document.write("Solo tres colores o error")
    }
    // con2++
}
document.write("Verdes: "+conV3+",  blancos: "+conB3+" y rojos: "+conR3)