let bordaSupEsq = document.querySelector('#border-radius-top')
let bordaSupDir = document.querySelector('#border-radius-right')
let bordaInfDir = document.querySelector('#border-radius-bottom')
let bordaInfEsq = document.querySelector('#border-radius-left')
const altBtn = document.querySelector('#alterarBtn')
const copyBtn= document.querySelector('#copy')
const container = document.querySelector('#container')
const textArea = document.querySelector('#textArea')
const alert = document.querySelector('div#alert')

altBtn.addEventListener('click', alterarBordar)
copyBtn.addEventListener('click', copyToClipBoard)

function alterarBordar(e){
    //Evita recarregamento e limpa o campo de alerta
    e.preventDefault();
    alert.innerHTML = " "
    textArea.innerHTML = " "

    //Transforma os valores digitados em numeros
    let valueSupEsq = Number(bordaSupEsq.value)
    let valueSupDir = Number(bordaSupDir.value)
    let valueInfDir = Number(bordaInfDir.value)
    let valueInfEsq = Number(bordaInfEsq.value)

    //Verifica se os valores são números
    if (!isNaN(valueSupDir) && !isNaN(valueSupEsq) && !isNaN(valueInfDir) && !isNaN(valueInfEsq)) {
        container.style.borderRadius = `${valueSupEsq}px ${valueSupDir}px ${valueInfDir}px ${valueInfEsq}px`
        textArea.innerHTML = `border-radius: ${valueSupEsq}px ${valueSupDir}px ${valueInfDir}px ${valueInfEsq}px;`
    } else {
        alert.innerHTML = "Digite um valor númerico"
    }
}

function copyToClipBoard(){
    navigator.clipboard.writeText(textArea.value).then(function(){
        window.alert("Texto Copiado")
    })
    .catch(function(error){
        console.error('Erro ao copiar', error)
    })
    console.log(textArea.value)
}


