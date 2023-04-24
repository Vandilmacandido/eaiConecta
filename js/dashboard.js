// INICIO LISTAR PEDIDO

const servicos = [
    {
      nome: "Brilux",
      data: "27/05/2023",
      serviço: "Desinfecção",
      detalhes: {
        nome: "Brilux",
        servico:"Desinfecção",
        data: "27/05/2023",
        hora: "13:00",
        local: "Galpão",
        endereco: "Rua Cassimiro Abreu S/N (Pe 15 Km 14), Paulista, PE, 53403-480",
        telefone: "(11) 1234-5678",
        tamanho: "250 m²",
        valorServico: "R$ 1250,00",
        valorReceber: "R$ 875,00",
      }
    },
    {
        nome: "LaboTech",
        data: "30/05/2023",
        serviço: "Desinfecção",
        detalhes: {
        nome: "LaboTech",
        servico:"Desinfecção",
        data: "30/05/2023",
        hora: "10:00",
        local: "Escritório",
        endereco: "Rua da Guia, 204, Recife Antigo, Recife, PE, 50030-360",
        telefone: "(11) 9876-5432",
        tamanho: "150 m²",
        valorServico: "R$ 750,00",
        valorReceber: "R$ 525,00",
        }
        },
        {
        nome: "Fernando Henrique",
        data: "02/06/2023",
        serviço: "Desinfecção",
        detalhes: {
        nome: "Fernando Henrique",
        servico:"Desinfecção",
        data: "02/06/2023",
        hora: "14:00",
        local: "Loja",
        endereco: "Av. Rio Branco 155, Recife, PE, 50030",
        telefone: "(11) 2345-6789",
        tamanho: "80 m²",
        valorServico: "R$ 400,00",
        valorReceber: "R$ 280,00",
        }
        },
        {
        nome: "JP Supermercado",
        data: "05/06/2023",
        serviço: "Desinfecção",
        detalhes: {
            nome: "JP Supermercado",
            servico:"Desinfecção",
            data: "05/06/2023",
            hora: "09:00",
            local: "Supermercado",
            endereco: "Av. Conselheiro Aguiar, 1472 - sala 606, Boa Viagem, Recife, PE, 51011-031",
            telefone: "(11) 3456-7890",
            tamanho: "500 m²",
            valorServico: "R$ 2500,00",
            valorReceber: "R$ 1750,00",
        }
        },
        {
        nome: "Roberto Santos",
        data: "05/08/2023",
        serviço: "Desinfecção",
        detalhes: {
            nome: "Roberto Santos",
            servico: "Desinfecção",
            data: "05/08/2023",
            hora: "11:00",
            local: "Consultório",
            endereco: "Rua: Duque de caxias N. 16 Bairo: Boa vista - Caruaru - PE",
            telefone: "(31) 4567-8901",
            tamanho: "60 m²",
            valorServico: "R$ 300,00",
            valorReceber: "R$ 210,00",
        }
        },
    
  ];


  function preencherTabelaServicos() {
    const tabelaServicos = document.getElementById("tabela-servicos");
    
    for (let servico of servicos) {
      const novaLinha = document.createElement("tr");
      novaLinha.innerHTML = `
        <td>${servico.nome}</td>
        <td>${servico.data}</td>
        <td>${servico.serviço}</td>
        <td>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalDetalhesPedidos" onclick="mostrarDetalhes('${encodeURIComponent(JSON.stringify(servico.detalhes))}')">Detalhes</button>
        </td>
      `;
      
      tabelaServicos.appendChild(novaLinha);
      console.log(JSON.stringify(servico.detalhes))
    }

  }


function mostrarDetalhes(servicoDetalhes) {
    const detalhes = JSON.parse(decodeURIComponent(servicoDetalhes));
    const modalCliente = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(1) li:nth-child(1) p");
    const modalServico = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(1) li:nth-child(2) p");
    const modalData = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(1) li:nth-child(3) p");
    const modalHora = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(1) li:nth-child(4) p");
    const modalLocal = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(1) li:nth-child(5) p");
    const modalEndereco = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(2) li:nth-child(1) p");
    const modalTelefone = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(2) li:nth-child(2) p");
    const modalArea = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(2) li:nth-child(3) p");
    const modalValorServico = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(2) li:nth-child(4) p");
    const modalValorReceber = document.querySelector("#modalDetalhesPedidos .modal-body .col-md-6:nth-child(2) li:nth-child(5) p");
  
    modalCliente.textContent = detalhes.nome;
    modalServico.textContent = detalhes.servico;
    modalData.textContent = detalhes.data;
    modalHora.textContent = detalhes.hora;
    modalLocal.textContent = detalhes.local;
    modalEndereco.textContent = detalhes.endereco;
    modalTelefone.textContent = detalhes.telefone;
    modalArea.textContent = detalhes.tamanho;
    modalValorServico.textContent = detalhes.valorServico;
    modalValorReceber.textContent = detalhes.valorReceber;
  }
  
preencherTabelaServicos();

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
const adicionarFuncionario = () => {

  const listaLivros = document.getElementById("corpoTabelaFunc");

  fetch("http://localhost:3000/funcionario")
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
                  console.log(funcionario[0].Nome);
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

adicionarFuncionario();

// FIM MOSTRAR LISTA DE FUNCIONÁRIO CADASTRADO 