const form = document.querySelector("form");
const nameCliente = document.querySelector("#name");
const emailCliente = document.querySelector("#email");
const cpfCliente = document.querySelector("#cpf");
const cepCliente = document.querySelector("#cep");
const addressCliente = document.querySelector("#address");
const numHomeCliente = document.querySelector("#numResi");
const estadoCliente = document.querySelector("#estado");
const cidadeCliente = document.querySelector("#cidade");
const bairroCliente = document.querySelector("#bairro");
const selectPagamento = document.querySelector("#pagamento");
const valor = document.querySelector("#valorPagar");

const erroName = document.querySelector("#erro-name");
const erroEmail = document.querySelector("#erro-email");
const erroCpf = document.querySelector("#erro-cpf");
const erroCep = document.querySelector("#erro-cep");
const erroAddress = document.querySelector("#erro-address");
const erroResidencia = document.querySelector("#erro-residencia");
const erroEstado = document.querySelector("#erro-estado");
const erroCidade = document.querySelector("#erro-cidade");
const erroBairro = document.querySelector("#erro-bairro");
const erroSelect = document.querySelector("#erro-select");
const erroValor = document.querySelector("#erro-valor");

const resultProduct = document.getElementById("produtos");
const buttonProduct = document.getElementById("add-produto");
let contProdutos = 1;
const produtos = [];

const checkboxTelaComTouch = document.getElementById("checkboxTelaComTouch");
const checkboxTelaSemTouch = document.getElementById("checkboxTelaSemTouch");
const checkboxTampa = document.getElementById("checkboxTampa");
const checkboxBotao = document.getElementById("checkboxBotao");
const checkboxBateria = document.getElementById("checkboxBateria");
const checkboxAltoFalante = document.getElementById("checkboxAltoFalante");
const checkboxConector = document.getElementById("checkboxConector");
const checkboxPlaca = document.getElementById("checkboxPlaca");
const checkboxNaoLiga = document.getElementById("checkboxNaoLiga");
const checkboxOutros = document.getElementById("checkboxOutros");
const obserReparo = document.getElementById("obserReparo");

const loandingOverlay = document.getElementById("loadingOverlay");
function showLoandingOverlay(){
    loandingOverlay.classList.remove("hidden")
}

const closeModal = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const modalMessage = document.querySelector("#modal-message");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};
const showModal = (message) => {
    modalMessage.textContent = message;
    toggleModal();

};
closeModal.addEventListener("click", () => {
    toggleModal();
    showLoandingOverlay();
    
    setTimeout(() => {
        window.open("dados.html", "_blank");
        
        form.submit();
    }, 900);
});

const addProduct = () => {
    const idProduto = `${contProdutos}`;

    const produto = 
    `
        <div id="${idProduto}" class="produto border-b-1 border-zinc-100/50 space-y-5 pb-5 w-full">
            <div class="flex flex-col">
                <span class="flex flex-col">
                    <label for="produto">Produto:</label>
                    <input type="text" class="name-product bg-zinc-100 rounded-[6px] pt-1 pb-1 pl-2">
                </span>
                <p id="erro-produto"></p>
            </div>

            <div class="md:flex max-md:flex-col max-md:space-y-4 gap-5">
                <div class="flex flex-col">
                    <span class="flex flex-col">
                        <label for="quantidadeProd">Quantidade:</label>
                        <input type="number" class="qtd-product w-30 bg-zinc-100 rounded-[6px] pt-1 pb-1 pl-2">
                    </span>
                    <p id="erro-quantidade"></p>
                </div>
                <div class="flex flex-col">
                    <span class="flex flex-col">
                        <label for="valorProd">Valor:</label>
                        <input type="number" class="valor-product w-30 bg-zinc-100 rounded-[6px] pt-1 pb-1 pl-2">
                    </span>
                    <p id="erro-valor"></p>
                </div>
            </div>

            <button onClick="removeProduct(${idProduto})"  type="button" class="pt-2 pb-2 pl-3 pr-3 rounded-[10px] bg-zinc-700 hover:bg-zinc-800 ease-in-out text-white mr-5 flex items-center gap-2 cursor-pointer transition duration-[0.3s]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
            </button>
        </div>
    `;

    resultProduct.insertAdjacentHTML("beforeend", produto);

    contProdutos++;
};

const removeProduct = (id) => {
    const element = document.getElementById(id);
    
    if(element){
        element.remove();
    }
};

buttonProduct.addEventListener("click", addProduct);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verificando dados e salvando as info do cliente
    // if(nameCliente.value.trim() === ""){
    //     erroName.textContent = "Preencha o nome corretamente.";
    //     return;
    // }
    // else{
    //     erroName.textContent = "";
    // }

    // if(emailCliente.value.trim() === ""){
    //     erroEmail.textContent = "Preencha o email corretamente.";
    //     return;
    // }
    // else{
    //     erroEmail.textContent = "";
    // }

    // if(cpfCliente.value.trim() === ""){
    //     erroCpf.textContent = "Preencha o CPF corretamente.";
    //     return;
    // }
    // else{
    //     erroCpf.textContent = "";
    // }

    // if(cepCliente.value.trim() === ""){
    //     erroCep.textContent = "Preencha o CEP corretamente.";
    //     return;
    // }
    // else{
    //     erroCep.textContent = "";
    // }

    // if(addressCliente.value.trim() === ""){
    //     erroAddress.textContent = "Preencha o endereço corretamente.";
    //     return;
    // }
    // else{
    //     erroAddress.textContent = "";
    // }

    // if(numHomeCliente.value.trim() === ""){
    //     erroResidencia.textContent = "Preencha o número da residencia corretamente.";
    //     return;
    // }
    // else{
    //     erroResidencia.textContent = "";
    // }

    // if(estadoCliente.value.trim() === ""){
    //     erroEstado.textContent = "Preencha o número da residencia corretamente.";
    //     return;
    // }
    // else{
    //     erroEstado.textContent = "";
    // }

    // if(selectPagamento.value === "") {
    //     erroSelect.textContent = "Selecione uma forma de pagamaneto";
    //     return;
    // }
    // else{
    //     erroSelect.textContent = "";
    // }

    // if(valor.value.trim() === ""){
    //     erroValor.textContent = "Preencha o valor corretamente.";
    //     return;
    // }
    // else{
    //     erroValor.textContent = "";
    // }

    localStorage.setItem("nameCliente", nameCliente.value);
    localStorage.setItem("emailCliente", emailCliente.value);
    localStorage.setItem("cpfCliente", cpfCliente.value);
    localStorage.setItem("cepCliente", cepCliente.value);
    localStorage.setItem("addressCliente", addressCliente.value);
    localStorage.setItem("numHomeCliente", numHomeCliente.value);
    localStorage.setItem("estadoCliente", estadoCliente.value);
    localStorage.setItem("cidadeCliente", cidadeCliente.value);
    localStorage.setItem("bairroCliente", bairroCliente.value);

    //Salvando checkbox reparo
    localStorage.setItem("checkboxTelaComTouch", checkboxTelaComTouch.value);


    //Salvar produtos
    const selectProdutos = document.querySelectorAll(".produto");
    const listProdutos = [];

    selectProdutos.forEach((div) => {
        const nome = div.querySelector(".name-product").value;
        const quantidade = div.querySelector(".qtd-product").value;
        const valor = div.querySelector(".valor-product").value;

        listProdutos.push({nome, quantidade, valor});
    });
    localStorage.setItem("produtos", JSON.stringify(listProdutos));

    //Salvando forma de pagamaneto
    const formaSelecionada = selectPagamento.value;
    // const valorPagar = valor.value;
    // localStorage.setItem("valorPagar", valorPagar);
    localStorage.setItem("formaPagamento", formaSelecionada);

    //Salvando as observações


    //COLOCAR MODAL 
    showModal("Dados salvos!");
    // alert("Dados salvos!");
});