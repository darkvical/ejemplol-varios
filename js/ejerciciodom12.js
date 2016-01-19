function mostrar(){
	var elemento = document.getElementById("adicional");
  	elemento.className = "visible"; 
  	var enlace = document.getElementById("enlace");
  	enlace.className = "oculto";
  	var oculta = document.getElementById("menos");
  	oculta.className = "visible";
}

function ocultar(){
	var elemento = document.getElementById("adicional");
  	elemento.className = "oculto"; 
  	var enlace = document.getElementById("enlace");
  	enlace.className = "visible";
  	var oculta = document.getElementById("menos");
  	oculta.className = "oculto";
}