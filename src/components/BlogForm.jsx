import { useState } from 'react';

const BlogForm = ({ agregarNota }) => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim() || !contenido.trim()) return;

    const nuevaNota = {
      id: Date.now(),
      titulo,
      contenido,
    };

    agregarNota(nuevaNota);
    setTitulo('');
    setContenido('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <textarea
        placeholder="Contenido"
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
      />
      <button type="submit">Agregar nota</button>
    </form>
  );
};

export default BlogForm;
