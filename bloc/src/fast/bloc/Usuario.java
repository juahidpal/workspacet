package fast.bloc;

public class Usuario {

	public static final int ADMINISTRADOR = 0;
	public static final int CLIENTE = 1;

	private String nombre;
	private int tipo_usu;

	public int getTipo_usu() {
		return tipo_usu;
	}
	
	

	public void setTipo_usu(int tipo_usu) {
		this.tipo_usu = tipo_usu;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	//constructor sin parametros
	public Usuario() {

	}
	//constructor con parametros "nombre"
	public Usuario(String nombre) {
		this.nombre = nombre;
	}
	
}
