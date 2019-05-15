package fast.bloc;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AccederServlet
 */
@WebServlet("/acceso")
public class AccederServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AccederServlet() {
        super();
        
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String usu = req.getParameter("usuario");
		String contra = req.getParameter("clave");
		UsuariosDAO usuarios = (UsuariosDAO) getServletContext().getAttribute("usuarios");
		if (usu != null && contra != null && usuarios != null)
		{
			Usuario usuario = usuarios.existe(usu, contra);
			if (usuario != null)
				req.getSession().setAttribute("usuario", usuario);
		}
		if ( req.getSession().getAttribute("usuario") != null) {
			resp.sendRedirect("usuarios/menu.jsp");
		} else {
			resp.sendRedirect("index.jsp");
		}
	}

}
