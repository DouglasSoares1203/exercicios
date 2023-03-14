import { useState } from "react";

export default function formulario() {
  const [valor, setValor] = useState("");

  function alterarInput() {
    setValor(valor + "!");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Valor</span>
      <input
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <button onClick={alterarInput}>Alterar</button>
    </div>
  );
}
