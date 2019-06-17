<%@page import="fast.bloc.ObtenerNotaServlet"%>
<%@page import="fast.bloc.BorrarNotaServlet"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" import="java.util.List, fast.bloc.Nota"%>




<jsp:useBean id="usuario" class="fast.bloc.Usuario" scope="session" />
<jsp:useBean id="notas" class="fast.bloc.NotasDAO" scope="application" />
<%
	List<Nota> lista = notas.obtenerTitulos(usuario.getNombre());
	List<String> listaCat = notas.obtenerCategorias(usuario.getNombre());
%>


<!DOCTYPE html>
<html>
<head>
<title>Bloc de Notas - FAST: Mostrar notas</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="../css/estilo.css" />
<script src="js/listarnotas.js"></script>
</head>

<jsp:include page="cabecera.jsp" />

<div id="lista">
	<h1>Lista de notas</h1>
	<div id="lista-div">
		<table id="lista-tabla">
			<%!private String valorIdTituloString;
	private int valorIdParaListaCat;%>
			<%
				for (Nota nota : lista) {
					//Generamos tabla

					valorIdTituloString = Integer.toString(nota.getId());
			%>
			<tr id='fila-<%=nota.getId()%>'>

				<td>
					<input type="checkbox" id="myCheck" name="checkbox"	class="check">
				</td>
				<td class="infonota">
					<p>
						<strong><%=nota.getTitulo()%></strong>
					</p> <%-- 
					OTRA SOLUCION
					<%if(listaCat.contains(valorIdTituloString)){
						
						//System.out.println("se ha encontrado id: " + valorIdTituloString);	
						int indexNum = notas.getArrayIndex(listaCat,valorIdTituloString);
					//	System.out.println("index: "+ indexNum +  ", id: " + valorIdTituloString);	

					%>
					
							<p>Categoria: <%=listaCat.get(indexNum+1) %></p>					
						<%} %>
					
					--%>
					<div class='detalle' id='detalle-<%=nota.getId()%>'></div>
				</td>
			</tr>
			<%
				}
			%>
		</table>
	</div>

</div>


<div class="botonesInferiores">
	<button type="button" id="desmarcartodas" name="btn1" class="boton">des/marcartodas</button>
	<button type="button" id="borrarseleccionadas" name="btn2"
		class="boton">borrar seleccionadas</button>

</div>




<%@include file="../pie.jsp"%>
</body>
</html>