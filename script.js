function adicionarFone(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0'
    
    let item = "Fones de ouvido";
    let preco = document.createElement('td');

    item = document.createElement('td');
    linha.appendChild(item)
    linha.appendChild(preco)
    item.innerText = "Fones de ouvido"
    preco.innerHTML = "12.00"
    tabela.appendChild(item);
    tabela.appendChild(preco)
    tabela.appendChild(linha);
    tabela.appendChild(linha);
}

function adicionarCelular(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let idItem = "Celular"
    let preco = document.createElement('td')
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    let item = document.createElement('td');
    linha.appendChild(item);
    linha.appendChild(preco)
    item.innerHTML = `${idItem}`;
    preco.innerHTML = "800.00";
    tabela.appendChild(item);
    tabela.appendChild(preco);
    tabela.appendChild(linha);
    tabela.appendChild(linha);
}

function adicionarLuvas(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let idItem = "Luvas para Academia";
    let preco = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    let item = document.createElement('td');
    linha.appendChild(item);
    linha.appendChild(preco)
    item.innerHTML = `${idItem}`;
    preco.innerHTML = "7.00";
    tabela.appendChild(item);
    tabela.appendChild(preco);
    tabela.appendChild(linha);
    tabela.appendChild(linha);
}

function adicionarSmartWatches(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = document.createElement('td');
    let preco = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    linha.appendChild(item);
    linha.appendChild(preco);
    item.innerHTML = "SmartWatches";
    preco.innerHTML = "120.00";
    tabela.appendChild(item);
    tabela.appendChild(preco);
    tabela.appendChild(linha);
    tabela.appendChild(linha);
}

function adicionarBalanca(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = document.createElement('td');
    let preco = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';
    
    tabela.appendChild(linha);
    tabela.appendChild(linha);
    item.innerHTML = "Balança";
    preco.innerHTML = "50.00";
    linha.appendChild(item);
    linha.appendChild(preco);
}

function adicionarTenis1(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = document.createElement('td');
    let preco = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    tabela.appendChild(linha);
    tabela.appendChild(linha);
    item.innerHTML = "Tênis Esportivo (F)";
    preco.innerHTML = "120.00";
    linha.appendChild(item);
    linha.appendChild(preco);
}

function adicionarTenis2(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = document.createElement('td');
    let preco = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    tabela.appendChild(linha);
    tabela.appendChild(linha);
    item.innerHTML = "Tênis Esportivo (M)";
    preco.innerHTML = "130.00";
    linha.appendChild(item);
    linha.appendChild(preco);
}

function adicionarCamisa(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = document.createElement('td');
    let preco = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    tabela.appendChild(linha);
    tabela.appendChild(linha);
    item.innerHTML = "Camisas";
    preco.innerHTML = "50.00";
    linha.appendChild(item);
    linha.appendChild(preco);
}

function adicionarGabineteGamer(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = document.createElement('td');
    let preco = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    tabela.appendChild(linha);
    tabela.appendChild(linha);
    item.innerHTML = "Gabinete Gamer";
    preco.innerHTML = "70.00";
    linha.appendChild(item);
    linha.appendChild(preco);
}

function adicionarGabineteRosa(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = document.createElement('td');
    let preco = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    tabela.appendChild(linha);
    tabela.appendChild(linha);
    item.innerHTML = "Gabinete Gamer Rosa";
    preco.innerHTML = "70.00";
    linha.appendChild(item);
    linha.appendChild(preco);
}

function adicionarGabineteGamerC(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = document.createElement('td');
    let preco = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    tabela.appendChild(linha);
    tabela.appendChild(linha);
    item.innerHTML = "Gabinete Gamer Colorido";
    preco.innerHTML = "70.00";
    linha.appendChild(item);
    linha.appendChild(preco);
}

function adicionarHeadFone(){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let item = document.createElement('td');
    let preco = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';

    tabela.appendChild(linha);
    tabela.appendChild(linha);
    item.innerHTML = "HeadFone";
    preco.innerHTML = "80.00";
    linha.appendChild(item);
    linha.appendChild(preco);
}

function carrinhoClose(){
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '-100%';
}