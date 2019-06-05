package fast.bloc;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import fast.bloc.*;
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
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		System.out.println("DEBUG::::::::::estamos en estadisticas...");
		
		Usuario usuario = (Usuario) request.getSession().getAttribute("usuario");
		
		NotasDAO notas = (NotasDAO) getServletContext().getAttribute("notas");
		
		int numMensajes = 0;
		
		float mediaMensajes = 0;
		List <Nota> listaNotas = new ArrayList<>();
		
		if(usuario.getTipo_usu()==fast.bloc.Usuario.ADMINISTRADOR) {
			
			
			listaNotas = notas.obtenerTitulos(usuario.getNombre());
			
			for(Nota cuentaNota : listaNotas) {
				numMensajes++;
			}
			//hay que hacerle la media de las notas
			
			
			
			
			
			
		}else {
			listaNotas = notas.obtenerTitulos(usuario.getNombre());
			
			for(Nota cuentaNota : listaNotas) {
				numMensajes++;
			}
		}
		
		System.out.println("{\"numMensajes\":\""+ numMensajes +"\"}");
		//La creación de JSON se puede simplificar usando librerías, pero aquí
		// lo hacemos directamente
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().println("{\"numMensajes\":\""+ numMensajes +"\"}");
				
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
