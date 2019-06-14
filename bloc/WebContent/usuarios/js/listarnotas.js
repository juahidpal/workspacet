"use strict";

// Indica el id de la ultima nota cuyo detalle se ha mostrado
var ultid = -1;// variable global
var flagCheck = true;

// Esta funcion sirve para mostrar un mensaje mientras se obtienen los detalles
function mostrarEsperando(elemento) {
	var html = "<p><strong>Obteniendo detalles...</strong></p>"
			+ "<img src='../imagenes/espera.gif' alt='Espera' />";
	elemento.innerHTML = html;
}
// Muestra los detalles obtenidos mediante AJAX.
// objetoDetalle, tiene que ser un objeto con las siguientes propiedades:
// nota: texto de la nota
// imagen: url de la imagen asociada a la nota
// error: texto con el error producido al buscar los detalles de una nota
function mostrarDetalle(elemento, objetoDetalle) {
	if (objetoDetalle.error != null && objetoDetalle.error != "") {
		// error
		elemento.innerHTML = "<p>Error: " + objetoDetalle.error + "</p>";
	} else {
		elemento.innerHTML = "<p>Categoria: "
				+ objetoDetalle.categoria
				+ "</p> <div style='background-color:"
				+ objetoDetalle.color
				+ " '><p class='textonota' style='background-color:"
				+ objetoDetalle.color
				+ "'>"
				+ objetoDetalle.nota
				+ "</p>  <p style='background-color:"
				+ objetoDetalle.color
				+ "'>"
				+ "<img src='"
				+ objetoDetalle.imagen
				+ "' style='background-color:"
				+ objetoDetalle.color
				+ "' alt='Sin imagen'  height="
				+ 100
				+ " /><br />"
				+ "<button class='boton' onclick='borrar(event, ultid);'>Borrar</button><button class='boton' onclick='editar(ultid);'>Editar </button></p></div>";
	}
}

// Muestra informacion sobre la nota con el identificador pasado
function mostrar() {
	// el padre tiene un id del tipo "info-num"
	var prefix = "info-";
	var id = parseInt(this.parentElement.id.substring(prefix.length));

	if (ultid > 0) {
		// Ocultamos el anterior detalle
		document.getElementById("detalle-" + ultid).style.display = "none";
	}
	if (ultid == id) // en este caso, no mostramos, solo ocultamos
		ultid = -1;
	else {
		ultid = id;

		// Cambiamos el detalle
		var divDetalle = document.getElementById("detalle-" + ultid);
		mostrarEsperando(divDetalle);
		divDetalle.style.display = "block"; // Hacemos visible

		// Peticion AJAX
		var peticion = "nota";
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("POST", peticion, true);
		xmlhttp.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4) {
				if (xmlhttp.status == 200) {
					// Respuesta recibida completamente (4) y sin
					// errores del servidor (codigo HTTP 200)
					// Analizamos
					var detalleNota = JSON.parse(xmlhttp.responseText);
					mostrarDetalle(divDetalle, detalleNota);
				} else {
					divDetalle.innerHTML = cabDetalle + "<p>Error</p>";
				}
			}
		};
		xmlhttp.send("id=" + ultid); // enviamos
	}
}

// Muestra informacion sobre la nota con el identificador pasado
function borrar(event, id) {

	// Para evitar que se oculte el detalle
	event.stopPropagation();

	if (ultid == id) { // en este caso, borramos

		// Peticion AJAX
		var peticion = "borranota";
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("POST", peticion, true);
		xmlhttp.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4) {
				if (xmlhttp.status == 200) {
					// Respuesta recibida completamente (4) y sin
					// errores del servidor (codigo HTTP 200)
					// Analizamos
					var resultadoBorrar = JSON.parse(xmlhttp.responseText);
					procesarResultadoBorrar(resultadoBorrar);
				} else {
					divDetalle.innerHTML = cabDetalle + "<p>Error</p>";
				}
			}
		};
		xmlhttp.send("id=" + ultid); // enviamos
	}

}

function borrarCheck(id) {

	// if (ultid == id) { // en este caso, borramos

	// Peticion AJAX
	var peticion = "borranota";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", peticion, true);
	xmlhttp.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 200) {
				// Respuesta recibida completamente (4) y sin
				// errores del servidor (codigo HTTP 200)
				// Analizamos
				var resultadoBorrar = JSON.parse(xmlhttp.responseText);
				procesarResultadoBorrar(resultadoBorrar);
			} else {
				divDetalle.innerHTML = cabDetalle + "<p>Error</p>";
			}
		}
	};
	xmlhttp.send("id=" + id); // enviamos
	// }
}

// Procesa resultados de borrar obtenidos mediante AJAX.
// resultadoBorrar, tiene que ser un objeto con las siguientes propiedades:
// id: identificador numérico de la nota
// error: texto con el error producido al borrar nota.
// Es una cadena vacía si se borró correctamente.
function procesarResultadoBorrar(resultadoBorrar) {
	// Si tiene mensaje de error, mostramos como mensaje emergente.
	if (resultadoBorrar.error) {
		alert(resultadoBorrar.error);
	} else {
		// Eliminamos elemento de la tabla
		var fila = document.getElementById("fila-" + resultadoBorrar.id);
		fila.parentNode.removeChild(fila);
		// cambiamos ultid
		ultid = -1;
	}
}
// tarea
function agregaCat() {

	var select = document.getElementById("cat");
	// crear elemento para insertar el valorIntro
	var option = document.createElement("option");
	// pedimos el nuevo texto
	var textoIntroducido = prompt("Introduce nueva categoria");

	option.text = textoIntroducido;
	// ahora seleccionamos a donde queremos anhadir
	select.appendChild(option);
	// posicionamos en la parte superior
	select.insertBefore(option, select.childNodes[0]);

	select.childNodes[0].selected = "true";
	// document.getElementById("cat").style.backgroundColor = "red";
	// alert("fin");

	// agregamos un id al nuevo elemento
	// option.setAttribute("id","idOption");
	// hacemos focus al elemento
	// selectOpciones[0].focus({preventScroll:true});

}
// tarea
function agregaColor() {
	var select = document.getElementById("color");
	// crear elemento para insertar el valorIntro
	var option = document.createElement("option");
	// seleccionamos el nuevo color
	var color = document.getElementById("miColor").value;

	option.text = color;
	// ahora seleccionamos a donde queremos anhadir
	select.appendChild(option);
	// posicionamos en la parte superior
	select.insertBefore(option, select.childNodes[0]);
	// hacemos un selected al color seleccionado
	select.childNodes[0].selected = "true";

	var textArea = document.getElementById("nota");
	// ahora cambiamos el color de textarea con el color seleccionado
	// ateriormente
	// textArea.style.backgroundColor = color;
	// probando a cambiar estilo de textarea
	textArea.style.backgroundColor = color;

}
function validacion() {
	// alert("has dado click al CREAR");
}

function desmarcartodas() {
	// alert("estas en desmarca");

	var miCheck = document.querySelectorAll(".check");

	if (miCheck.length != 0) {

		if (flagCheck) {

			for (var i = 0; i < miCheck.length; i++) {
				miCheck[i].checked = true;
			}
			flagCheck = false;

		} else if (!flagCheck) {
			for (var j = 0; j < miCheck.length; j++) {
				miCheck[j].checked = false;
			}
			flagCheck = true;

		}
	} else {
		alert("no hay elementos para seleccionar");
	}
}
function borrarseleccionadas() {
	// alert("estas en borrarSeleccionadas");

	var miCheck = document.querySelectorAll(".check");
	var contador = 0;
	var flagMarcados = false;
	var cadenaMarcados = [];
	var subcadena;
	var confirmar;

	// preguntamos si hay alguna nota para seleccionar
	if (miCheck.length != 0) {

		for (var i = 0; i < miCheck.length; i++) {

			if (miCheck[i].checked == true) {

				cadenaMarcados[contador] = miCheck[i].parentElement.parentElement.id;

				contador++;
				flagMarcados = true;
				// guardamos el id del checkox que estaba marcado

			}
		}
		if (flagMarcados == false) {
			alert("No ha seleccionado ninguna nota");

		} else {
			confirmar = confirm("Desea borrar todas las notas seleccionadas?")
			if (confirmar == true) {

				for (var j = 0; j < cadenaMarcados.length; j++) {
					subcadena = parseInt(cadenaMarcados[j].substring(5));

					borrarCheck(subcadena);
				}
			}

		}

	} else {
		alert("no hay elementos para seleccionar");
	}

}

function editar(id){
	
	//alert("estas en editar");
	location.href='editarnota.jsp?id_nota='+id ;
	
}

window.addEventListener("load", function() {
	var infos = document.querySelectorAll(".infonota");
	for (var i = 0; i < infos.length; i++) {
		infos[i].onclick = mostrar;
	}

	document.getElementById("desmarcartodas").addEventListener("click",
			desmarcartodas);
	document.getElementById("borrarseleccionadas").addEventListener("click",
			borrarseleccionadas);

});
