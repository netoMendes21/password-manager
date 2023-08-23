import { useState } from 'react';

function Form() {
  const [nomeServico, setNomeServico] = useState('');
  const [campoLogin, setCampoLogin] = useState('');
  const [campoSenha, setCampoSenha] = useState('');
  const [formulario, setFormulario] = useState(false);

  function alertaDoFormulario(alerta: string, validacao: boolean) {
    const validarCampos = validacao ? 'valid-password-check' : 'invalid-password-check';
    return <span className={ validarCampos }>{alerta}</span>;
  }

  function validarCadastro() {
    const validarCampoServico = nomeServico.length > 0;
    const validarCampoLogin = campoLogin.length > 0;
    const validarCampoSenha = campoSenha.length >= 8 && campoSenha.length <= 16;
    const regex = /^(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])[a-z\d@#$%^&+=!]{8,16}$/;
    return (validarCampoServico
      && validarCampoLogin && validarCampoSenha && regex.test(campoSenha));
  }

  const HandleClick = () => {
    setFormulario(!formulario);
  };

  return (
    <div>
      {
        formulario
          ? (
            <form action="">
              <label htmlFor="nomeServico">Nome do serviço</label>
              <input
                type="text"
                name=""
                id="nomeServico"
                onChange={ (e) => setNomeServico(e.target.value) }
                value={ nomeServico }
              />

              <label htmlFor="campoLogin">Login</label>
              <input
                type="text"
                name=""
                id="campoLogin"
                onChange={ (e) => setCampoLogin(e.target.value) }
                value={ campoLogin }
              />

              <label htmlFor="campoSenha">Senha</label>
              <input
                type="password"
                name=""
                id="campoSenha"
                onChange={ (e) => setCampoSenha(e.target.value) }
                value={ campoSenha }
              />

              <label htmlFor="caminho">URL</label>
              <input type="text" name="" id="caminho" />

              <button disabled={ !validarCadastro() }>Cadastrar</button>

              <button onClick={ HandleClick }>Cancelar</button>
              <div>
                <ol>
                  <li>
                    {alertaDoFormulario(
                      'Possuir 8 ou mais caracteres',
                      campoSenha.length >= 8,
                    )}
                  </li>
                  <li>
                    {alertaDoFormulario(
                      'Possuir até 16 caracteres',
                      campoSenha.length <= 16,
                    )}
                  </li>
                  <li>
                    {alertaDoFormulario('Possuir letras e números', /^(?=.*[a-z])(?=.*\d)/.test(campoSenha))}
                  </li>
                  <li>
                    {alertaDoFormulario('Possuir algum caractere especial', /^(?=.*[@#$%^&+=!])/.test(campoSenha))}
                  </li>
                </ol>
              </div>
            </form>
          )
          : (
            <div>
              <button onClick={ HandleClick }>Cadastrar nova senha</button>
            </div>
          )
   }

    </div>
  );
}
export default Form;
