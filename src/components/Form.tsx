import { useState } from 'react';

export type NovaSenha = {
  nomeServico: string,
  campoLogin:string,
  campoSenha: string,
  campoLink: string,
};

type RemoverSenhaType = {
  removerSenhas:(newpassword: NovaSenha) => void;
  setEstadoForm:(estado: boolean) => void;
};
function Form({ removerSenhas, setEstadoForm }: RemoverSenhaType) {
  const [infoForm, setInfoForm] = useState<NovaSenha>({
    nomeServico: '',
    campoLogin: '',
    campoSenha: '',
    campoLink: '',
  });

  function mudandoEstadoInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInfoForm({ ...infoForm, [name]: value });
  }

  function alertaDoFormulario(alerta: string, validacao: boolean) {
    const validarCampos = validacao ? 'valid-password-check' : 'invalid-password-check';
    return <span className={ validarCampos }>{alerta}</span>;
  }

  function Cadastrar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function validarCadastro() {
    const validarCampoServico = infoForm.nomeServico.length > 0;
    const validarCampoLogin = infoForm.campoLogin.length > 0;
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!_])[A-Za-z\d@#$%^&+=!_]{8,16}$/;
    return !(validarCampoServico
      && validarCampoLogin && regex.test(infoForm.campoSenha));
  }

  return (
    <div>

      <form onSubmit={ Cadastrar }>
        <label htmlFor="nomeServico">Nome do serviço</label>
        <input
          type="text"
          name="nomeServico"
          id="nomeServico"
          onChange={ mudandoEstadoInput }
          value={ infoForm.nomeServico }
        />

        <label htmlFor="campoLogin">Login</label>
        <input
          type="text"
          name="campoLogin"
          id="campoLogin"
          onChange={ mudandoEstadoInput }
          value={ infoForm.campoLogin }
        />

        <label htmlFor="campoSenha">Senha</label>
        <input
          type="password"
          name="campoSenha"
          id="campoSenha"
          onChange={ mudandoEstadoInput }
          value={ infoForm.campoSenha }
        />

        <label htmlFor="campoLink">URL</label>
        <input
          type="text"
          name="campoLink"
          id="campoLink"
          onChange={ mudandoEstadoInput }
          value={ infoForm.campoLink }
        />

        <button
          disabled={ validarCadastro() }
          onClick={ () => removerSenhas(infoForm) }
        >
          Cadastrar

        </button>

        <button onClick={ () => setEstadoForm(false) }>Cancelar</button>
        <div>
          <ol>
            <li>
              {alertaDoFormulario(
                'Possuir 8 ou mais caracteres',
                infoForm.campoSenha.length >= 8,
              )}
            </li>
            <li>
              {alertaDoFormulario(
                'Possuir até 16 caracteres',
                infoForm.campoSenha.length > 0 && infoForm.campoSenha.length <= 16,
              )}
            </li>
            <li>
              {alertaDoFormulario('Possuir letras e números', /^(?=.*[a-z])(?=.*\d)/.test(infoForm.campoSenha))}
            </li>
            <li>
              {alertaDoFormulario('Possuir algum caractere especial', /^(?=.*[@#$%^&+=!])/.test(infoForm.campoSenha))}
            </li>
          </ol>
        </div>
      </form>

    </div>
  );
}
export default Form;
