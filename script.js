const respostas = ["por que é o vasco", "sao janu", "pedro", "por que é o vasco" ]

function teste() {
    const inputEl = [...document.querySelectorAll('#form input')]
    const inputsRespostas = []
    inputEl.forEach(e => inputsRespostas.push(e.value))

    if(JSON.stringify(respostas) === JSON.stringify(inputsRespostas)){
        alert('Acerto Miseravi')
        window.location.href = './resposta.html'
    }
    else {
        alert('errou fila da puta')
    }   
}

