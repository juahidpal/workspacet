<%@page import="fast.bloc.Usuario"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%
//Comprobamos si hay que cerrar la sesion
Usuario usuario = null;  
if (request.getParameterMap().containsKey("salir"))
	session.invalidate();
else
	usuario = (Usuario) session.getAttribute("usuario");
%>

<!DOCTYPE html>
<html>

  <head>
    <title>Bloc de Notas - FAST</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="css/estilo.css" />
	<script  type="text/javascript" src="js/inicio.js"></script>
  </head>

  <body> 
	<div id="cabecera">
		<% 
		//Sesion no iniciada: Boton para acceder
		if (usuario == null) { %>
			<noscript>
				<p><span class="acceso">
				Esta página necesita JavaScript para funcionar
				</span></p>
			</noscript>
			<a id="botonAcceso"><span class='acceso'>Acceder</span></a>
			<div id="formacceso">
				<form action="acceso" method="post">
				<p> 
					<label for="usuario">Usuario:</label><br/>
					<input type="text" name="usuario" size="20" id="usuario" required="required"/>
				</p>
				<p> 
					<label for="clave">Clave:</label> <br/>
					<input type="password" name="clave" size="20" id="clave" required="required"/>
				</p>
				<p> 
					<input class="boton" type="submit" name="entrar" value="Entrar" /> 
					<input id="botonCancelar" class="boton" type="button" name="cancelar" value="Cancelar"/> 
				</p>
				</form>
			</div>
		<% }
		else { 
		%>
			<a href="?salir">
			<span class="acceso">
				Cerrar sesión
			</span>
			</a>
		 
			<!-- Sesion iniciada: Mostramos información del usuario -->
			<span class='acceso' id='nombreusuario'>${usuario.nombre} </span>
		<% } %>
	</div>

	<div id="bienvenida">
		<h1>Bienvenido a</h1>
		<p><img src="imagenes/blocnotasfast.png" alt="Bloc de Notas FAST" /></p>
		<%
		if (usuario!=null) {
		%>
			<h3><a href="usuarios/menu.jsp">Menú</a></h3>
		<%
		} else {
		%>
			<h3>Acceda con su usuario y clave</h3>
		<%
		}
		%>
	</div>

	<%@include file="pie.jsp"%>
  </body>
</html>