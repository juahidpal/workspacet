<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"
	import="java.util.List, fast.bloc.Nota, fast.bloc.DAOException"%>

<jsp:useBean id="usuario" class="fast.bloc.Usuario" scope="session" />
<jsp:useBean id="notas" class="fast.bloc.NotasDAO" scope="application" />
<jsp:useBean id="nota" class="fast.bloc.Nota" />
<jsp:setProperty property="*" name="nota" />

<%
	String id_nota = request.getParameter("id_nota");
<<<<<<< HEAD
	int iden = Integer.parseInt(id_nota);
	Nota notaRecibida = notas.obtener(iden);
	System.out.println("DEBUG:::::::::::::" + notaRecibida);
	String mensajeError = "";
=======
	int id = Integer.parseInt(id_nota);
	Nota notaRecibida = notas.obtener(id);
	System.out.println("DEBUG:::::::::::::" + notaRecibida);
	boolean cambio = false;
	boolean muestraMasBotones = false;
>>>>>>> 1cbc2627b5ed9211998584566bae6d9d616ef4d0
%>

<!DOCTYPE html>
<html>
<head>
<title>Bloc de Notas - FAST: Editar nota</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="../css/estilo.css" />
<script src="js/listarnotas.js"></script>
</head>

<jsp:include page="cabecera.jsp" />

<%
	//vamos a consultar la nota con el id recibido
<<<<<<< HEAD

	if (request.getParameterMap().containsKey("titulo")) {
	
		// Código HTML + JSP  
		//TODO esto se podría hacer con AJAX y se eliminaría el código
		if (nota.getTitulo() != null) {
			//Creamos notas

			//String mensajeError = "";

			try {
				// el nombre de usuario se obtiene del atributo de sesión usuario
				nota.setNombreUsuario(usuario.getNombre());
				if (!notas.actualizar(nota,usuario.getNombre(),iden)){ //inserta todo el objeto nota, osea el bean nota
					mensajeError = "No se ha podido insertar la nota";
				}

			} catch (DAOException e) {
				mensajeError = e.getMessage();
			}

=======

	if (!cambio) {

		// Código HTML + JSP  
		//TODO esto se podría hacer con AJAX y se eliminaría el código
		if (notaRecibida.getTitulo() != null) {
			//Creamos notas

			String mensajeError = "";

			try {
				// el nombre de usuario se obtiene del atributo de sesión usuario
				nota.setNombreUsuario(usuario.getNombre());
				if (!notas.insertar(nota)) { //inserta todo el objeto nota, osea el bean nota
					mensajeError = "No se ha podido insertar la nota";
				}

			} catch (DAOException e) {
				mensajeError = e.getMessage();
			}

>>>>>>> 1cbc2627b5ed9211998584566bae6d9d616ef4d0
			//Muestra error o exito
			if (!mensajeError.isEmpty()) {
%>
<div id="error">
	<p>
		ERROR:
		<%=mensajeError%>
	</p>
</div>
<%
	} else {
%>
<div id="exito">
	<p>INFO: NOTA CREADA</p>
</div>
<%
<<<<<<< HEAD
	}
		}
	}else if(id_nota != null) {
		try {
			nota = notas.obtener(iden, usuario.getNombre());
			if (nota == null) {
				mensajeError = "La nota no existe";
			}
		} catch (DAOException e) {
			mensajeError = e.getMessage();

		} catch (NumberFormatException e) {
			mensajeError = "Parametro incorrecto";
		}

	}
=======
	}//end else
		}//end if crear
	}//end cambiado
>>>>>>> 1cbc2627b5ed9211998584566bae6d9d616ef4d0
	//mostramos formulario
%>


<div id="editar">
	<h1>Editar nota</h1>
	<div id="formeditar">
		<form method="post" action="" >
			<div class="titulo-div">
				<label for="titulo"> <strong>T&iacute;tulo de la
						nota</strong>
<<<<<<< HEAD
				</label> 
				<input id="titulo" type="text"
					value="<%=nota.getTitulo()%>" name="titulo"
=======
				</label> <input id="titulo" type="text"
					value="<%=notaRecibida.getTitulo()%>" name="titulo"
>>>>>>> 1cbc2627b5ed9211998584566bae6d9d616ef4d0
					maxlength="100" required="required"> </input>
			</div>

			<div class="imagen-div">
				<label for="urlimagen"><strong>URL de la imagen</strong></label> <input
					id="urlimagen" type="text"
<<<<<<< HEAD
					value="<%=nota.getUrlimagen()%>" name="urlimagen"></input>
			</div>
			<div class="nota-div">
				<label for="nota"><strong>Nota</strong></label>
				<textarea id="nota" name="nota" cols="100%" rows="100%"><%=nota.getNota()%></textarea>
			</div>

			<input class="boton" id="enviarnota" type="submit" value="Guardar"
				name="enviarnota"></input>
				 <input class="boton" id="limpiar"
				type="reset" value="Recargar datos guardados" name="limpiar"></input>
=======
					value="<%=notaRecibida.getUrlimagen()%>" name="urlimagen"></input>
			</div>
			<div class="nota-div">
				<label for="nota"><strong>Nota</strong></label>
				<textarea id="nota" name="nota" cols="100%" rows="100%"><%=notaRecibida.getNota()%></textarea>
			</div>

			<div class="botonesInferiores">
			
			
				<button type="button" id="idGuardar" name="guardar" class="boton">guardar</button>
				<button type="button" id="idRecargar" name="recargar" class="boton">recargar datos guardados</button>
			
			</div>
			
			
			<!-- estos dos botones no los usaremos en editar, pero o podemos quitarlos porque generan error con JS al momneto de 
			asignar evetos , ya que el addEventListener usa el id -->
			 <div class="botonesInferiores">
				<button type="button" id="desmarcartodas" name="btn1" class="boton" style="display: none;">des/marcartodas</button>
				<button type="button" id="borrarseleccionadas"name="btn2" class="boton" style="display:none;">borrar seleccionadas</button>

			</div>
>>>>>>> 1cbc2627b5ed9211998584566bae6d9d616ef4d0
		</form>

	</div>
</div>


<%@include file="../pie.jsp"%>
</body>
</html>