window.onload = function() {
	var info = document.getElementById('informacion');
	var enlaces = document.getElementsByTagName('a');
	var ultimaPagina = enlaces[enlaces.length - 2].href;
	
	var countEnlace = 0;
	info.innerHTML = "Numero de enlaces = " + enlaces.length;
	info.innerHTML = info.innerHTML + "<br>Penultimo enlace = "+ ultimaPagina.length;
	for(enlace in enlaces){
		var temp = enlaces[enlace];
		if(temp.href == 'http://prueba' || temp.href == 'http://prueba/'){
			countEnlace++;
		}
	}
	info.innerHTML = info.innerHTML + "<br>Cantidad de enlace http://prueba = " + countEnlace;	
	var enlacesTercerParrafo = document.getElementsByTagName('p')[2].getElementsByTagName('a');
	info.innerHTML = info.innerHTML + "<br>Cantidad de enlace tercer parrafo = " + enlacesTercerParrafo.length;	
}