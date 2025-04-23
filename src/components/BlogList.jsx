import BlogItem from './BlogItem';

function BlogList({ notas, editarNota, eliminarNota }) {
  if (notas.length === 0) {
    return (
      <div className="mensaje-vacio">
        <p>📝 No se encontraron notas con ese título. ¡Intenta otra búsqueda!</p>
      </div>
    );
  }

  return (
    <div className="notas-wrapper">
    {notas.map((nota) => (
      <BlogItem
        key={nota.id}
        nota={nota}
        editarNota={editarNota}
        eliminarNota={eliminarNota}
      />
    ))}
  </div>
);
}

export default BlogList;