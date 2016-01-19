window.onload = function() {
  document.onkeyup = muestraInformacion;
  document.onkeypress = muestraInformacion;
  document.onkeydown = muestraInformacion;
  document.onclick = muestraClickMouse;
}
 
function muestraInformacion(elEvento) {
	var evento = window.event || elEvento; 
  	var mensaje = "Tipo de evento: " + evento.type + "<br>" +
                "Propiedad keyCode: " + evento.keyCode + "<br>" +
                "Propiedad charCode: " + evento.charCode + "<br>" +
                "Carácter pulsado: " + String.fromCharCode(evento.charCode);
 
  	info.innerHTML += "<br>--------------------------------------<br>" + mensaje
}

function muestraClickMouse(elEvento){
	var evento = elEvento || window.event;
	var ie = navigator.userAgent.toLowerCase().indexOf('msie') != -1;

  	var coordenadaX = evento.clientX;
  	var coordenadaY = evento.clientY;
  	var screenX = evento.screenX;
	var screenY = evento.screenY;
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

	info.innerHTML += "<br>Navegador mouse posicion: " + coordenadaX + ", " + coordenadaY;
	info.innerHTML += "<br>Pantalla mouse posicion: " + screenX + ", " + screenY;
	info.innerHTML += "<br>Navegador scroll mouse posicion: " + pageX + ", " + pageY;
}