/* ECMAScript para el inicio de la aplicación*/

function muestraFormAcceso() {
	document.getElementById("formacceso").style.display = "block";
	document.getElementById("usuario").focus();
}
function ocultaFormAcceso() {
	document.getElementById("formacceso").style.display = "none";
}
window.addEventListener("load", function() {
	document.getElementById("botonAcceso").onclick = muestraFormAcceso;
	document.getElementById("botonCancelar").onclick = ocultaFormAcceso;
});
