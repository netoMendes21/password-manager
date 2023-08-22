import { useState } from 'react';

function Form() {
  const [formulario, setFormulario] = useState(false);

  const HandleClick = () => {
    setFormulario(!formulario);
  };

  return (
    <div>
      {
    formulario
      ? (
        <form action="">
          <label htmlFor="servico">Nome do serviço</label>
          <input type="text" name="servico" id="servico" />

          <label htmlFor="entrar">Login</label>
          <input type="text" name="entrar" id="entrar" />

          <label htmlFor="chave">Senha</label>
          <input type="password" name="chave" id="chave" />

          <label htmlFor="caminho">URL</label>
          <input type="text" name="caminho" id="caminho" />
          <button>Cadastrar</button>
          <button onClick={ HandleClick }>Cancelar</button>

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
