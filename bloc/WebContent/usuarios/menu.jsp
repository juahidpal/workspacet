<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<jsp:useBean id="usuario" class="fast.bloc.Usuario" scope="session" />


<!DOCTYPE html>
<html>
  <head>
    <title>Bloc de Notas - FAST: Menú</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="../css/estilo.css" />
  </head>
	<jsp:include page="cabecera.jsp" />
	<div id="menu">
		<h1>Menú</h1>
		<ol>
		<li>
			<a href="crearnota.jsp"><span class="fondo">
				<span class="textoopcion">Nueva</span>
			</span></a>
		</li>
		<li>
			<a href="listarnotas.jsp"><span class="fondo">	<span class="textoopcion">Mostrar</span></span>
			</a>
		</li>
		
		<!-- preguntamos si usuario es tipo administrador osea "0" -->
			
		<%if(usuario.getTipo_usu()==0){
			//System.out.println("DEBUG::::::::::::::es administrador");
		%>
			<li>
				<a href="../admins/listarnotasTodas.jsp"><span class="fondo">	<span class="textoopcion">Mostrar todas</span></span></a>
			</li>
			
			
		<%}else{
			//System.out.println("DEBUG::::::::::::::NOOOOOOOO es administrador");

		}%>	
		
		</ol>
	</div>


	<%@include file="../pie.jsp"%>
  </body>
</html>