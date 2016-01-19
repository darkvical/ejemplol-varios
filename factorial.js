var factorial = prompt("Ingresar numero a calcular:");
var numeroCalculado = 1;
for(var i = 1; i <= factorial; i++){
	numeroCalculado = numeroCalculado *  i;
}
alert("El factorial es: " + numeroCalculado);