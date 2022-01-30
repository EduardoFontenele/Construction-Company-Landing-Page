const burguerMenu = document.getElementById('toggle-menu')
const navMenu = document.querySelector('.nav-menu')

document.addEventListener('load', function (event) {
    if (event) {
        navMenu.classList.remove('hidden')
    }
})

burguerMenu.addEventListener('click', function (e) {
    e.preventDefault()
    if (e) {
        navMenu.classList.toggle('hidden')
    }
})

class ValidarForm {
    constructor() {
        this.infoForm = document.querySelector('#info-form')
        this.events()
    }

    events() {
        this.infoForm.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const validFields = this.isValid()
        if(validFields) {
            alert('Formulário enviado')
            this.infoForm.submit()
        }

    }

    isValid() {
        let valid = true

        for(let errorDivs of this.infoForm.querySelectorAll('.error-text')) {
            errorDivs.remove()
        }

        for(let field of this.infoForm.querySelectorAll('.validate')) {

            const label = field.previousElementSibling.innerText

            if(!field.value) {
                valid = false
                this.createError(field, `${label} cannot be empty`)
            }
        }

        return valid
    }

    createError(field, message) {
        const div = document.createElement('div')
        div.innerHTML = message
        div.classList.add('error-text')
        field.insertAdjacentElement('afterend', div)
    }

}


const validaForm = new ValidarForm()