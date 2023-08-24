import { useState } from 'react';
import './App.css';
import Form from './components/Form';

type NovaSenhaNew = {
  nomeServico: string,
  campoLogin:string,
  campoSenha: string,
  campoLink: string,

};

function App() {
  const [estadoForm, setEstadoForm] = useState(false);
  const [removeSenha, setRemoveSenha] = useState<NovaSenhaNew[]>([]);
  const removerSenhas = (senha: NovaSenhaNew) => {
    setRemoveSenha([...removeSenha, senha]);
    setEstadoForm(false);
  };
  return (
    <div>
      <h1>Gerenciador de Senhas</h1>

      {estadoForm ? (
        <Form removerSenhas={ removerSenhas } setEstadoForm={ setEstadoForm } />
      ) : (
        <button onClick={ () => setEstadoForm(true) }>Cadastrar Nova Senha</button>
      )}

      <div>

        {removeSenha.length === 0 ? <span>Nenhuma senha Cadastrada</span>
          : removeSenha.map((senha) => (
            <div key={ senha.campoLogin }>
              <a href={ senha.campoLink }>{ senha.nomeServico}</a>
              <p>{senha.campoLogin}</p>
              <p>{senha.campoSenha}</p>
              <button
                data-testid="remove-btn"
                onClick={ () => setRemoveSenha(removeSenha
                  .filter((password) => password.campoLogin !== senha.campoLogin)) }

              >
                remover
              </button>
            </div>))}
      </div>
    </div>
  );
}
export default App;
