const formLavoro = document.getElementById('form-lavoro')

const selectWork = document.getElementById('work-choice')

const nameInputElement = document.getElementById('name')
const lastNameInputElement = document.getElementById('lastname')
const emailInputElement = document.getElementById('email')

const userName = nameInputElement.value
const lastName = lastNameInputElement.value
const email = emailInputElement.value

// if (userName === ' '){
//     nameInputElement.classList.add('is-invalid')

// } else {
//     nameInputElement.classList.add('is-valid')
// }

const orario = 10

formLavoro.addEventListener('submit', function(event) {
    event.preventDefault()

    let preventivo = 0

switch (selectWork.value) {
    case 'backend':
        preventivo = orario * 20.50
        break;
    case 'frontend':
        preventivo = orario * 15.30
        break;
    case 'project':
        preventivo = orario * 33.60
        break;

    default:
        break;
}

    const promoCodeInput = document.getElementById('promo-code')

    scontoArray=[
    'YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24',
]

promoCodeInput.classList.remove('is-invalid','is-valid')


const finalPrice = document.getElementById('row2')

if (promoCodeInput.value !== '') {
    const validityCode = scontoArray.includes(promoCodeInput.value);

    if (validityCode) {
        const sconto = preventivo * 0.25;
        preventivo = preventivo - sconto;
        promoCodeInput.classList.add('is-valid');
    } else {
        promoCodeInput.classList.add('is-invalid');
    }
    }

const parteDecimale = preventivo.toFixed(2).split('.')[1]
const parteIntera = Math.floor(preventivo)

const prezzo = `<b>€ ${parteIntera}</b>,${parteDecimale}` 
finalPrice.innerHTML = prezzo

const priceReveal = document.getElementById('final-price')
priceReveal.classList.remove('invisible')

})




