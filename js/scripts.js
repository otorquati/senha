/* Script JS - Jogo de Senha */

/* Definição de variáveis */
let pswd = document.querySelectorAll('.senha')
let resposta = document.querySelectorAll('.resposta')
let btnLimpar = document.querySelector('#btnLimpar')
let btnVerificar = document.querySelector('#btnVerificar')
let tentativas = document.querySelectorAll('#tentado')
let chances = 10
/* Definição da Senha */
btnLimpar.addEventListener('click', function(){
    let corSenha = []
    let corSenhasr = []
    let cores = ["blue", "green", "magenta", "orange", "red", "yellow"]
    let numberClass = pswd.length
    // Limpa as classes da senha
    for(let i = 0; i<numberClass; i++){
        for(let h=0; h<6; h++){
            if (pswd[i].classList.contains(cores[h])){
                pswd[i].classList.remove(cores[h])
            }
        }
    }
    // Define as cores da Senha
    for (let i=0; i<=3; i++){
        // Armazena o valor das cores
        corSenha.push(cores[getRndInteger(0,5)])
    }
    // Remove as cores repetidas
    const set = new Set(corSenha)
    corSenhasr = Array.from(set)
    corSenhasr.sort()
    console.log(corSenhasr)
    
    // Insere uma ou mais cores se necessário
    let corSenhaQtdItem = corSenhasr.length-1
    console.log(corSenhaQtdItem)
    // Descobre a cor faltante
    while (corSenhaQtdItem < 3){
        for(let i=0;i<=5;i++){
            let encontrado = false
            if(cores[i]!==corSenhasr[i]){
                encontrado = true
                corSenhasr.push(cores[i])
                corSenhaQtdItem=corSenhasr.length-1
            }
        }
    }
    for( let i=0; i>3;i++){
        pswd[i].classList.add(cores[i])
    }
    console.log(corSenhasr)
    return corSenha
})

/* Verificação da tentativa */

btnVerificar.addEventListener('click', function(){
    let corPos = []
    corPos[0]=document.querySelector['#pos0']
    corPos[1]=document.querySelector['#pos1']
    corPos[2]=document.querySelector['#pos2']
    corPos[3]=document.querySelector['#pos3']
    while (chances>0) {
        for(let i=0; i<4; i++){
            for(let j=0; j<4; j++){
                if(corPos[i]==corSenha[j] && i==j){
                    // Cor e posição certa
                } else if (corPos[i]==corSenha[j]){
                    // Cor correte posição errada
                } else {
                    // Cor e posição incorreta
                }
            }
        }
        // Adicionar nova div para nova tentativa
        chances--
    }
        return
    })

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
/* Definição do resultado */