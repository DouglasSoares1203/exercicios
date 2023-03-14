import Pessoa from "../../../components/Pessoa";

export default function exemploTS() {
  return (
    <div>
      <Pessoa nome="Doug" idade={33} />
      <Pessoa nome="Maria" />
    </div>
  );
}
