let fones = document.getElementById("fones");
let celular = document.getElementById("celulares");
let luvas = document.getElementById("luvas");
let smartwatches = document.getElementById("smartwatches");
let balanca = document.getElementById("balanca");
let tenisF = document.getElementById("tenisF");
let tenisM = document.getElementById("tenisM");
let camisas = document.getElementById("camisas");
let gabineteB = document.getElementById("gabineteB");
let gabineteR = document.getElementById("gabineteR");
let gabineteC = document.getElementById("gabineteC");
let headFone = document.getElementById("headFone");
let vet = [];
let valorFinal = document.getElementById("valorFinal");
let btnFinalizar = document.getElementById("btn-finalizar");

function adicionar(item,preco){
    let tabela = document.getElementById("tbody");
    let linha = document.createElement('tr');
    let inserir = document.createElement('td');
    let valor = document.createElement('td');
    let acao = document.createElement('td');
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '0';
    let soma = 0;
    tabela.appendChild(linha);
    linha.appendChild(inserir);
    linha.appendChild(valor);
    linha.appendChild(acao)
    inserir.innerHTML = `${item}`
    valor.innerHTML = `${preco}`
    acao.innerHTML = `<i id="btnExcluir" class="fa-regular fa-trash-can"></i>`
    acao.addEventListener('click', () => {
        soma -= preco;
        linha.removeChild(inserir);
        linha.removeChild(valor);
        linha.removeChild(acao);
        valorFinal.innerHTML = `R$ ${soma}`;
    })
    vet.push(Number(preco));
    for(let i = 0; i < vet.length; i++){
        soma += vet[i];
    }
    valorFinal.innerHTML = `R$ ${soma}`;
}

fones.addEventListener('click', () => {
    item = "Fones de ouvido";
    preco = 120.00;
    adicionar(item,preco);
})

celular.addEventListener('click', () => {
    item = "Celular";
    preco = 800.00;
    adicionar(item,preco);
})

luvas.addEventListener('click', () => {
    item = "Luvas para Academia";
    preco = 7.00;
    adicionar(item,preco);
})

smartwatches.addEventListener('click', () => {
    item = "SmartWatches";
    preco = 120.00;
    adicionar(item,preco);
})

balanca.addEventListener('click', () => {
    item = "Balança de comida";
    preco = 50.00;
    adicionar(item,preco);
})

tenisF.addEventListener('click', () => {
    item = "Tênis Esportivo (F)";
    preco = 120.00;
    adicionar(item,preco);
})

tenisM.addEventListener('click', () => {
    item = "Tênis Esportivo (M)";
    preco = 130.00;
    adicionar(item,preco);
})

camisas.addEventListener('click', () => {
    item = "Camisas";
    preco = 50.00;
    adicionar(item,preco);
})

gabineteB.addEventListener('click', () => {
    item = "Gabinete Gamer";
    preco = 70.00;
    adicionar(item,preco);
})

gabineteR.addEventListener('click', () => {
    item = "Gabinete Gamer Rosa";
    preco = 70.00;
    adicionar(item,preco);
})

gabineteC.addEventListener('click', () => {
    item = "Gabinete Gamer Colorido";
    preco = 70.00;
    adicionar(item,preco);
})

headFone.addEventListener('click', () => {
    item = "HeadFone";
    preco = 80.00;
    adicionar(item,preco);
})

function carrinhoClose(){
    let carrinho = document.getElementById("carrinho");
    carrinho.style.right = '-100%';
}

btnFinalizar.addEventListener('click', () => {
    alert("Compra concluida com sucesso!");
})

function BTNFinalizar(){
    alert("Compra concluida com sucesso!");
}