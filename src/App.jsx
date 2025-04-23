import { useState, useEffect } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import SearchBar from './components/SearchBar';
import Data from './components/Data';
import './index.css';

function App() {
  const [notas, setNotas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    try {
      const storedNotas = JSON.parse(localStorage.getItem('notas')) || [];
      setNotas(storedNotas);
    } catch (error) {
      console.error('Error al leer localStorage:', error);
      setNotas([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  }, [notas]);

  const agregarNota = (nuevaNota) => {
    setNotas([...notas, nuevaNota]);
  };

  const editarNota = (id, notaActualizada) => {
    const nuevasNotas = notas.map((nota) =>
      nota.id === id ? { ...nota, ...notaActualizada } : nota
    );
    setNotas(nuevasNotas);
  };

  const eliminarNota = (id) => {
    setNotas(notas.filter((nota) => nota.id !== id));
  };

  const filteredNotas = notas.filter((nota) =>
    nota.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Mi Blog Personal</h1>
      <BlogForm agregarNota={agregarNota} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Data notasMostradas={filteredNotas.length} totalNotas={notas.length} />
      <BlogList
        notas={filteredNotas}
        editarNota={editarNota}
        eliminarNota={eliminarNota}
      />
    </div>
  );
}

export default App;
