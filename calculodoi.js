var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var documento = prompt("Ingrese numero de DNI");
var letraUsuario = prompt("Ingrese letra de DNI");
if(documento < 0 || documento > 99999999){
	alert("Documento no valido");
}else{
	var letraDoi = letras[documento % 23];
	if(letraUsuario == letraDoi){
		alert("Letra de documento es correcta: " + letraDoi);
	}else{
		alert("Letra de documento es incorrecta");
	}
}