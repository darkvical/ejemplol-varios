function anadir(){
	var nuevaLista = document.createElement("li");
	var contenido = document.createTextNode("Nuevo elemento");
	nuevaLista.appendChild(contenido);
	var lista = document.getElementById("lista");
	lista.appendChild(nuevaLista);
	//lista.innerHTML = lista.innerHTML + "hola mundo";
	//lista.innerHTML
}