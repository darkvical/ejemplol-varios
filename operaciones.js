var valores = [true, 5, false, "hola", "adios", 2];
if(valores[3] > valores[4]){
	alert(valores[3]);
} else {
	alert(valores[4]);
}

alert("Valor falso: " + valores[0] && valores[2]);
alert("Valor verdadero: " + valores[0] || valores[2]);