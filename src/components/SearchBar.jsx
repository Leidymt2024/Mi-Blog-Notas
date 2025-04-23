function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <input
        className="form-control"
        type="text"
        placeholder="Buscar por título..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    );
  }
  
  export default SearchBar;
  