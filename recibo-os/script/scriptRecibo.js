const exibirInfo = document.getElementById("exibir-info");
const infoCliente = document.getElementById("info-cliente");
const infoProduto = document.getElementById("info-produto");
const infoPagamento = document.getElementById("info-pagamento");
const infoObservacao = document.getElementById("info-obserProduto");
const reparo = document.getElementById("reparos");
const textObserReparo = document.getElementById("info-obserReparo");

const loandingOverlay = document.getElementById("loadingOverlay");
function showLoandingOverlay(){
    loandingOverlay.classList.remove("hidden");
}

window.onload = function() {
    //Resgatando Informações do cliente
    let nameCliente = localStorage.getItem("nameCliente");
    let emailCliente = localStorage.getItem("emailCliente");
    let cpfCliente = localStorage.getItem("cpfCliente");
    let cepCliente = localStorage.getItem("cepCliente");
    let addressCliente = localStorage.getItem("addressCliente");
    let numHomeCliente = localStorage.getItem("numHomeCliente");
    let estadoCliente = localStorage.getItem("estadoCliente");
    let cidadeCliente = localStorage.getItem("cidadeCliente");
    let bairroCliente = localStorage.getItem("bairroCliente");

    //Resgatando os produtos salvos
    const produtosSalvos = JSON.parse(localStorage.getItem("produtos"));

    //Resgatando os dados de pagamento
    let formaPagamento = localStorage.getItem("formaPagamento");

    let assCliente = document.getElementById("assCliente");
    
    infoCliente.innerHTML = `
        <div class="border-b-[1.2px] border-zinc-900 space-y-1 pt-1 pl-1 pr-1 pb-1 mb-1">
            <div class="grid grid-cols-2 w-full">
                <span class="">
                    <p class="border-b-1 pl-2">Nome:</p>
                    <p class="border-b-1 pl-2">Email:</p>
                    <p class=" pl-2">CPF:</p>
                </span>
                <span>
                    <p class="border-b-1">${nameCliente}</p>
                    <p class="border-b-1">${emailCliente}</p>
                    <p class="">${cpfCliente}</p>
                </span>
            </div>
        </div>
        <div class="space-y-1  pl-1 pr-1">
            <div class="grid grid-cols-2 w-full">
                <span class="">
                    <p class="border-b-1 pl-2">CEP:</p>
                    <p class="border-b-1 pl-2">Endereço:</p>
                    <p class="border-b-1 pl-2">Número da residencia:</p>
                    <p class="border-b-1 pl-2">Estado:</p>
                    <p class="border-b-1 pl-2">Cidade:</p>
                    <p class=" pl-2">Bairro:</p>
                </span>
                <span>
                    <p class="border-b-1">${cepCliente}</p>
                    <p class="border-b-1">${addressCliente}</p>
                    <p class="border-b-1">${numHomeCliente}</p>
                    <p class="border-b-1">${estadoCliente}</p>
                    <p class="border-b-1">${cidadeCliente}</p>
                    <p class="">${bairroCliente}</p>
                </span>
            </div>
        </div>
    `;
    
    //Pegando a quantidade de produto e pegando o valor por 1 unidade
    const qtd = produtosSalvos.map(produto => produto.quantidade);
    const valores = produtosSalvos.map(produto => produto.valor);
    console.log(qtd);
    console.log(valores);

    //Multiplicando a quantidade pelo valor de uma unidade
    const multiQtdValor = qtd.map((qtdProduto, index) => {
        // qtdProduto: qtdProduto,
        // valorA: valores[index],
        return 1 * valores[index];
    });
    console.log(multiQtdValor)

   //Explicando a logica:
    //1 produto por unidade é 50 reais
        //Então se for 2 produto, o valor final tem que ser 100 reais
        //Com isso a função multiQtdValor é responsavel por pegar a quantidade e multiplicar pelo valor de uma unidade

    //Soma vai pegar os valores já multiplicado e somar tudo para ser o pagamento final 
    const valorFinalPagar = multiQtdValor.reduce((acumulador, valorAtual) => {
        //Number() usado para converter os valores que são salvos como string
        return acumulador + Number(valorAtual)
    }, 0);

    if(produtosSalvos && produtosSalvos.length > 0){
        produtosSalvos.forEach((produto, index) => {
            infoProduto.innerHTML += 
            `
                <p>${produto.nome}</p>
                <p>${produto.valor}</p>
            `;
        });    
    }
    else{
        infoProduto.textContent = "Nenhum produto salvo."
    }
    
    infoPagamento.innerHTML = `
        <div class="grid grid-cols-2 pl-2">
            <p class="">Forma de pagamento: ${formaPagamento}</p>
            <p class="">Valor total: R$${valorFinalPagar}</p>
        </div>
    `;

    const checkboxesMarcado = JSON.parse(localStorage.getItem("checkboxesMarcado"));

    if(checkboxesMarcado.length > 0){
        checkboxesMarcado.forEach(checkbox => {
            reparo.innerHTML += 
            `
                <p class="border-b-1 ">${checkbox}</p>
            `;
            console.log(checkbox);
        });
    }
    else{
        reparo.innerHTML = 
        `
            <p>Nenhum reparo selecionado.</p>
        `;
        console.log("Erro")
    }

    let obserReparo = localStorage.getItem("obserReparo");
    if(obserReparo !== ""){
        textObserReparo.innerHTML = 
        `
            <p>${obserReparo || ""}</p>
        `;
        console.log(obserReparo);
    }

    assCliente.textContent = `Assinatura do ${nameCliente}`;

    showLoandingOverlay();
    setTimeout(() => {
        loandingOverlay.classList.add("hidden");

        window.print();
    }, 900);
}

