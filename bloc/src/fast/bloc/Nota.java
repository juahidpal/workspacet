package fast.bloc;

public class Nota {

	private int id;
	private String nombreUsuario;
	private String titulo;
	private String nota;
	private String urlimagen;
	private String categoria;
	private String color;

	
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNombreUsuario() {
		return nombreUsuario;
	}
	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getNota() {
		return nota;
	}
	public void setNota(String nota) {
		this.nota = nota;
	}
	public String getUrlimagen() {
		return urlimagen;
	}
	public void setUrlimagen(String urlimagen) {
		this.urlimagen = urlimagen;
	}
	
}
