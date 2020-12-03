document.write("<br>" +"<h2>" +"Ciclo While"+ "</h2>")
var n
var c=0
var suma=0;
n = Number(prompt("Ingrese N número: (While)"))
while (c<n) {
    c=c+1; 
    suma=suma+c;
    document.write(suma + ', ')
    alert(suma + ', ')
}


document.write("<br><br>" +"<h2>" +"Ciclo Do While"+ "</h2>")
var m
var c=0
var suma=0;
m = Number(prompt("Ingrese N número: (Do While)"))
do {
    c=c+1; 
    suma=suma+c;
    document.write(suma + ', ')
} while (c<m)


document.write("<br><br>" +"<h2>" +"Ciclo For"+ "</h2>")
var suma=0;
x = Number(prompt("Ingrese N número: (For)"))
for (let i=1; i<=x;i++ ){
    suma=suma+i;
    document.write(suma + ', ')
}