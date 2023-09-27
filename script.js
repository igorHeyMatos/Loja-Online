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
    preco.innerHTML = "10.00";
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

function carrinhoClose(){
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '-100%';
}