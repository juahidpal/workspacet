package fast.bloc;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class BorrarNotaServlet
 */
@WebServlet("/usuarios/borranota")
public class BorrarNotaServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BorrarNotaServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Usuario usuario = (Usuario) request.getSession().getAttribute("usuario");
		String idStr = request.getParameter("id");
		String mensajeError = "";
	    NotasDAO notas = (NotasDAO) getServletContext().getAttribute("notas");
		try {
			if ( !notas.borrar(Integer.parseInt(idStr), usuario.getNombre()) ) {
				mensajeError = "No se ha podido borrar";
			}

		} catch (DAOException e) {
			mensajeError = e.getMessage();
		} catch (NumberFormatException e) {
			mensajeError = "Parámetro incorrecto";
		}
		
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
	    response.getWriter().println(
	    		"{ \"id\":\"" + idStr + "\", \"error\":\""+mensajeError+"\" }");
	
	}

}
