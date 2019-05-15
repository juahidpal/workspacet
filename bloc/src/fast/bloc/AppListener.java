package fast.bloc;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;
import javax.sql.DataSource;


/**
 * Application Lifecycle Listener implementation class AppListener
 *
 */
@WebListener
public class AppListener implements ServletContextListener {

    /**
     * Default constructor. 
     */
    public AppListener() {
    }

	/**
     * @see ServletContextListener#contextDestroyed(ServletContextEvent)
     */
    public void contextDestroyed(ServletContextEvent arg0)  { 
    }

	/**
     * @see ServletContextListener#contextInitialized(ServletContextEvent)
     */
    public void contextInitialized(ServletContextEvent event)  {
    	String autor = "Apellidos, Nombre - UVUS";
    	event.getServletContext().setAttribute("autor", autor);
    	System.out.println("Creado atributo autor: "+ autor);
    	
    	try {
			// Usando DataSource ya definido en el servidor
			InitialContext ctx = new InitialContext();
			// /jdbc/notasfast es el nombre configurado en server.xml
			DataSource ds = (DataSource) ctx.lookup("java:comp/env/jdbc/notasfast");
			event.getServletContext().setAttribute("ds", ds);
			System.out.println("Creado atributo ds: "+ ds);
			
			NotasDAO nd = new NotasDAO(ds);
			UsuariosDAO ud = new UsuariosDAO(ds);
			
			event.getServletContext().setAttribute("notas", nd);
			System.out.println("Creado atributo notas: "+ nd);
			event.getServletContext().setAttribute("usuarios", ud);
			System.out.println("Creado atributo usuarios: "+ ud);
			
		} catch (NamingException e) {
			System.out.println("No está definida la base de datos en el servidor.");
		}
    }
	
}
