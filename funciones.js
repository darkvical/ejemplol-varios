function calcularParImpar(numero){
	if(numero % 2 == 0){
		return "Numero par";
	} else {
		return "Numero impar";
	}
}

function determinarPalindromo(cadena){
	var arrayPlaindromo = cadena.toLowerCase().split("");
	var arrayLimpio = "";
	for(letra in arrayPlaindromo){
		if(arrayPlaindromo[letra] != " "){
			arrayLimpio += arrayPlaindromo[letra];
		}
	}
	var cadenaOriginal = arrayLimpio.split("");
	var cadenaReversa = arrayLimpio.split("").reverse();
	for (array in cadenaOriginal){
		if(cadenaOriginal[array] != cadenaReversa[array]){
			return false;
		}
	}
	return true;
}

var numero = prompt("Ingresar numero");
var textoPar = calcularParImpar(numero);
alert(textoPar);

var cadena = prompt("Escribir frase"); 
var patronMayus = /[A-Z]/g;
var patronMinus = /[a-z]/g;
var mayusculas = cadena.match(patronMayus);
var minusculas = cadena.match(patronMinus);
if(mayusculas != null && minusculas != null && mayusculas.length + minusculas.length > 0){
	alert("Contiene mayusculas y minusculas");
} else if(mayusculas != null && mayusculas.length > 0 && minusculas == null){
	alert("Contiene mayusculas");
} else if(mayusculas == null && minusculas != null && minusculas.length > 0){
	alert("Contiene minusculas");
}

var palindromo = prompt("Determinar palindromo");
var esPalindromo = determinarPalindromo(palindromo);
if(esPalindromo){
	alert("Es palindromo");
} else{
	alert("No es palindromo");
}