
function BlogItem({ nota, editarNota, eliminarNota }) {
    return (
      <div className="nota-card">
        <h3>{nota.titulo}</h3>
        <p>{nota.contenido}</p>
        <button className="btn btn-editar" onClick={() => {
          const nuevoTitulo = prompt('Editar título', nota.titulo);
          const nuevoContenido = prompt('Editar contenido', nota.contenido);
          if (nuevoTitulo && nuevoContenido) {
            editarNota(nota.id, { titulo: nuevoTitulo, contenido: nuevoContenido });
          }
        }}>Editar</button>
        <button className="btn btn-eliminar" onClick={() => eliminarNota(nota.id)}>Eliminar</button>
      </div>
    );
  }
  
  export default BlogItem;
  



