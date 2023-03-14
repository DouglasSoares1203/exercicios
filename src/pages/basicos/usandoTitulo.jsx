import Titulo from "../../../components/Titulo";

export default function usandoTitulo() {
  return (
    <div>
      <Titulo
        principal="Pagina de Cadastro "
        secundario="Incluir,alterar e excluir coisas!"
      />
      <Titulo
        principal="Pagina de Login "
        secundario="Informe o seu email e senha"
        pequeno={true}
      />
      <Titulo
        principal="Pagina de Login "
        secundario="Informe o seu email e senha"
        pequeno
      />
    </div>
  );
}
