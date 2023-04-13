    const form = document.querySelector('.user');
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // previne o envio padrão do formulário
      
      const cnpj = document.getElementById('inputCnpj').value;
      const nomeEmpresarial = document.getElementById('inputNomeEmpresarial').value;
      const nomeFantasia = document.getElementById('inputNomeFantasia').value;
      const porte = document.getElementById('inputPorte').value;
      const logradouro = document.getElementById('inputLogradouro').value;
      const numero = document.getElementById('inputNumero').value;
      const complemento = document.getElementById('inputComplemento').value;
      const cep = document.getElementById('inputCep').value;
      const bairro = document.getElementById('inputBairro').value;
      const municipio = document.getElementById('inputMunicipio').value;
      const uf = document.getElementById('inputUf').value;
      const email = document.getElementById('inputEmail').value;
      const telefone = document.getElementById('inputTelefone').value;
      const senha = document.getElementById('inputSenha').value;

      const data = {
        "CNPJ": cnpj ,
        "Nome_empresarial": nomeEmpresarial,
        "Nome_fantasia": nomeFantasia,
        "Porte": porte,
        "CEP": cep,
        "Logradouro": logradouro,
        "Numero": numero,
        "Complemento": complemento,
        "Bairro": bairro,
        "Municipio": municipio,
        "UF": uf,
        "Telefone": telefone,
        "Email": email,
        "Senha": senha
      };

      fetch('http://localhost:3000/empresa/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          alert('Cadastrado realizado com sucesso!');
          form.reset();
        } else {
          throw new Error('Erro ao cadastrar a empresa!');
        }
      })
      .catch(error => console.error(error));
    });