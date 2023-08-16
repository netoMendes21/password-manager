function Form() {
  return (
    <form action="">
      <label htmlFor="nomeDoServico">Nome do serviço</label>
      <input type="text" name="nomeDoServico" id="nomeDoServico" />

      <label htmlFor="login">Login</label>
      <input type="text" name="login" id="login" />

      <label htmlFor="senha">Senha</label>
      <input type="password" name="senha" id="senha" />

      <label htmlFor="url">URL</label>
      <input type="text" name="url" id="url" />

      <button>Cadastrar</button>
      <button>Cancelar</button>

    </form>
  );
}

export default Form;
