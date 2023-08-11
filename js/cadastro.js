let situacao,nomeEmpresarial, nomeFantasia, porte, logradouro, numero, complemento, cep, bairro, municipio, uf, telefone;

situacao = "0";
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


const api ='https://eai-api-complementar.onrender.com';

const form = document.querySelector('.user');
const createAccountBtn = document.getElementById('createAccountButton'); // Seleciona o botão pelo ID
const loader = createAccountBtn.querySelector("#loader"); // Seleciona o loader pelo ID
const criarContaSpan = createAccountBtn.querySelector("#criarConta"); // Seleciona o span de criar conta pelo ID



form.addEventListener('submit', async (event) => {
  event.preventDefault();

  createAccountBtn.disabled = true; // Desabilita o botão durante o envio
  loader.style.display = "block";
  criarContaSpan.style.display = "none";
  // createAccountBtn.innerHTML = '<span class="loader-cadastro" style="display: none;"></span>';

  const cnpj = document.getElementById('inputCnpj').value;
  const email = document.getElementById('inputEmail').value;
  const senha = document.getElementById('inputSenha').value;

  const data = {
                "Situacao": situacao, 
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

  await fetch(`${api}/empresa/cadastro`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    createAccountBtn.disabled = false;
    loader.style.display = 'none';
    criarContaSpan.style.display = "block";

    if (response.ok) {
      // alert('Cadastrado realizado com sucesso!');
      form.reset();
      $('#confirmationModal').modal('show'); // Exibir o modal de confirmação
    } else {
      alert('Erro ao cadastrar a empresa!');
      throw new Error('Erro ao cadastrar a empresa!');
    }
  })
  .catch(error => {
    console.error(error);
    createAccountBtn.disabled = false;
    loader.style.display = 'none';
    criarContaSpan.style.display = "block";
  });
});

// const confirmationModal = document.getElementById('confirmationModal');

//   confirmationModal.addEventListener('show.bs.modal', function (event) {
//     setTimeout(function () {
//       const modalInstance = bootstrap.Modal.getInstance(confirmationModal);
//       if (modalInstance._isShown) {
//         modalInstance.hide();
//         window.location.href = 'index.html'; // Redireciona para a tela inicial (index.html) após o tempo definido
//       }
//     }, 10000); // Tempo de bloqueio em milissegundos (neste exemplo, 10 segundos)
//   });




// const form = document.querySelector('.user');
//   form.addEventListener('submit', async (event) => {
//   event.preventDefault(); // previne o envio padrão do formulário
      
//   const cnpj = document.getElementById('inputCnpj').value;
//   const email = document.getElementById('inputEmail').value;
//   const senha = document.getElementById('inputSenha').value;

//       const data = {
//         "Situacao": situacao, 
//         "CNPJ": cnpj ,
//         "Nome_empresarial": nomeEmpresarial,
//         "Nome_fantasia": nomeFantasia,
//         "Porte": porte,
//         "CEP": cep,
//         "Logradouro": logradouro,
//         "Numero": numero,
//         "Complemento": complemento,
//         "Bairro": bairro,
//         "Municipio": municipio,
//         "UF": uf,
//         "Telefone": telefone,
//         "Email": email,
//         "Senha": senha
//       };

//       console.log(data)

//       await fetch(`https://eaiconecta-api.onrender.com/empresa/cadastro`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//       .then(response => {
//         if (response.ok) {
//           alert('Cadastrado realizado com sucesso!');
//           form.reset();
//         } else {
//           throw new Error('Erro ao cadastrar a empresa!');
//         }
//       })
//       .catch(error => console.error(error));
// });


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