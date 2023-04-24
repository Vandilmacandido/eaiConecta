let nomeEmpresarial, nomeFantasia, porte, logradouro, numero, complemento, cep, bairro, municipio, uf, telefone;

nomeEmpresarial = "T";
nomeFantasia = "T";
porte = "T";
logradouro = "T";
numero = "T";
complemento = "T";
cep = "T";
bairro = "T";
municipio = "T";
uf = "T";
telefone = "T";

// function checkCnpj(cnpj) {
//   $.ajax({
//     url: `https://receitaws.com.br/v1/cnpj/${cnpj.replace(/[^0-9]/g, "")}`,
//     type: "GET",
//     dataType: "jsonp",
//     success: function (data) {
//       if (data.nome == undefined) {
//         alert(`${data.status} ${data.message}`);
//       } else {
//         nomeEmpresarial = data.nome;
//         nomeFantasia = data.fantasia;
//         porte = data.porte;
//         logradouro = data.logradouro;
//         numero = data.numero;
//         complemento = data.complemento;
//         cep = data.cep;
//         bairro = data.bairro;
//         municipio = data.municipio;
//         uf = data.uf;
//         telefone = data.telefone;
//         document.getElementById("inputEmail").value = data.email;
//       }
//     }
//   })
// }

const form = document.querySelector('.user');
  form.addEventListener('submit', async (event) => {
  event.preventDefault(); // previne o envio padrão do formulário
      
  const cnpj = document.getElementById('inputCnpj').value;
  const email = document.getElementById('inputEmail').value;
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

      console.log(data)

      await fetch('http://localhost:3000/empresa/cadastro', {
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
