
function resalta(){
	var idEnlace = this.id;
	var arrayId = idEnlace.split('_');
	var parrafo = document.getElementById('contenidos_' + arrayId[1]);
	if(parrafo.className == 'visible'){
		parrafo.className = 'oculto';
		this.innerHTML = 'Mostrar contenidos';
	} else {
		parrafo.className = 'visible';
		this.innerHTML = 'Ocultar contenidos';		
	}
}

window.onload = function() {
	var enlaces = document.getElementsByTagName('a');
	for(enlace in enlaces){
		enlaces[enlace].onclick = resalta;
	}
}