    const form = document.querySelector('.funcionario');
    const btn = document.querySelector('.cadastroFuncionario');
    btn.addEventListener('click', (event) => {
      event.preventDefault(); // previne o envio padrão do formulário
      
      const nome = document.getElementById('inputNome').value;
      const rg = document.getElementById('inputRg').value;
      const cpf = document.getElementById('inputCpf').value;
      const telefone = document.getElementById('inputTelefone').value;
      const sexo = document.getElementById('inputSexo').value;
      const email = document.getElementById('inputEmail').value;
      const senha1 = document.getElementById('inputSenha1').value;
      const senha2 = document.getElementById('inputSenha2').value;

      const data = {
        "nome": nome ,
        "rg": rg,
        "cpf": cpf,
        "telefone": telefone,
        "sexo": sexo,
        "email": email,
        "senha1": senha1,
        "senha2": senha2
      };

      fetch('http://localhost:3000/empresa/cadastrofuncionario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          alert('Cadastrado realizado com sucesso!');
          adicionarFuncionario();
          form.reset();
        } else {
          throw new Error('Erro ao cadastrar Funcionário!');
        }
      })
      .catch(error => console.error(error));
    });