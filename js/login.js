const api ='https://eaiconecta-api.onrender.com';
const form = document.querySelector('.userlogin');
const enterAccountBtn = document.getElementById('enterAccountButton'); // Seleciona o botão pelo ID
const loader = enterAccountBtn.querySelector("#loader"); // Seleciona o loader pelo ID
const entrarContaSpan = enterAccountBtn.querySelector("#entrarConta"); // Seleciona o span de entrar na conta pelo ID

form.addEventListener('submit', (event) => {
  event.preventDefault(); // previne o envio padrão do formulário

  enterAccountBtn.disabled = true; // Desabilita o botão durante o envio
  loader.style.display = "block";
  entrarContaSpan.style.display = "none";

  const email = document.getElementById('inputEmail').value;
  const senha = document.getElementById('inputSenha').value;

  const data = {
    "Email": email,
    "Senha": senha
  };

  fetch(`${api}/empresa/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
  },
    body: JSON.stringify(data)
  })
  .then(response => {
    enterAccountBtn.disabled = false; // Desabilita o botão durante o envio
    loader.style.display = "none";
    entrarContaSpan.style.display = "block";
    if (response.ok) {
      return response.json(); // converte a resposta para JSON
    } else {
      alert('E-mail ou senha invalidos');
      throw new Error('Credenciais inválidas!');
    }
  })
  .then(data => {
    // Armazena o token no localStorage
    localStorage.setItem('token', data.token);
    localStorage.setItem('CodEmpresa', data.CodEmpresa);
    localStorage.setItem('Nome_Fantasia', data.Nome_fantasia);
    localStorage.setItem('verificacaoContrato', data.verificacaoContrato);
    localStorage.setItem('Verificacao', data.Verificacao);
    console.log(data)
    alert('Login realizado com sucesso!');
    window.location.href = 'dashboard.html'; // redireciona para a página dashboard.html
  })
  .catch(error => {
    console.error(error);
    enterAccountBtn.disabled = false; // Desabilita o botão durante o envio
    loader.style.display = "none";
    entrarContaSpan.style.display = "block";
  });
});