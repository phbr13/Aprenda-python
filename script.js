const respostas = document.querySelectorAll('.resposta')
const setas = document.querySelectorAll('.seta')

function aparecerDesaparecerResposta(num) {
    setas.forEach((seta) => {
        const valor = seta.getAttribute('data-value')
        if (valor === num) {
            seta.style.transform = 'rotate(-180deg)'
            seta.setAttribute('data-value', `${num}-0`)
        } else if (valor === `${num}-0`) {
            seta.style.transform = 'rotate(0deg)'
            seta.setAttribute('data-value', `${num}`)
        }
    })
    respostas.forEach((resposta) => {
        const valor = resposta.getAttribute('data-value')
        if (valor === num) {
            resposta.style.height = 'auto'
            resposta.setAttribute('data-value', `${num}-0`)
        } else if (valor === `${num}-0`) {
            resposta.style.height = '0'
            resposta.setAttribute('data-value', `${num}`)
        }
    })
}

function scrollSmoothTo(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
}