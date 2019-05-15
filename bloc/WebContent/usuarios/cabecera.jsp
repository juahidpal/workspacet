	<div id="cabecera">
		<div id="logotipo">
				<a href="menu.jsp">
				<img src="${pageContext.request.contextPath}/imagenes/blocnotasfast-p.png" alt="Bloc de Notas FAST" />
				</a>
		</div>
		
		<a href="${pageContext.request.contextPath}/index.jsp?salir"><span class="acceso">Cerrar sesión</span></a>
		<span class='acceso' id='nombreusuario'>${usuario.nombre}</span>

	</div>
