function adicionarFone(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = "Fones de ouvido";
    let preco = "120.00";
    let inserir = document.createElement('td');
    let valor = document.createElement('td');
    let acao = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';
    
    tabela.appendChild(linha);
    linha.appendChild(inserir);
    linha.appendChild(valor);
    linha.appendChild(acao);
    inserir.innerHTML = `${item}`;
    valor.innerHTML = `${preco}`;
    acao.innerHTML = `<i id="btnExcluir" class="fa-regular fa-trash-can"></i>`

    acao.addEventListener('click', () => {
        linha.removeChild(inserir);
        linha.removeChild(valor);
        linha.removeChild(acao);
    })
}

function adicionarCelular(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = "Celular";
    let preco = "800.00";
    let inserir = document.createElement('td');
    let valor = document.createElement('td');
    let acao = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    tabela.appendChild(linha);
    linha.appendChild(inserir);
    linha.appendChild(valor);
    linha.appendChild(acao);
    inserir.innerHTML = `${item}`;
    valor.innerHTML = `${preco}`;
    acao.innerHTML = `<i id="btnExcluir" class="fa-regular fa-trash-can"></i>`

    acao.addEventListener('click', () => {
        linha.removeChild(inserir);
        linha.removeChild(valor);
        linha.removeChild(acao);
    })
}

function adicionarLuvas(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = "Luvas para Academia";
    let preco = "7.00";
    let inserir = document.createElement('td');
    let valor = document.createElement('td');
    let acao = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    tabela.appendChild(linha);
    linha.appendChild(inserir);
    linha.appendChild(valor);
    linha.appendChild(acao);
    inserir.innerHTML = `${item}`;
    valor.innerHTML = `${preco}`;
    acao.innerHTML = `<i id="btnExcluir" class="fa-regular fa-trash-can"></i>`;

    acao.addEventListener('click', () => {
        linha.removeChild(inserir);
        linha.removeChild(valor);
        linha.removeChild(acao);
    })
}

function adicionarSmartWatches(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = "SmartWatches";
    let preco = "120.00";
    let inserir = document.createElement('td');
    let valor = document.createElement('td');
    let acao = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    tabela.appendChild(linha);
    linha.appendChild(inserir);
    linha.appendChild(valor);
    linha.appendChild(acao);
    inserir.innerHTML = `${item}`;
    valor.innerHTML = `${preco}`;
    acao.innerHTML = `<i id="btnExcluir" class="fa-regular fa-trash-can"></i>`;

    acao.addEventListener('click', () => {
        linha.removeChild(inserir);
        linha.removeChild(valor);
        linha.removeChild(acao);
    })
}

function adicionarBalanca(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = "Balança de comida";
    let preco = "50.00";
    let inserir = document.createElement('td');
    let valor = document.createElement('td');
    let acao = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';
    
    tabela.appendChild(linha);
    linha.appendChild(inserir);
    linha.appendChild(valor);
    linha.appendChild(acao);
    inserir.innerHTML = `${item}`;
    valor.innerHTML = `${preco}`;
    acao.innerHTML = `<i id="btnExcluir" class="fa-regular fa-trash-can"></i>`;

    acao.addEventListener('click', () => {
        linha.removeChild(inserir);
        linha.removeChild(valor);
        linha.removeChild(acao);
    })
}

function adicionarTenis1(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = "Tênis Esportivo (F)";
    let preco = "120.00";
    let inserir = document.createElement('td');
    let valor = document.createElement('td');
    let acao = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    tabela.appendChild(linha);
    linha.appendChild(inserir);
    linha.appendChild(valor);
    linha.appendChild(acao);
    inserir.innerHTML = `${item}`;
    valor.innerHTML = `${preco}`;
    acao.innerHTML = `<i id="btnExcluir" class="fa-regular fa-trash-can"></i>`;

    acao.addEventListener('click', () => {
        linha.removeChild(inserir);
        linha.removeChild(valor);
        linha.removeChild(acao);
    })
}

function adicionarTenis2(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = "Tênis Esportivo (M)";
    let preco = "130.00";
    let inserir = document.createElement('td');
    let valor = document.createElement('td');
    let acao = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    tabela.appendChild(linha);
    linha.appendChild(inserir);
    linha.appendChild(valor);
    linha.appendChild(acao);
    inserir.innerHTML = `${item}`;
    valor.innerHTML = `${preco}`;
    acao.innerHTML = `<i id="btnExcluir" class="fa-regular fa-trash-can"></i>`;

    acao.addEventListener('click', () => {
        linha.removeChild(inserir);
        linha.removeChild(valor);
        linha.removeChild(acao);
    })
}

function adicionarCamisa(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = "Camisas";
    let preco = "50.00";
    let inserir = document.createElement('td');
    let valor = document.createElement('td');
    let acao = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    tabela.appendChild(linha);
    linha.appendChild(inserir);
    linha.appendChild(valor);
    linha.appendChild(acao);
    inserir.innerHTML = `${item}`;
    valor.innerHTML = `${preco}`;
    acao.innerHTML = `<i id="btnExcluir" class="fa-regular fa-trash-can"></i>`;

    acao.addEventListener('click', () => {
        linha.removeChild(inserir);
        linha.removeChild(valor);
        linha.removeChild(acao);
    })
}

function adicionarGabineteGamer(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = "Gabinete Gamer";
    let preco = "70.00";
    let inserir = document.createElement('td');
    let valor = document.createElement('td');
    let acao = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    tabela.appendChild(linha);
    linha.appendChild(inserir);
    linha.appendChild(valor);
    linha.appendChild(acao);
    inserir.innerHTML = `${item}`;
    valor.innerHTML = `${preco}`;
    acao.innerHTML = `<i id="btnExcluir" class="fa-regular fa-trash-can"></i>`;

    acao.addEventListener('click', () => {
        linha.removeChild(inserir);
        linha.removeChild(valor);
        linha.removeChild(acao);
    })
}

function adicionarGabineteRosa(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = "Gabinete Gamer Rosa";
    let preco = "70.00";
    let inserir = document.createElement('td');
    let valor = document.createElement('td');
    let acao = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    tabela.appendChild(linha);
    linha.appendChild(inserir);
    linha.appendChild(valor);
    linha.appendChild(acao);
    inserir.innerHTML = `${item}`;
    valor.innerHTML = `${preco}`;
    acao.innerHTML = `<i id="btnExcluir" class="fa-regular fa-trash-can"></i>`;

    acao.addEventListener('click', () => {
        linha.removeChild(inserir);
        linha.removeChild(valor);
        linha.removeChild(acao);
    })
}

function adicionarGabineteGamerC(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = "Gabinete Gamer Colorido";
    let preco = "70.00";
    let inserir = document.createElement('td');
    let valor = document.createElement('td');
    let acao = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    tabela.appendChild(linha);
    linha.appendChild(inserir);
    linha.appendChild(valor);
    linha.appendChild(acao);
    inserir.innerHTML = `${item}`;
    valor.innerHTML = `${preco}`;
    acao.innerHTML = `<i id="btnExcluir" class="fa-regular fa-trash-can"></i>`;

    acao.addEventListener('click', () => {
        linha.removeChild(inserir);
        linha.removeChild(valor);
        linha.removeChild(acao);
    })
}

function adicionarHeadFone(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = "HeadFone";
    let preco = "80.00";
    let inserir = document.createElement('td');
    let valor = document.createElement('td');
    let acao = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    tabela.appendChild(linha);
    linha.appendChild(inserir);
    linha.appendChild(valor);
    linha.appendChild(acao);
    inserir.innerHTML = `${item}`;
    valor.innerHTML = `${preco}`;
    acao.innerHTML = `<i id="btnExcluir" class="fa-regular fa-trash-can"></i>`;

    acao.addEventListener('click', () => {
        linha.removeChild(inserir);
        linha.removeChild(valor);
        linha.removeChild(acao);
    })
}

function carrinhoClose(){
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '-100%';
}