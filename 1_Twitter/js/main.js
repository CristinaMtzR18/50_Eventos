//variable del boton
//Fuente de referencia: http://www.w3schools.com/howto/howto_js_todolist.asp
var elboton = document.getElementById("boton");
//funcion para el boton
elboton.onclick=function() {
	agregarElemento();
};

//funcion para agregar elementos
function agregarElemento(){
	//variables para agregar elementos
	var elLi = document.createElement("li");
	var elTarea = document.getElementById("texto").value;
	//creo mi checkbox
	var checkbox = document.createElement('input');
	//Eligo el tipo que deseo, cuadradito
	checkbox.type = "checkbox";
	//agrego a mi lemento Li el checkbox como su hijo
	elLi.appendChild(checkbox);
	//el nodo de texto copia el valor de mi textarea
	var elTareaTexto = document.createTextNode(elTarea);
	elLi.appendChild(elTareaTexto);
	//si el campo esta vacio manda mensaje de que escriba la tarea
	if (elTarea === '') {
    	alert("Escribe una tarea");
  	} else {
  		//agrega mi nuevo elemento li al ul del index.html
    	document.getElementById("listaTareas").appendChild(elLi);
  	}
  	//vacia el textarea
  	document.getElementById("texto").value = "";
  	//crea un elemento span para crear el simbolo de tachechito a cada eleneto de la lista
  	var span = document.createElement("span");
  	//se necesita de un nodo de texto para que sea visible el tachecito, elementos unicode
  	var txt = document.createTextNode("\uD83D\uDDD1");
  	//se agrega a cada span la clase close para cerrarla
  	span.className = "close";
  	//se agrega al span el simbolo
  	span.appendChild(txt);
  	//se agrega al elemento li el span
  	elLi.appendChild(span);
  	//Este codigo debe ir adentro de la funcion para agregar elementos porque, como entiendo
  	//conforme se va agregando un elemento se va agregando la clase "close", necesaria para
  	//que cierre despues
  	//variable que me ayuda a "cerrar" los span
  	var close = document.getElementsByClassName("close");
  	//agrega a cada elemento de la lista la funcion para cerrar
  	for (var i = 0; i < close.length; i++) {
    	close[i].onclick = function() {
    	//busca el div "padre" del nuevo elemento
      	var div = this.parentElement;
      	div.style.display = "none";
    }
  }
}

