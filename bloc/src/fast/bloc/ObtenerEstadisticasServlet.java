package fast.bloc;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//import fast.bloc.*;
/**
 * Servlet implementation class ObtenerEstadisticasServlet
 */
@WebServlet("/usuarios/estadisticas")
public class ObtenerEstadisticasServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ObtenerEstadisticasServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		Usuario usuario = (Usuario) request.getSession().getAttribute("usuario");

		NotasDAO notas = (NotasDAO) getServletContext().getAttribute("notas");

		String todos = request.getParameter("todos");

		int numMensajes = 0;
		float mediaMensajes = 0;

		List<String> listaNotas = new ArrayList<>();

		if (usuario.getTipo_usu() == Usuario.ADMINISTRADOR) {

			if (todos != null) {
				// hacemos todos
				List<String> listaTodosA = new ArrayList<>();
				List<String> listaTodosB = new ArrayList<>();
				List<String> listaTodosC = new ArrayList<>();

				listaTodosA = notas.devuelveNota("usuario");
				listaTodosB = notas.devuelveNota("admin");

				listaTodosC.addAll(listaTodosA);
				listaTodosC.addAll(listaTodosB);

				for (String cuentaNota : listaTodosC) {
					numMensajes++;

					mediaMensajes += cuentaNota.length();
				}
				mediaMensajes = mediaMensajes / numMensajes;

			} else {

				listaNotas = notas.devuelveNota(usuario.getNombre());

				for (String cuentaNota : listaNotas) {
					numMensajes++;

					mediaMensajes += cuentaNota.length();

				}
				mediaMensajes = mediaMensajes / numMensajes;
			}
		} else {

			listaNotas = notas.devuelveNota(usuario.getNombre());

			for (String cuentaNota : listaNotas) {
				numMensajes++;

				mediaMensajes += cuentaNota.length();

			}
			mediaMensajes = mediaMensajes / numMensajes;
		}

		/*
		 * if(usuario.getTipo_usu()==fast.bloc.Usuario.ADMINISTRADOR) {
		 * 
		 * 
		 * listaNotas = notas.obtenerTitulos(usuario.getNombre());
		 * 
		 * for(Nota cuentaNota : listaNotas) { numMensajes++; //usamos metodo
		 * devuelveNota(usuario.getNombre());
		 * 
		 * 
		 * } //hay que hacerle la media de las notas
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * }else { listaNotas = notas.obtenerTitulos(usuario.getNombre());
		 * 
		 * for(Nota cuentaNota : listaNotas) { numMensajes++; }
		 */

		// }

		System.out.println("{\"numMensajes\": " + numMensajes + ",\"mediaMensajes\": " + mediaMensajes + "}");
		// La creación de JSON se puede simplificar usando librerías, pero aquí
		// lo hacemos directamente

		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		// response.getWriter().println("{\"numMensajes\": "+ numMensajes +",
		// \"mediaMensajes\": "+mediaMensajes+ "}");
		response.getWriter()
				.println("{ \"numMensajes\": " + numMensajes + ", \"mediaMensajes\": " + mediaMensajes + "}");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
