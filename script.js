//Carne - 400 gr por pessoa + de 6 horas - 650 gr
//Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
//Refrigerante/água - 1000 ml por pessoa + 6 horas 1500 ml

//Crianças valem por 5,0

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let = qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas);
    let = qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let = qtdTotalBebidas= bebidasPP(duracao) * adultos + (carnePP(duracao) /2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/473)} Latões de Cerveja</p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas/2000} Pet's 2l de Bebidas</p>`
}

function carnePP(duracao) {
    if (duracao>=6){
        return 650;
    }
    else{
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao>=6){
        return 1200;
    }
    else{
        return 2000;
    }
}

function bebidasPP(duracao) {
    if (duracao>=6){
        return 1500;
    }
    else{
        return 1000;
    }
}
