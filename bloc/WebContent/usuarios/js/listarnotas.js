"use strict";

//Indica el id de la ultima nota cuyo detalle se ha mostrado
var ultid=-1;

//Esta funcion sirve para mostrar un mensaje mientras se obtienen los detalles
function mostrarEsperando(elemento) {
	var html = "<p><strong>Obteniendo detalles...</strong></p>"+
				"<img src='../imagenes/espera.gif' alt='Espera' />";
	elemento.innerHTML=html;
}
//Muestra los detalles obtenidos mediante AJAX.
//objetoDetalle, tiene que ser un objeto con las siguientes propiedades:
//	nota: texto de la nota
//	imagen: url de la imagen asociada a la nota
//  error: texto con el error producido al buscar los detalles de una nota
function mostrarDetalle(elemento, objetoDetalle) {
	if (objetoDetalle.error != null && objetoDetalle.error !="") {
		//error
		elemento.innerHTML="<p>Error: "+objetoDetalle.error+"</p>";
	} else {
		elemento.innerHTML=
			"<p class='textonota'>"+
			objetoDetalle.nota+"</p><p>"+
			"<img src='"+objetoDetalle.imagen+"' alt='Sin imagen' /><br />"+
			"<button class='boton' onclick='borrar(event, ultid);'>Borrar</button></p>";
	}
}

//Muestra informacion sobre la nota con el identificador pasado
function mostrar() {
	//el padre tiene un id del tipo "info-num"
	var prefix = "info-";
	var id = parseInt(this.parentElement.id.substring(prefix.length));
	
	if (ultid > 0) {
		//Ocultamos el anterior detalle
		document.getElementById("detalle-"+ultid).style.display="none";
	}
	if (ultid == id)  //en este caso, no mostramos, solo ocultamos
		ultid = -1; 
	else {
		ultid = id;
		
		//Cambiamos el detalle
		var divDetalle = document.getElementById("detalle-"+ultid);
		mostrarEsperando(divDetalle);
		divDetalle.style.display="block"; //Hacemos visible

		//Peticion AJAX
		var peticion="nota?id="+ultid;
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("POST",peticion,true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.onreadystatechange = function(){ 
			if (xmlhttp.readyState==4) {
				if (xmlhttp.status==200) { 
					//Respuesta recibida completamente (4) y sin
					//errores del servidor (codigo HTTP 200) 
					//Analizamos
					var detalleNota = JSON.parse(xmlhttp.responseText);
					mostrarDetalle(divDetalle, detalleNota);
				} else {
					divDetalle.innerHTML=cabDetalle+"<p>Error</p>";
				}
			}
		  };
		xmlhttp.send("id="+ultid); //enviamos
	}
}

//Muestra informacion sobre la nota con el identificador pasado
function borrar(event, id) {
	
	//Para evitar que se oculte el detalle
	event.stopPropagation();
	
	if (ultid == id) { //en este caso, borramos
		
		
		//Peticion AJAX
		var peticion="borranota";
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("POST",peticion,true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.onreadystatechange = function(){ 
			if (xmlhttp.readyState==4) {
				if (xmlhttp.status==200) { 
					//Respuesta recibida completamente (4) y sin
					//errores del servidor (codigo HTTP 200) 
					//Analizamos
					var resultadoBorrar = JSON.parse(xmlhttp.responseText);
					procesarResultadoBorrar(resultadoBorrar);
				} else {
					divDetalle.innerHTML=cabDetalle+"<p>Error</p>";
				}
			}
		  };
		xmlhttp.send("id="+ultid); //enviamos
	}
	
}

//Procesa resultados de borrar obtenidos mediante AJAX.
//resultadoBorrar, tiene que ser un objeto con las siguientes propiedades:
//	id: identificador numérico de la nota
//error: texto con el error producido al borrar nota. 
//        Es una cadena vacía si se borró correctamente.
function procesarResultadoBorrar(resultadoBorrar) {
	//Si tiene mensaje de error, mostramos como mensaje emergente.
	if (resultadoBorrar.error) {
		alert(resultadoBorrar.error);
	} else {
		//Eliminamos elemento de la tabla
		var fila = document.getElementById("fila-"+resultadoBorrar.id);
		fila.parentNode.removeChild(fila);
		//cambiamos ultid
		ultid = -1;
	}
}
//tarea
function agregaCat() {

	var select = document.getElementById("cat");
	//crear elemento para insertar el valorIntro
	var option = document.createElement("option");
	//pedimos el nuevo texto 
	var textoIntroducido = prompt("Introduce nueva categoria");
	
	option.text=textoIntroducido;
	//ahora seleccionamos a donde queremos anhadir
	select.appendChild(option);
	
	select.insertBefore(option,select.childNodes[0]);
	
	
	//	agregamos un id al nuevo elemento
	//option.setAttribute("id","idOption");
	//hacemos focus al elemento
	//selectOpciones[0].focus({preventScroll:true});
	
	
}
//tarea
function agregaColor(){
	var selectOpciones = document.getElementById("selColor");
	//crear elemento para insertar el valorIntro
	var option = document.createElement("option");
	//seleccionamos el nuevo color
	var color = document.getElementById("miColor").value;

	option.text=color;
	//ahora seleccionamos a donde queremos anhadir
	selectOpciones.appendChild(option);
	
	var textArea = document.getElementById("nota");
	//ahora cambiamos el color de textarea con el color seleccionado ateriormente
	textArea.style.backgroundColor= color;
	
	
}
function validacion(){
	//alert("has dado click al CREAR");
}
window.addEventListener("load", function() {
	var infos = document.querySelectorAll(".infonota");
	for(var i=0; i< infos.length; i++) {
		infos[i].onclick=mostrar;
	}
});

