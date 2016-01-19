function muestraInformacion(mensaje, estilo) {
	var documentoInfo = document.getElementById("info");
	documentoInfo.innerHTML = '<h1>' + mensaje[0] + '</h1>';
	for(var i = 1; i < mensaje.length; i++) {
		documentoInfo.innerHTML += '<p>' + mensaje[i] + '</p>';
	}
	documentoInfo.className = estilo;
}

window.onload = function(){
	document.onkeypress = muestraKeyPress;
	document.onclick = muestraClickMouse;
}

function muestraClickMouse(elEvento){
	var evento = elEvento || window.event;
	var ie = navigator.userAgent.toLowerCase().indexOf('msie') != -1;
	var cordenadas = evento.clientX + ", " + evento.clientY;
	var pageX;
	var pageY;

	if(ie) {
	  pageX = evento.clientX + document.body.scrollLeft;
	  pageY = evento.clientY + document.body.scrollTop;
	}
	else {
	  pageX = evento.pageX;
	  pageY = evento.pageY;
	}
	var pagina = pageX + ", " + pageY;
	muestraInformacion(['MOUSE', 'Navegador: ' + cordenadas, 'Pagina: ' + pagina], 'amarillo');
}

function muestraKeyPress(elEvento){
	var evento = elEvento || window.event;
	var caracter = String.fromCharCode(evento.charCode);
	var codigoCaracter = evento.keyCode;
	muestraInformacion(['TECLADO', 'Caracter:' + caracter, 'Codigo caracter: ' + codigoCaracter], 'azul');
}