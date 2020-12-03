document.write("<br>" + "<h2>" + "Ciclo While" + "</h2>")
var n = 0
while (n < 100) {
    n = n + 1
    document.write(n + ", ")
}

document.write("<br><br>" + "<h2>" + "Ciclo Do While" + "</h2>")
var m = 0
do {
    m = m + 1
    document.write(m + ", ")
} while (m != 100);

document.write("<br><br>" + "<h2>" + "Ciclo for" + "</h2>")
for (let i = 1; i <= 100; i++) {
    document.write(i + ", ")
}