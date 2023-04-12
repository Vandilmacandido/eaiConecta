const form = document.querySelector('.funcionario');
const btn = document.querySelector('.cadastroFuncionario');

// const inputNome = document.getElementById('inputNome');
// inputNome.addEventListener('blur', () => {
//   if (inputNome.value === '') {
//     inputNome.classList.add('inputError');
//   } else {
//     inputNome.classList.remove('inputError');
//   }
// });

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

  // Validação do NOME
  const inputNome = document.getElementById('inputNome');
  if (nome === '') {
    inputNome.classList.add('inputError');
	return;
  } else {
    inputNome.classList.remove('inputError');
  }

  // Validação do EMAIL
  const inputEmail = document.getElementById('inputEmail');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    inputEmail.classList.add('inputError');
	return;
  } else {
    inputEmail.classList.remove('inputError');
  }

  // Validação do CPF
  const cpfRegex = /^\d{11}$/;
  const inputCpf = document.getElementById('inputCpf');
  if (!cpfRegex.test(cpf)) {
    inputCpf.classList.add('inputError');
	return;
  } else {
    inputCpf.classList.remove('inputError');
  }


  // Validação do RG
  const inputRg = document.getElementById('inputRg');
  if (!/^\d{7}$/.test(rg)) {
    inputRg.classList.add('inputError');
	return;
  } else {
    inputRg.classList.remove('inputError');
  }

  // Validação do Sexo
  const inputSexo = document.getElementById('inputSexo');
  if (sexo === '') {
    inputSexo.classList.add('inputError');
	  return;
  } else {
    inputSexo.classList.remove('inputError');
  }

  // Validação do telefone
  const inputTelefone = document.getElementById('inputTelefone');
  if (!/^\d{11}$/.test(telefone)) {
    inputTelefone.classList.add('inputError');
	  return;
  } else {
    inputTelefone.classList.remove('inputError');
  }

  // Validação das senhas
  const inputSenha1 = document.getElementById('inputSenha1');
  const inputSenha2 = document.getElementById('inputSenha2');
  if (senha1 !== senha2) {
    inputSenha1.classList.add('inputError');
    inputSenha2.classList.add('inputError');
    return;
  }else {
    inputSenha1.classList.remove('inputError');
    inputSenha2.classList.remove('inputError');
  }

  // Verifica se todos os campos estão preenchidos
  if (!nome || !rg || !cpf || !telefone || !sexo || !email || !senha1 || !senha2) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

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
