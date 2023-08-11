// INICIO LISTAR PEDIDO

// const servicos = [
//     {
//       nome: "Brilux",
//       data: "27/05/2023",
//       serviço: "Desinfecção",
//       detalhes: {
//         nome: "Brilux",
//         servico:"Desinfecção",
//         data: "27/05/2023",
//         hora: "13:00",
//         local: "Galpão",
//         endereco: "Rua Cassimiro Abreu S/N (Pe 15 Km 14), Paulista, PE, 53403-480",
//         telefone: "(11) 1234-5678",
//         tamanho: "250 m²",
//         valorServico: "R$ 1250,00",
//         valorReceber: "R$ 875,00",
//       }
//     },
//     {
//         nome: "LaboTech",
//         data: "30/05/2023",
//         serviço: "Desinfecção",
//         detalhes: {
//         nome: "LaboTech",
//         servico:"Desinfecção",
//         data: "30/05/2023",
//         hora: "10:00",
//         local: "Escritório",
//         endereco: "Rua da Guia, 204, Recife Antigo, Recife, PE, 50030-360",
//         telefone: "(11) 9876-5432",
//         tamanho: "150 m²",
//         valorServico: "R$ 750,00",
//         valorReceber: "R$ 525,00",
//         }
//         },
//         {
//         nome: "Fernando Henrique",
//         data: "02/06/2023",
//         serviço: "Desinfecção",
//         detalhes: {
//         nome: "Fernando Henrique",
//         servico:"Desinfecção",
//         data: "02/06/2023",
//         hora: "14:00",
//         local: "Loja",
//         endereco: "Av. Rio Branco 155, Recife, PE, 50030",
//         telefone: "(11) 2345-6789",
//         tamanho: "80 m²",
//         valorServico: "R$ 400,00",
//         valorReceber: "R$ 280,00",
//         }
//         },
//         {
//         nome: "JP Supermercado",
//         data: "05/06/2023",
//         serviço: "Desinfecção",
//         detalhes: {
//             nome: "JP Supermercado",
//             servico:"Desinfecção",
//             data: "05/06/2023",
//             hora: "09:00",
//             local: "Supermercado",
//             endereco: "Av. Conselheiro Aguiar, 1472 - sala 606, Boa Viagem, Recife, PE, 51011-031",
//             telefone: "(11) 3456-7890",
//             tamanho: "500 m²",
//             valorServico: "R$ 2500,00",
//             valorReceber: "R$ 1750,00",
//         }
//         },
//         {
//         nome: "Roberto Santos",
//         data: "05/08/2023",
//         serviço: "Desinfecção",
//         detalhes: {
//             nome: "Roberto Santos",
//             servico: "Desinfecção",
//             data: "05/08/2023",
//             hora: "11:00",
//             local: "Consultório",
//             endereco: "Rua: Duque de caxias N. 16 Bairo: Boa vista - Caruaru - PE",
//             telefone: "(31) 4567-8901",
//             tamanho: "60 m²",
//             valorServico: "R$ 300,00",
//             valorReceber: "R$ 210,00",
//         }
//         },
    
//   ];


  // function preencherTabelaServicos() {
  //   const tabelaServicos = document.getElementById("tabela-servicos");
    
  //   for (let servico of servicos) {
  //     const novaLinha = document.createElement("tr");
  //     novaLinha.innerHTML = `
  //       <td>${servico.nome}</td>
  //       <td>${servico.data}</td>
  //       <td>${servico.serviço}</td>
  //       <td>
  //       <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalDetalhesPedidos" onclick="mostrarDetalhes('${encodeURIComponent(JSON.stringify(servico.detalhes))}')">Detalhes</button>
  //       </td>
  //     `;
      
  //     tabelaServicos.appendChild(novaLinha);
  //     console.log(JSON.stringify(servico.detalhes))
  //   }

  // }


// const api = 'https://eaiconecta-api.onrender.com';
const codigoEmpresa = localStorage.getItem('CodEmpresa');
const nomedaEmpresa = localStorage.getItem('Nome_Fantasia');
const verificacaoContrato = localStorage.getItem('verificacaoContrato');
const verificacao = localStorage.getItem('Verificacao');
// const verificacao = localStorage.setItem('Verficacao');
const btnAceitarPedido = document.querySelector(".btn-aceitar-pedido");
const contractModal = document.getElementById('contractModal');
console.log('Codigo da empresa' + codigoEmpresa)
console.log('Contrato' + verificacaoContrato)
console.log('Verificação' + verificacao);

btnAceitarPedido.addEventListener("click", aceitarPedido);

// function preencherTabelaServicos() {
//   const tabelaServicos = document.getElementById("tabela-servicos");

//   tabelaServicos.innerHTML = "";
  
//   fetch(`${api}/agendamento`)
//     .then(response => response.json())
//     .then(data => {
//       for (let servico of data.response) {
//         const novaLinha = document.createElement("tr");
//         novaLinha.innerHTML = `
//           <td>${servico.Nome}</td>
//           <td>${new Date(servico.DataServico).toLocaleDateString()}</td>
//           <td>${servico.InfoAdicionais}</td>
//           <td>
//             <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalDetalhesPedidos" onclick="mostrarDetalhes('${encodeURIComponent(JSON.stringify(servico))}')">Detalhes</button>
//           </td>
//        `;
//         tabelaServicos.appendChild(novaLinha);
//         }
//       })
//     .catch(error => console.log(error));
// }


function preencherTabelaServicos() {
  const tabelaServicos = document.getElementById("tabela-servicos");

  tabelaServicos.innerHTML = "";
  
  fetch(`https://eai-api-complementar.onrender.com/agendamento`)
    .then(response => response.json())
    .then(data => {
      for (let servico of data.response) {
        const novaLinha = document.createElement("tr");
        novaLinha.innerHTML = `
          <td>${servico.nome}</td>
          <td>${new Date(servico.data).toLocaleDateString()}</td>
          <td>${servico.bairro}</td>
          <td>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalDetalhesPedidos" onclick="mostrarDetalhes('${encodeURIComponent(JSON.stringify(servico))}')">Detalhes</button>
          </td>
       `;
        tabelaServicos.appendChild(novaLinha);
        }
      })
    .catch(error => console.log(error));
}


  function mostrarDetalhes(servicoDetalhes) {
    const detalhes = JSON.parse(decodeURIComponent(servicoDetalhes));
    const modalCodigo = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(1) li:nth-child(1) p");
    const modalCliente = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(1) li:nth-child(2) p");
    const modalServico = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(1) li:nth-child(3) p");
    const modalData = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(1) li:nth-child(4) p");
    const modalHora = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(1) li:nth-child(5) p");
    const modalLocal = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(1) li:nth-child(6) p");
    const modalEndereco = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(2) li:nth-child(1) p");
    const modalTelefone = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(2) li:nth-child(2) p");
    const modalArea = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(2) li:nth-child(3) p");
    const modalValorServico = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(2) li:nth-child(4) p");
    const modalValorReceber = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(2) li:nth-child(5) p");

    modalCodigo.textContent = detalhes.id;
    modalCliente.textContent = detalhes.nome;
    modalServico.textContent = detalhes.InfoAdicionais;
    modalData.textContent = `${new Date(detalhes.data).toLocaleDateString()}`;
    modalHora.textContent = detalhes.horario;
    modalLocal.textContent = detalhes.bairro;
    modalEndereco.textContent = `${detalhes.logradouro} - Nº${detalhes.numero} - ${detalhes.bairro}`;
    modalTelefone.textContent = detalhes.telefone;
    modalArea.textContent = detalhes.area;
    modalValorServico.textContent = detalhes.valor;
    modalValorReceber.textContent = `${detalhes.Valor * 0.7},00`;
  }
  
// FIM LISTAR PEDIDO


// INICIO BOTÃO ACEITAR FICAR ATIVO DEPOIS QUE SELECIONAR UM FUNCIONÁRIO

const selectFuncionario = document.querySelector('.select-funcionario');
const botaoAceitar = document.querySelector('.btn-aceitar-pedido');

selectFuncionario.addEventListener('change', function() {
  if (this.value !== '') {
    botaoAceitar.removeAttribute('disabled');
  } else {
    botaoAceitar.setAttribute('disabled', true);
  }
});

// FIM BOTÃO ACEITAR FICAR ATIVO DEPOIS QUE SELECIONAR UM FUNCIONÁRIO


// INICIO ADICIONAR IMAGEM NO CADASTRO DO FUNCIONÁRIO

const inputFile = document.querySelector("#picture__input");
        const pictureImage = document.querySelector(".picture__image");
        const pictureImageTxt = "Escolha uma foto";
        pictureImage.innerHTML = pictureImageTxt;

        inputFile.addEventListener("change", function (e) {
            const inputTarget = e.target;
            const file = inputTarget.files[0];

            if (file) {
                const reader = new FileReader();

                reader.addEventListener("load", function (e) {
                    const readerTarget = e.target;

                    const img = document.createElement("img");
                    img.src = readerTarget.result;
                    img.classList.add("picture__img");

                    pictureImage.innerHTML = "";
                    pictureImage.appendChild(img);
                });

                reader.readAsDataURL(file);
            } else {
                pictureImage.innerHTML = pictureImageTxt;
            }
        });

//FIM ADICIONAR IMAGEM NO CADASTRO DO FUNCIONÁRIO


// INICIO MOSTRAR LISTA DE FUNCIONÁRIO CADASTRADO 
const adicionarFuncionario = async () => {

  const listaLivros = document.getElementById("corpoTabelaFunc");

  await fetch(`${api}/funcionario/codigo/${codigoEmpresa}`)
      .then((response) => response.json())
      .then((data) => {
          if (Array.isArray(data)) {
              data.forEach((funcionario) => {
                  const li = document.createElement("li");
                  li.textContent =
                      `Nome: ${funcionario.nome}`;
                  listaLivros.appendChild(li);
              });
          } else {
              const tbody = document.getElementById('corpoTabelaFunc');
              const values = Object.values(data);
              tbody.innerHTML = '';
              console.log(data)
              values.forEach((funcionario) => {
                  const tam = funcionario.length
                  for (i = 0; i < tam; i++) {
                      const tr = document.createElement("tr");
                      const nomeTd = document.createElement('td')
                      nomeTd.textContent = funcionario[i].Nome;
                      tr.appendChild(nomeTd);

                      const autorTd = document.createElement('td')
                      autorTd.textContent =
                          '0 serviços realizados';
                      tr.appendChild(autorTd);

                      const editoraTd = document.createElement('td')
                      editoraTd.textContent =
                          'Falta realizar o treinamento';
                      tr.appendChild(editoraTd);

                      // Cria a célula Treinamento
                      const treinamentoTd = document.createElement('td');
                      const treinamentoBtn = document.createElement('button');

                      // Define as classes e atributos do botão
                      treinamentoBtn.classList.add('btn', 'btn-primary');
                      treinamentoBtn.setAttribute('type', 'button');
                      treinamentoBtn.setAttribute('data-toggle', 'modal');
                      treinamentoBtn.setAttribute('data-target', '#agendarFuncionario');
                      treinamentoBtn.textContent = 'Treinamento';

                      // Adiciona o botão à célula td
                      treinamentoTd.appendChild(treinamentoBtn);
                      tr.appendChild(treinamentoTd);

                      // const precoTd = document.createElement('td')
                      // precoTd.textContent = funcionario[i].Preco;
                      // tr.appendChild(precoTd);

                      listaLivros.appendChild(tr);
                  }
              });
          }
      })
      .catch((error) => console.error(error));
};
// FIM MOSTRAR LISTA DE FUNCIONÁRIO CADASTRADO 

// INICIO MOSTRAR NO CAMPO SELECTED A LISTA DE FUNCIONÁRIO 
const selectFuncionarios = () => {

  const selectFuncionario = document.querySelector('.select-funcionario');
  fetch(`${api}/funcionario/codigo/${codigoEmpresa}`)
    .then(response => response.json())
    .then(data => {
      const funcionarios = data.response;
      selectFuncionario.innerHTML = '';
      selectFuncionario.innerHTML = '<option value="" selected>Selecione Funcionário</option>';
      // Itera sobre o array de funcionários e cria uma opção para cada um
      funcionarios.forEach(funcionario => {
        const option = document.createElement('option');
        option.value = funcionario.CodFuncionario;
        option.textContent = funcionario.Nome;
        selectFuncionario.appendChild(option);
      });
    });

}
// FIM MOSTRAR NO CAMPO SELECTED A LISTA DE FUNCIONÁRIO 

function aceitarPedido() {
  const selectFuncionario = document.querySelector(".select-funcionario");
  const codFuncionario = selectFuncionario.value;
  const codAgendamento= document.querySelector('#modalDetalhesPedidos .modal-body .col-md-6:nth-child(1) li:nth-child(1) p').textContent;
  

  const data = {
    "CodFuncionario": codFuncionario,
    "CodAgendamento": codAgendamento
  };


  fetch(`${api}/agendamento/atribuir/${codAgendamento}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      alert('Pedido aceito!!')
      preencherTabelaServicos();
    })
    .catch((error) => {
      console.error(error);
    });
}

function fecharMensagem() {
  // Oculta a mensagem de contrato não ativado ao clicar no botão "Fechar"
  document.getElementById("contractMessage").style.display = "none";
}



function habilitarFuncionalidades() {
  // Verifica se o contrato está ativado e a conta foi verificada
  if (verificacaoContrato === '1' && verificacao === '1') {
    const btnAceitarPedido = document.querySelector(".btn-add-funcionario");
    btnAceitarPedido.removeAttribute("disabled");
    contractModal.classList.remove('show'); 
  } else {
    // Caso contrário, desabilita o botão de aceitar pedido
    btnAceitarPedido.setAttribute("disabled", true);
    document.getElementById("contractMessage").style.display = "block";
    contractModal.classList.add('show');
  }
}

if (verificacaoContrato === '1' && verificacao === '1') {
  // Carrega a lista de funcionários somente se o contrato estiver ativado e a conta estiver verificada
  selectFuncionarios();
  adicionarFuncionario();
  preencherTabelaServicos();
}

habilitarFuncionalidades();

