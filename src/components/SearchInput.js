import { useState, useEffect } from "react";
import styles from "./SearchInput.module.css";

export default function SearchInput() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/itens")
      .then((reps) => reps.json())
      .then((resp) => {
        setItens(resp);
      })
      .catch((err) => console.log(err));
  }, []);

  const NovosItens = itens.filter(function (obj) {
    return obj.tipo === "chapeu";
  });
  
  console.log(NovosItens);

  return (
    <div className={styles.pesquisa_container}>
      <button type="button">Chapeu</button>
      <button type="button">Moletom</button>
      <button type="button">Camisa</button>
      <button type="button">Tenis</button>

      <div>{/* {itens.map()} */}</div>
    </div>
  );
}
