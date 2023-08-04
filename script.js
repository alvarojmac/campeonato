let nRodada = document.getElementById('nrodada')
let rod1 = document.getElementById('rod1')
let rod2 = document.getElementById('rod2')
let rod3 = document.getElementById('rod3')
let rod4 = document.getElementById('rod4')
let btn = document.getElementById('btn')
let res = document.getElementById('res')
let res2 = document.getElementById('res2')
let rodadas = []


function rodadaValida(n) {
    if (Number(n) >=1 && Number(n) <= 26) {
        return true
    } else {
        return false
    }
}

function verRodada() {
     if (!rodadaValida(nRodada.value)) {
        alert('Rodada Inválida! Tente de 1 à 26')
     } else {
        rodadas.push(Number(nRodada.value))
     }

     let rodadaAtual = rodadas[rodadas.length - 1]

     switch (rodadaAtual) {
        case 1:
            rod1.classList.remove('invisivel')
            rod2.classList.add('invisivel')
            rod3.classList.add('invisivel')
            rod4.classList.add('invisivel')
            break;
        case 2:
            rod2.classList.remove('invisivel')
            rod1.classList.add('invisivel')
            rod3.classList.add('invisivel')
            rod4.classList.add('invisivel')
            break;
        case 3:
            rod3.classList.remove('invisivel')
            rod1.classList.add('invisivel')
            rod2.classList.add('invisivel')
            rod4.classList.add('invisivel')
            break;
        case 4:
            rod4.classList.remove('invisivel')
            rod1.classList.add('invisivel')
            rod2.classList.add('invisivel')
            rod3.classList.add('invisivel')
            break;
     }

    
     
     
     nRodada.value = ''
     nRodada.focus()

     // res.innerHTML = rodadas // test
     // res2.innerHTML = `A rodada selecionada ${rodadaAtual}` // test
}