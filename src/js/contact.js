// formContact variable

const inputName = document.querySelector('#name')
const inputSurname = document.querySelector('#surname')
const inputEmail = document.querySelector('#email')
const inputMessage = document.querySelector('#message')
const textError = document.querySelector('.error-text')
const emailError = document.querySelector('.error-email')
const btnSend = document.querySelector('.send-btn')
const btnClear = document.querySelector('.clear-btn')
const popupMsg = document.querySelector('.msg-popup')
const popupError = document.querySelector('.error-popup')
const popupClear = document.querySelector('.clear-popup')
const checkBox = document.querySelector('#agreement')

const inputs = [inputName, inputSurname, inputEmail, inputMessage]

// formContact functions

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el)
		} else {
			clearError(el)
		}
	})
}

const showError = input => {
	const formBox = input
	formBox.classList.add('error-input')
	showErrorPopup()
	setTimeout(closeErrorPopup, 3000)
}

const clearError = input => {
	const formBox = input
	formBox.classList.remove('error-input')
}

const checkMsgLength = (input, min) => {
	if (input.value.length < min) {
		showError(input)
		textError.textContent = `Wiadomość musi zawierać min. ${min} znaków.`
	} else {
		textError.textContent = ''
	}
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if (re.test(email.value)) {
		clearError(email)
		emailError.textContent = ''
	} else {
		showError(email)
		emailError.textContent = `Adres e-mail jest niepoprawny.`
	}
}

const checkCheckbox = () => {
	if (checkBox.checked == false) {
		showErrorPopup()
        setTimeout(closeErrorPopup, 3000)
	} 
}

const showErrorPopup = () => {
	popupError.style.display = 'flex'
}

const closeErrorPopup = () => {
	popupError.style.display = 'none'
}

const showPopup = () => {
	popupMsg.style.display = 'flex'
	setTimeout(closePopup, 3000)
}

const closePopup = () => {
	popupMsg.style.display = 'none'
}

const showClearPopup = () => {
	popupClear.style.display = 'flex'
	setTimeout(closeClearPopup, 3000)
}

const closeClearPopup = () => {
	popupClear.style.display = 'none'
}

const clearInputs = () => {
	inputs.forEach(el => {
		el.value = ''
		el.classList.remove('error-input')
		textError.textContent = ''
		emailError.textContent = ''
		checkBox.checked = false
	})
}

btnSend.addEventListener('click', e => {
	e.preventDefault()

	checkForm(inputs)
	checkMsgLength(inputMessage, 10)
	checkMail(email)
	checkCheckbox()
	showPopup()
})

btnClear.addEventListener('click', e => {
	e.preventDefault()
	showClearPopup()
	setTimeout(clearInputs, 3000)
})


// current year

const footerYear = document.querySelector('.footer-year')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
