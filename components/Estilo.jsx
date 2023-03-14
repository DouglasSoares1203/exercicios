export default function Estilo(props) {
  return (
    <div>
      <h1
        style={{
          backgroundColor: props.numero >= 0 ? "#2D2" : "#D22",
          color: props.color,
          textAlign: props.direita ? "right" : "left",
        }}
      >
        Texto#1
      </h1>
      <h2
        style={{
          backgroundColor: props.numero >= 0 ? "#22D" : "#D22",
          color: props.color,
          textAlign: props.direita ? "right" : "left",
        }}
      >
        Texto#2
      </h2>
    </div>
  );
}
