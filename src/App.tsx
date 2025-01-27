import { useState } from 'react';
import './App.css';
import Form from './components/Form';

type NovaSenhaType = {
  nomeServico: string,
  campoLogin:string,
  campoSenha: string,
  campoLink: string,

};

function App() {
  const [escondePassword, setEscondePassword] = useState(false);
  const [estadoForm, setEstadoForm] = useState(false);
  const [removeSenha, setRemoveSenha] = useState<NovaSenhaType[]>([]);
  const removerSenhas = (senha: NovaSenhaType) => {
    setRemoveSenha([...removeSenha, senha]);
    setEstadoForm(false);
  };

  const toggleEscondePassword = () => {
    setEscondePassword(!escondePassword);
  };

  const mostrarSenha = (password: string) => {
    return escondePassword ? '******' : password;
  };

  return (
    <div className="grade">
      <h1>Gerenciador de Senhas</h1>

      {estadoForm ? (
        <Form removerSenhas={ removerSenhas } setEstadoForm={ setEstadoForm } />
      ) : (
        <button
          className="botaoNovaSenha"
          onClick={ () => setEstadoForm(true) }
        >
          Cadastrar Nova Senha

        </button>
      )}

      <div className="removeSenha">

        {removeSenha.length === 0
          ? <span className="campoVazio">Nenhuma senha Cadastrada</span>
          : removeSenha.map((senha) => (
            <div key={ senha.campoLogin }>
              <a href={ senha.campoLink }>{ senha.nomeServico}</a>
              <p>{senha.campoLogin}</p>
              <p>{mostrarSenha(senha.campoSenha)}</p>
              <button
                className="botaoRemover"
                data-testid="remove-btn"
                onClick={ () => setRemoveSenha(removeSenha
                  .filter((password) => password.campoLogin !== senha.campoLogin)) }

              >
                remover
              </button>
              <label
                className="esconder"
                htmlFor="escondePassword"
              >
                Esconder senhas

              </label>
              <input
                className="box"
                type="checkbox"
                name=""
                id="escondePassword"
                checked={ escondePassword }
                onChange={ toggleEscondePassword }
              />
            </div>))}
      </div>
    </div>
  );
}
export default App;
