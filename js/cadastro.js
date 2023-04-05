    const form = document.querySelector('.user');
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // previne o envio padrão do formulário
       alert("teste")

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
        "cnpj": cnpj ,
        "nomeEmpresarial": nomeEmpresarial,
        "nomeFantasia": nomeFantasia,
        "porte": porte,
        "cep": cep,
        "logradouro": logradouro,
        "numero": numero,
        "complemento": complemento,
        "bairro": bairro,
        "municipio": municipio,
        "uf": uf,
        "telefone": telefone,
        "email": email,
        "senha": senha
      };

      fetch('http://localhost:3000/empresa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          alert('Livro cadastrado com sucesso!');
          form.reset();
        } else {
          throw new Error('Erro ao cadastrar livro!');
        }
      })
      .catch(error => console.error(error));
    });