const Data = ({ notasMostradas, totalNotas }) => {
  if (notasMostradas === 0) {
    return null; // No mostrar nada
  }

  return (
    <div className="contador">
      <strong>
        Mostrando {notasMostradas} nota{notasMostradas !== 1 ? 's' : ''} de {totalNotas}
      </strong>
    </div>
  );
};

export default Data;


  