// active offers

const firstOffer = document.querySelector('#first-offer')
const secondOffer = document.querySelector('#second-offer')
const thirdOffer = document.querySelector('#third-offer')
const offers = [firstOffer, secondOffer, thirdOffer]

const btns = document.querySelectorAll('.btn-chose')
const firstBtn = document.querySelector('#first-btn')
const secondBtn = document.querySelector('#second-btn')
const thirdBtn = document.querySelector('#third-btn')
const moveToContactBtn = document.querySelectorAll('.move-to-contact')

btns.forEach(btn => {
	btn.addEventListener('click', e => {
		e.target.classList.toggle('active-btn')
		checkDisabledAll()
		allOffersScale()
	})
})

const checkDisabled = () => {
	if (firstBtn.classList.contains('active-btn') || secondBtn.classList.contains('active-btn')) {
		thirdBtn.setAttribute('disabled', '')
	} else {
		thirdBtn.removeAttribute('disabled', '')
	}
}

const checkDisabledSecond = () => {
	if (secondBtn.classList.contains('active-btn') || thirdBtn.classList.contains('active-btn')) {
		firstBtn.setAttribute('disabled', '')
	} else {
		firstBtn.removeAttribute('disabled', '')
	}
}

const checkDisabledThird = () => {
	if (firstBtn.classList.contains('active-btn') || thirdBtn.classList.contains('active-btn')) {
		secondBtn.setAttribute('disabled', '')
	} else {
		secondBtn.removeAttribute('disabled', '')
	}
}

const checkDisabledAll = () => {
	checkDisabled()
	checkDisabledSecond()
	checkDisabledThird()
}

const firstOfferScale = () => {
	if (firstBtn.classList.contains('active-btn')) {
		firstOffer.classList.add('active-offer')
	} else {
		firstOffer.classList.remove('active-offer')
	}
}

const secondOfferScale = () => {
	if (secondBtn.classList.contains('active-btn')) {
		secondOffer.classList.add('active-offer')
	} else {
		secondOffer.classList.remove('active-offer')
	}
}

const thirdOfferScale = () => {
	if (thirdBtn.classList.contains('active-btn')) {
		thirdOffer.classList.add('active-offer')
	} else {
		thirdOffer.classList.remove('active-offer')
	}
}

const allOffersScale = () => {
	firstOfferScale()
	secondOfferScale()
	thirdOfferScale()
}

const showMoveToContactBtn = () => {
	moveToContactBtn.style.display = 'block'
}

const closeMoveToContactBtn = () => {
	moveToContactBtn.style.display = 'none'
}

// current year

const footerYear = document.querySelector('.footer-year')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()