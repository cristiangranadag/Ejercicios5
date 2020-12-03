document.write("<br>" +"<h2>" +"Ciclo While"+ "</h2>")
var n=1;
var suma=0;
while (n<=5) {
    suma=suma+n;
    document.write(suma + ', ')
    n=n+1; 
}


document.write("<br><br>" +"<h2>" +"Ciclo Do While"+ "</h2>")
var m=1;
var suma=0;
do {
    suma=suma+m;
    document.write(suma + ', ')
    m=m+1;
} while(m<=5)


document.write("<br><br>" +"<h2>" +"Ciclo For"+ "</h2>")
var suma=0;
for (let i = 1; i <= 5; i++) {
    suma=suma+i;
    document.write(suma + ', ')
} 
