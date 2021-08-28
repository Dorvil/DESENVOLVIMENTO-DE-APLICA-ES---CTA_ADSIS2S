// document.getElementById('botao').innerText = "Mudei o Valor"
// console.log(document.getElementsByClassName('fieldset'))
// console.log(document.getElementsByTagName('legend'))
// console.log(document.getElementsByName('inputPeso'))



function calcular() {
    
    if (validaCampos()) {
        let peso   = parseFloat(document.getElementById('peso').value)
        let altura = parseFloat(document.getElementById('altura').value)
        let resultadoImc = (peso / (altura * altura)) * 10000;    
        document.getElementById('resultado').innerText =  'Resultado: ' + resultadoImc.toFixed(1);
        classificaImc(resultadoImc); // chamada da função
    } else {
        document.getElementById('resultado').innerText =  'Valores incorretos';    
    }
    
}

function validaCampos() {
    let peso   = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    if (isNaN(peso) || isNaN(altura)) {
        return false;
    }
    return true;
}

function validaTamanhoInput() {
    setTimeout(() => {
        let campoInputPeso = document.getElementById('peso')
        if (campoInputPeso.value.length > 3 ) {
            document.getElementById('erroInputPeso').style.display = 'block'
        } else {
            // console.log(campoInputPeso.value.length);
            document.getElementById('erroInputPeso').style.display = 'none'   
        }        
    }, 100);
   
    
}

function classificaImc(resultadoImc) {
    let resultado = resultadoImc
    let img = document.getElementById("imgResultado")
    if (resultado <= 18.5) {
        img.src = "./imc_06.png";
    } else if (resultado > 18.5 &&  resultado < 24.9) {
        img.src = "./imc_05.png";
    } else if(resultado > 25 && resultado < 29.9){
        img.src = "./imc_04.png";
    } else if (resultado > 30 && resultado <= 34.9){
        img.src = "./imc_03.png"
    } else if (resultado > 35 && resultado <= 40){
        img.src = "./imc_02.png"
    } else {
        img.src = "./imc_01.png"
    }
}
