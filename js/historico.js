// INICIO LISTAR PEDIDO

const servicosAbertos = [
    {
      nome: "Brilux",
      data: "27/05/2023",
      serviço: "Desinfecção",
      responsaveltecnico: "Matheus Costa",
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
        responsaveltecnico: "Ana Souza",
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
        responsaveltecnico: "Ana Souza",
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
        responsaveltecnico: "Rodrigo Silva",
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
        responsaveltecnico: "Matheus Costa",
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

  const servicosConcluidos = [
    {
      nome: "Maria",
      data: "27/05/2023",
      serviço: "Desinfecção",
      responsaveltecnico: "Ana Souza",
      detalhes: {
        nome: "Maria",
        servico:"Desinfecção",
        data: "27/05/2023",
        hora: "10:00",
        local: "Galpão",
        endereco: "Rua Cassimiro Abreu S/N (Pe 15 Km 14), Paulista, PE, 53403-480",
        telefone: "(11) 1234-5678",
        tamanho: "250 m²",
        valorServico: "R$ 1250,00",
        valorReceber: "R$ 875,00",
      }
    },
        
  ];

  const servicosCancelados = [
    {
      nome: "Roberto Santos",
      data: "05/08/2023",
      serviço: "Desinfecção",
      responsaveltecnico: "Matheus Costa",
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

  // function preencherTabelaServicosAbertos() {
  //   const tabelaServicos = document.getElementById("tabela-servicos-abertos");
    
  //   for (let servico of servicosAbertos) {
  //     const novaLinha = document.createElement("tr");
  //     novaLinha.innerHTML = `
  //       <td>${servico.nome}</td>
  //       <td>${servico.data}</td>
  //       <td>${servico.detalhes.hora}</td>
  //       <td>${servico.serviço}</td>
  //       <td>${servico.responsaveltecnico}</td>
  //       <td>
  //       <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalServicosAbertos" onclick="mostrarDetalhes('${encodeURIComponent(JSON.stringify(servico.detalhes))}')">Detalhes</button>
  //       </td>
  //       <td class="text-center">
  //       <button type="button" class="btn btn-success" onclick="abrirLinkWhatsApp()">Agendar</button>
  //       </td>
  //     `;
      
  //     tabelaServicos.appendChild(novaLinha);
  //     console.log(JSON.stringify(servico.detalhes))
  //   }

  // }
  const codigoEmpresa = localStorage.getItem('CodEmpresa');

  function preencherTabelaServicosAbertos() {
    const tabelaServicos = document.getElementById("tabela-servicos-abertos");
  
    tabelaServicos.innerHTML = "";
    
    fetch(`https://eai-api-complementar.onrender.com/agendamento/aberto/${codigoEmpresa}`)
      .then(response => response.json())
      .then(data => {
        for (let servico of data.response) {
          console.log(servico)
          const novaLinha = document.createElement("tr");
          novaLinha.innerHTML = `
            <td>${servico.cliente_nome}</td>
            <td>${new Date(servico.data).toLocaleDateString()}</td>
            <td>${servico.horario}</td>
            <td>${servico.funcionario_nome}</td>
            <td>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalServicosAbertos" onclick="mostrarDetalhes('${encodeURIComponent(JSON.stringify(servico))}')">Detalhes</button>
            </td>
            <td class="text-center">
              <button type="button" class="btn btn-success" onclick="abrirLinkWhatsApp()">Agendar</button>
            </td>
         `;
          tabelaServicos.appendChild(novaLinha);
          }
        })
      .catch(error => console.log(error));
  }


  function preencherTabelaServicosConcluidos() {
    const tabelaServicos = document.getElementById("tabela-servicos-concluido");
    
    for (let servico of servicosConcluidos) {
      const novaLinha = document.createElement("tr");
      novaLinha.innerHTML = `
        <td>${servico.nome}</td>
        <td>${servico.data}</td>
        <td>${servico.detalhes.hora}</td>
        <td>${servico.responsaveltecnico}</td>
        <td>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalServicosAbertos" onclick="mostrarDetalhes('${encodeURIComponent(JSON.stringify(servico.detalhes))}')">Detalhes</button>
        </td>
      `;
      
      tabelaServicos.appendChild(novaLinha);
      console.log(JSON.stringify(servico.detalhes))
    }

  }

  function preencherTabelaServicosCancelados() {
    const tabelaServicos = document.getElementById("tabela-servicos-cancelados");
    
    for (let servico of servicosCancelados) {
      const novaLinha = document.createElement("tr");
      novaLinha.innerHTML = `
        <td>${servico.nome}</td>
        <td>${servico.data}</td>
        <td>${servico.detalhes.hora}</td>
        <td>${servico.responsaveltecnico}</td>
        <td>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalServicosAbertos" onclick="mostrarDetalhes('${encodeURIComponent(JSON.stringify(servico.detalhes))}')">Detalhes</button>
        </td>
      `;
      
      tabelaServicos.appendChild(novaLinha);
      console.log(JSON.stringify(servico.detalhes))
    }

  }

  function mostrarDetalhes(servicoDetalhes) {
    const detalhes = JSON.parse(decodeURIComponent(servicoDetalhes));
    const valorNumerico = parseFloat(detalhes.valor);
    const modalCliente = document.querySelector("#modalServicosAbertos .modal-body .col-md-6:nth-child(1) li:nth-child(1) p");
    const modalServico = document.querySelector("#modalServicosAbertos .modal-body .col-md-6:nth-child(1) li:nth-child(2) p");
    const modalData = document.querySelector("#modalServicosAbertos .modal-body .col-md-6:nth-child(1) li:nth-child(3) p");
    const modalHora = document.querySelector("#modalServicosAbertos .modal-body .col-md-6:nth-child(1) li:nth-child(4) p");
    const modalLocal = document.querySelector("#modalServicosAbertos .modal-body .col-md-6:nth-child(1) li:nth-child(5) p");
    const modalEndereco = document.querySelector("#modalServicosAbertos .modal-body .col-md-6:nth-child(2) li:nth-child(1) p");
    const modalTelefone = document.querySelector("#modalServicosAbertos .modal-body .col-md-6:nth-child(2) li:nth-child(2) p");
    const modalArea = document.querySelector("#modalServicosAbertos .modal-body .col-md-6:nth-child(2) li:nth-child(3) p");
    const modalValorServico = document.querySelector("#modalServicosAbertos .modal-body .col-md-6:nth-child(2) li:nth-child(4) p");
    const modalValorReceber = document.querySelector("#modalServicosAbertos .modal-body .col-md-6:nth-child(2) li:nth-child(5) p");
  
    modalCliente.textContent = detalhes.cliente_nome;
    modalServico.textContent = detalhes.funcionario_nome;
    modalData.textContent = `${new Date(detalhes.data).toLocaleDateString()}`;
    modalHora.textContent = detalhes.horario;
    modalLocal.textContent = detalhes.bairro;
    modalEndereco.textContent = `${detalhes.logradouro} - Nº${detalhes.numero} - ${detalhes.bairro}`;
    modalTelefone.textContent = detalhes.telefone;
    modalArea.textContent = detalhes.area;
    modalValorServico.textContent = detalhes.valor;
    modalValorReceber.textContent = `${(valorNumerico * 0.7).toFixed(2)}`;
  }
  
  preencherTabelaServicosAbertos();
  preencherTabelaServicosConcluidos();
  preencherTabelaServicosCancelados();
  


//   function showTable(tableNumber) {
//     // Esconde todas as tabelas
//     document.getElementById("table1").style.display = "none";
//     document.getElementById("table2").style.display = "none";
//     document.getElementById("table3").style.display = "none";
  
//     // Exibe a tabela correspondente
//     document.getElementById(`table${tableNumber}`).style.display = "table";
//   }

  function showTable(tableNumber, button) {
    // Esconde todas as tabelas
    document.getElementById("table1").style.display = "none";
    document.getElementById("table2").style.display = "none";
    document.getElementById("table3").style.display = "none";
    
    // Exibe a tabela correspondente
    document.getElementById(`table${tableNumber}`).style.display = "table";
  
    // Remove a classe .active de todos os botões
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach((btn) => {
      btn.classList.remove("ativado");
    });
  
    // Adiciona a classe .ativado apenas ao botão clicado
    button.classList.add("ativado");
  }



  function abrirLinkWhatsApp() {
    // Substitua 'NUMERO_DO_TELEFONE' pelo número de telefone para o qual deseja enviar a mensagem
    var numeroTelefone = '5581991973695';
    
    // Crie o link do WhatsApp
    var linkWhatsApp = 'https://api.whatsapp.com/send?phone=' + encodeURIComponent(numeroTelefone);
    
    // Abra o link em uma nova janela
    window.open(linkWhatsApp, '_blank');
  }
  
  