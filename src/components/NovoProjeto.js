import { useEffect, useState } from "react";
import styles from "./NovoProjeto.module.css";

export default function NovoProjeto() {
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
    <div className={styles.project_container}>
      <div>
        <input type="text" placeholder="Digite o nome do Produto" />
        <input type="number" placeholder="Digite o preço do Produto" />
        <select>
          <option disabled aria-checked>
            Escolha o tipo do Produto
          </option>
          {tipos.map((tipo) => (
            <option key={tipo.id}>{tipo.nome}</option>
          ))}
        </select>
        <button type="submit">Criar!</button>
      </div>
    </div>
  );
}
