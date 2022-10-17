const comida = document.getElementsByName('comida');
const bebida = document.getElementsByName('bebida');
const sobremesa = document.getElementsByName('sobremesa');

const confirmar = document.querySelector(".bottom h2");

let comidaCheck = false;
let bebidaCheck = false;
let sobremesaCheck = false;

let nomeComida = "";
let precoComida = 0;
let nomeBebida = "";
let precoBebida = 0;
let nomeSobremesa = "";
let precoSobremesa = 0;

function SelectComida(){
    comidaCheck = true;
    if(comidaCheck === true && bebidaCheck == true && sobremesaCheck === true){
        document.getElementById("botaoId").classList.add("verde");
        document.getElementById('botaoId').disabled = false;
        confirmar.innerHTML = "Fechar Pedido!";
    }
}
function SelectBebida(){
    bebidaCheck = true;
    if(comidaCheck === true && bebidaCheck == true && sobremesaCheck === true){
        document.getElementById("botaoId").classList.add("verde");
        document.getElementById('botaoId').disabled = false;
        confirmar.innerHTML = "Fechar Pedido!";
    }
}
function SelectSobremesa(){
    sobremesaCheck = true;
    if(comidaCheck === true && bebidaCheck == true && sobremesaCheck === true){
        document.getElementById("botaoId").classList.add("verde");
        document.getElementById('botaoId').disabled = false;
        confirmar.innerHTML = "Fechar Pedido!";
    }
}

function enviar(){
    for (let i = 0; i != comida.length; i++) {
        if(comida[i].checked){
            nomeComida = comida[i].id;
            precoComida = Number(comida[i].value);
        }
    }

    for (let i = 0; i != bebida.length; i++) {
        if(bebida[i].checked){
            nomeBebida = bebida[i].id;
            precoBebida = Number(bebida[i].value);
        }
    }
    for (let i = 0; i != sobremesa.length; i++) {
        if(sobremesa[i].checked){
            nomeSobremesa = sobremesa[i].id;
            precoSobremesa = Number(sobremesa[i].value);
        }
    }

    let cliente = prompt("Digite seu nome: ");
    let endereco = prompt("Endereço: ");

    let total = precoBebida + precoComida + precoSobremesa;

    let mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${nomeComida}
    - Bebida: ${nomeBebida}
    - Sobremesa: ${nomeSobremesa}
    Total: R$ ${total.toFixed(2)}

    Nome: ${cliente}
    Endereço: ${endereco}`

    let mensagemEnviar = encodeURIComponent(mensagem);

    window.open("https://wa.me/+5515991974762?text=" + mensagemEnviar, '_blank')

}
