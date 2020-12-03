document.write("<h1>"+"While"+"</h1>")
let c10=0
let c20=0
let a10=0
let a20=0
let x=0
let precio
let mg
let n = parseInt(prompt("(While) Ingresa N ventas:"))
while(x<n){
    precio = parseFloat(prompt("(While) Ingresa el precio:"))
    if (precio<=10000){
        c10++
        a10+=precio
    } else if (precio>10000 && precio<=20000){
        c20++
        a20+=precio
    }
    x++
}
mg=a10+a20
document.write("Menos de 10000, cuantos fueron "+c10+"</br>")
document.write("Entre 10000 y 20000, cuantos fueron "+c20+"</br>")
document.write("El monto menos de 10000, cuanto fue "+a10+"</br>")
document.write("El monto entre 10000 y 20000, cuanto fue "+a20+"</br>")
document.write("El monto global: "+mg)


document.write("<h1>"+"Do While"+"</h1>")
let c10d=0
let c20d=0
let a10d=0
let a20d=0
let xd=0
let preciod
let mgd
let nd = parseInt(prompt("(Do While) Ingresa N ventas:"))
do {
    preciod = parseFloat(prompt("(Do While) Ingresa el precio:"))
    if (preciod<=10000){
        c10d++
        a10d+=preciod
    } else if (preciod>10000 && preciod<=20000){
        c20d++
        a20d+=preciod
    }
    xd++
} while(xd<nd)
mgd=a10d+a20d
document.write("Menos de 10000, cuantos fueron "+c10d+"</br>")
document.write("Entre 10000 y 20000, cuantos fueron "+c20d+"</br>")
document.write("El monto menos de 10000, cuanto fue "+a10d+"</br>")
document.write("El monto entre 10000 y 20000, cuanto fue "+a20d+"</br>")
document.write("El monto global: "+mgd)


document.write("<h1>"+"For"+"</h1>")
let c10f=0
let c20f=0
let a10f=0
let a20f=0
let preciof
let mgf
let nf = parseInt(prompt("(For) Ingresa N ventas:"))
for(let i=0; i<nf; i++) {
    preciof = parseFloat(prompt("(For) Ingresa el precio:"))
    if (preciof<=10000){
        c10f++
        a10f+=preciof
    } else if (preciof>10000 && preciof<=20000){
        c20f++
        a20f+=preciof
    }
} 
mgf=a10f+a20f
document.write("Menos de 10000, cuantos fueron "+c10f+"</br>")
document.write("Entre 10000 y 20000, cuantos fueron "+c20f+"</br>")
document.write("El monto menos de 10000, cuanto fue "+a10f+"</br>")
document.write("El monto entre 10000 y 20000, cuanto fue "+a20f+"</br>")
document.write("El monto global: "+mgf)
