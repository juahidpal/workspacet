package fast.bloc;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet Filter implementation class FiltroClientes
 */
@WebFilter("/admins/*")
public class FiltroAdmins implements Filter {

    /**
     * Default constructor. 
     */
    public FiltroAdmins() {
    }

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;
		
		Usuario usuario = (Usuario) req.getSession().getAttribute("usuario");
		

		if (req.getSession().getAttribute("usuario") != null) {
			// pass the request along the filter chain
			//chain.doFilter(request, response);
			if(usuario.getTipo_usu() == fast.bloc.Usuario.ADMINISTRADOR) {
				//req.getRequestDispatcher("/admins/menu.jsp").forward(req, res);
				chain.doFilter(request, response);

			}else {
				res.sendError(HttpServletResponse.SC_FORBIDDEN, "Acceso prohibido para usuarios, pague su suscripcion!!!!!");

			}
			
		} else {
			res.sendError(HttpServletResponse.SC_FORBIDDEN, "Acceso prohibido");
		}
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
	}

}
