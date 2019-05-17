package fast.bloc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

public class NotasDAO {
	private DataSource ds = null;
	
	public NotasDAO() {
	}
	
	public NotasDAO(DataSource ds) {
		super();
		this.ds = ds;
	}

	public void setDs(DataSource ds) {
		this.ds = ds;
	}

	public DataSource getDs() {
		return ds;
	}
	
	public boolean borrar(int id) throws DAOException {
		//TODO pruebas
		return true;
	}
	
	/**
	 * Borra una nota que coincida con (id,usuario)
	 * @param id
	 * @param usuario
	 * @return true si se ha borrado una tupla o false en caso contrario
	 * @throws DAOException
	 */
	public boolean borrar(int id, String usuario) throws DAOException {
		Connection conn;
		boolean resultado=false;
		
		try {
			System.out.println("Se va a borrar la nota con id="+id+" del usuario="+usuario);
			conn = ds.getConnection();
			String sql = "DELETE FROM notas WHERE id=? AND nombre_usuario=?";
			PreparedStatement st = conn.prepareStatement(sql);
			st.setInt(1, id);
			st.setString(2, usuario);
			int contador = st.executeUpdate();
			if (contador == 1) {
				System.out.println("Se ha borrado la nota con id="+id);
				resultado=true;
			}
			System.out.println("borrados="+contador);
			st.close();
			conn.close();	
		}
		catch (SQLException e) {
			e.printStackTrace();
			System.out.println("Error de acceso a la base de datos. NotasDAO.");
			throw (new DAOException("Error en borrar(id,usuario) de NotasDAO"));
		}
		return resultado;
	}
	
	public Nota obtener(int id) throws DAOException {
		//TODO pruebas
		Nota ejemplo = new Nota();
		ejemplo.setId(id);
		ejemplo.setNombreUsuario("usuario");
		ejemplo.setNota("Esta es una nota de ejemplo.");
		ejemplo.setTitulo("Título de la nota");
		ejemplo.setUrlimagen("imagenes/nota.png");
		
		return ejemplo;
	}
	
	/**
	 * Obtiene una nota que coincida con (id,usuario)
	 * @param id
	 * @param usuario
	 * @return nota con esa pareja (id,usuario) o null si no se encuentra
	 * @throws DAOException
	 */
	public Nota obtener(int id, String usuario) throws DAOException {
		Nota nota = null;
		Connection conn;
		
		try {
			conn = ds.getConnection();
			String sql = "SELECT * FROM notas WHERE id=? AND nombre_usuario=?";
			PreparedStatement st = conn.prepareStatement(sql);
			st.setInt(1, id);
			st.setString(2, usuario);
			ResultSet rs = st.executeQuery();
			System.out.println("Se van a buscar la nota con id="+id+" del usuario="+usuario);
			if (rs.next()) {
				nota = new Nota();
				nota.setId(rs.getInt(1)); 
				nota.setNombreUsuario(rs.getString(2));
				nota.setTitulo(rs.getString(3));
				nota.setNota(rs.getString(4));
				nota.setUrlimagen(rs.getString(5));
				System.out.println("Se ha encontrado la nota con id="+nota.getId());
			}
			rs.close();
			st.close();
			conn.close();	
		}
		catch (SQLException e) {
			e.printStackTrace();
			System.out.println("Error de acceso a la base de datos. NotasDAO.");
			throw (new DAOException("Error en obtener(id,usuario) de NotasDAO"));
		}
		return nota;
	}
	
	/**
	 * Obtiene una lista de notas con los títulos e id solo.
	 * @param usuario
	 * @return Lista con las notas del usuario, o lista vacía
	 */
	public List<Nota> obtenerTitulos(String usuario) {
		List<Nota> lista = new ArrayList<>();
		Connection conn;
		
		try {
			conn = ds.getConnection();
			String sql = "SELECT id, titulo FROM notas WHERE nombre_usuario=?";
			PreparedStatement st = conn.prepareStatement(sql);
			st.setString(1, usuario);
			ResultSet rs = st.executeQuery();
			System.out.println("Se van a buscar las notas  del usuario="+usuario);
			while (rs.next()) {
				Nota nota = new Nota();
				nota.setId(rs.getInt(1)); 
				nota.setTitulo(rs.getString(2));
				System.out.println("Se ha encontrado la nota con id="+nota.getId()+" y titulo="+nota.getTitulo());
				lista.add(nota);
			}
			rs.close();
			st.close();
			conn.close();	
		}
		catch (SQLException e) {
			e.printStackTrace();
			System.out.println("Error de acceso a la base de datos. NotasDAO.");
		}
		return lista;
	}
	
	/**
	 * Inserta una nota en la tabla notas
	 * Los campos que ya tienen datos son: nombre_usuario, titulo, nota, urlimagen
	 * El campo id lo genera el SGBBDD
	 * @param nota
	 * @return true si se ha insertado o false si no
	 * @throws DAOException
	 */
	public boolean insertar(Nota nota) throws DAOException {
		Connection conn;
		boolean resultado=false;
		
		try {
			conn = ds.getConnection();
			String sql = "INSERT INTO notas (nombre_usuario, titulo, nota, urlimagen) VALUES (?,?,?,?)";
			PreparedStatement st = conn.prepareStatement(sql);
			st.setString(1, nota.getNombreUsuario());
			st.setString(2, nota.getTitulo());
			st.setString(3, nota.getNota());
			st.setString(4, nota.getUrlimagen());
			System.out.println("Se va a insertar la nota del usuario="+nota.getNombreUsuario());
			int contador = st.executeUpdate();
			if (contador == 1) {
				System.out.println("Se ha insertado la nota del usuario="+nota.getNombreUsuario());
				resultado=true;
			}
			st.close();
			conn.close();	
		}
		catch (SQLException e) {
			e.printStackTrace();
			System.out.println("Error de acceso a la base de datos. NotasDAO.");
			throw (new DAOException("Error en insertar(nota) de NotasDAO"));
		}
		return resultado;
	}
	
	
}
