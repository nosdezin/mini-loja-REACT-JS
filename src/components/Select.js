import { useEffect, useState } from "react";

export default function Select({handleChange}) {
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categorias")
      .then((reps) => reps.json())
      .then((resp) => {
        setTipos(resp);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <select onChange={handleChange}>
        <option disabled selected>
          Escolha o tipo do Produto
        </option>

        {tipos.map((tipo) => (
          <option value={tipo.name} key={tipo.id}>{tipo.nome}</option>
        ))}
      </select>
    </>
  );
}
