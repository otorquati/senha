/* Script JS - Jogo de Senha */

/* Definição de variáveis */
let pswd = document.querySelectorAll('.bola')
let numberClass = pswd.length
let resposta = document.querySelectorAll('.resposta')
let divResultado = document.querySelectorAll('.resultado')
let btnLimpar = document.querySelector('#btnLimpar')
let btnVerificar = document.querySelector('#btnVerificar')
let tentativas = document.querySelectorAll('.resposta')
const divSenhaOculta = document.querySelectorAll('.senha')
let numChances = document.querySelector('#chances')
let chances = 0
let corSenha = []
let cores = []

// Desabilita tentativa, Resultados e botão Verificar
function resetButtons() {
    btnLimpar.disabled = false;
    btnVerificar.disable = true;
return
}
/* Definição da Senha */
btnLimpar.addEventListener('click', function(){
    let cores = ["blue", "green", "magenta", "orange", "red", "yellow"]
// Limpa as classes da senha
    limpaTentativas(pswd, cores);
    limpaTentativas(tentativas, cores);
    resetButtons();

// Define as cores da Senha
for (let i=0; i<=3; i++){
    // Armazena o valor das cores
    let nCor=getRndInteger(0,cores.length-1)
    corSenha.push(cores[nCor])
    console.log("Cor ajustada:"+corSenha[nCor])
    cores.splice(nCor,1)
    if (i>0){
        for (let j=0; j<=corSenha.length-1;j++){
            if (i != j){
                if (corSenha[i] == corSenha[j]){
                    // Remove as cores repetidas
                    corSenha[i]=cores[getRndInteger(0,5)]
                    console.log("Cor trocada:"+corSenha[i])
                }
            }
        }
    }
    pswd[i].classList.add(corSenha[i])
    }
    // Oculta as bolas da senha gerada
    divSenhaOculta.forEach(div => div.style.opacity = 0)
    btnLimpar.disabled = true
    btnVerificar.disabled= false
    console.log(corSenha)
    chances=0
    return corSenha
})

/* Verificação das tentativa */

// Atribuir as cores a cada posição
function trocaCor(){
cores = ["blue", "green", "magenta", "orange", "red", "yellow"] 
let list = this.classList
list.length<3 ? j=0: j
//alert('A div #'+this.id+'foi selecionada')
if (j<1){
    let b = this.classList.contains(cores[5])
    if (b) {
        this.classList.remove(cores[5])
    } 
    this.classList.add(cores[j])
} else {
    this.classList.replace(cores[j-1],cores[j])
}
j<5 ? j++ : j=0
}

let j=0
let list = this.classList 

for(let i=0; i<tentativas.length; i++){
    tentativas[i].onclick = trocaCor
}

btnVerificar.addEventListener('click', function(){

    // Definir as variáveis
    cores = ["blue", "green", "magenta", "orange", "red", "yellow"] 
    let acertos = 0

    // Verificar se todas as posiçoes estào com cores definidas

    // Verificar as cores de cada posição
    for(let i=0; i<4; i++){
        let list = tentativas[i].classList
        let txt = list.value
        // console.log("Classlist:"+txt)
        let txtComp = txt.length
        // console.log("Length:",txtComp)
        let lastSpacePosition = txt.lastIndexOf(" ")+1
        // console.log("LastPosition",lastSpacePosition)
        corTty = txt.substring(lastSpacePosition)
        //        console.log(corTty)
        for(let j=i; j<4; j++){
            if(pswd[j].classList.contains(corTty) && (i==j)){
                // Cor e posição certa
                divResultado[i].innerHTML="✅"
                acertos++
                break
            } else if (pswd[j].classList.contains(corTty)){
                // Cor correta posição errada
                divResultado[i].innerHTML="☑️"
                break
            } else {
                // Cor e posição incorreta
                divResultado[i].innerHTML="❌"
                acertos = 0
            }
        }
    }
    
    // Verifica se acertou a senha
    if (acertos < 4) {
        chances++
    } else {
        document.getElementById('resultOut').innerHTML=`Você venceu em </br>${chances} chances!`
        divSenhaOculta.forEach(div => div.style.opacity = 1)
        btnLimpar.disabled = false
        btnVerificar.disable = true
        return
    }
    if (chances <=10){
        numChances.innerHTML = `<p>Tentativa <br/> n° ${chances}</p>`
    } else {
        numChances.innerHTML="<p>== G A M E ==<br/>-- O V E R --</p>"
        divSenhaOculta.forEach(div => div.style.opacity = 1)
    }
    return
})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function limpaTentativas(bolattv, cores){
    numberClass=bolattv.length
    for(let i = 0; i<numberClass; i++){
        for(let h=0; h<6; h++){
            if (bolattv[i].classList.contains(cores[h])){
                bolattv[i].classList.remove(cores[h])
            }
        }
    }
}

/* Definição do resultado */
