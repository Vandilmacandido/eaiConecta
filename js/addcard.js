function addCard() {
    
    <section class="card shop col s12 m12 l3">
        <div class="icon">
            <img src="image/funcionarios/2.png" alt="">
        </div>
        <h3>Vandilma</h3>
        <span>
            <li>
                Data treinamento - 1/1/1 <br>
            </li>
            <li >
                Qual robo : Contagem Inteligente <br>
            </li>
            <li>
                Tipo Func: CLT <br>
            </li>
        </span>
        <button onclick="window.location.href = '#'">Liberar para Serviço</button><br>
        <button onclick="window.location.href = '#'">Pagina da Vandilma</button><br>
        <button id="excluir" onclick="window.location.href = '#'">Excluir Funcionario</button>
        <div id="localizacao"><br>
        
        <button type="submit" id="enviar" onclick="enviar()">Localização da Vandilma</button>
        <h2 id="nome1-log">Localização do Vandilma é: </h2>
        <h2 id="nome-log"></h2>
        <div id="map"></div>

        </div>
    </section>
}

