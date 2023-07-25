const menuItems = document.querySelectorAll('a')
const scrollSpySections = document.querySelectorAll('.section')

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = []

		scrollSpySections.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 253) {
				sections.push(section)

				const activeSection = document.querySelector(`a[href*="${sections[0].id}"]`)

				menuItems.forEach(item => item.classList.remove('active'))

				activeSection.classList.add('active')
			}
		})
	}
}

window.addEventListener('scroll', handleScrollSpy)

// active btns & full-offer animation

const btns = document.querySelectorAll('.btn-chose')
const firstBtn = document.querySelector('#first-btn')
const secondBtn = document.querySelector('#second-btn')
const thirdBtn = document.querySelector('#third-btn')
const fullOffer = document.querySelector('.fulloffer-h3')
const firstBox = document.querySelector('#first-box')
const secondBox = document.querySelector('#second-box')
const thirdBox = document.querySelector('#third-box')
const allBoxes = [firstBox, secondBox, thirdBox]

btns.forEach(btn => {
	btn.addEventListener('click', e => {
		e.target.classList.toggle('active-btn')
		checkDisabledAll()
		allBoxesScale()
		setTimeout(showFullOffer(), 4000)
		addToBasket()
	})
})

const showFullOffer = () => {
	fullOffer.style.display = 'block'
}

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

const firstBoxScale = () => {
	if (firstBtn.classList.contains('active-btn')) {
		firstBox.classList.add('box-scale')
		basketPopup.style.display = 'block'
		removeBasketPopup.style.display = 'none'
	} else {
		firstBox.classList.remove('box-scale')
		basketPopup.style.display = 'none'
		removeBasketPopup.style.display = 'block'
	}
}

const secondBoxScale = () => {
	if (secondBtn.classList.contains('active-btn')) {
		secondBox.classList.add('box-scale')
		basketPopup.style.display = 'block'
		removeBasketPopup.style.display = 'none'
	} else {
		secondBox.classList.remove('box-scale')
	}
}

const thirdBoxScale = () => {
	if (thirdBtn.classList.contains('active-btn')) {
		thirdBox.classList.add('box-scale')
		basketPopup.style.display = 'block'
		removeBasketPopup.style.display = 'none'
	} else {
		thirdBox.classList.remove('box-scale')
	}
}

const allBoxesScale = () => {
	firstBoxScale()
	secondBoxScale()
	thirdBoxScale()
}

// basket popup

const basketPopup = document.querySelector('.basket-popup')
const removeBasketPopup = document.querySelector('.remove')
const btnCloseBasket = document.querySelectorAll('.close-basketpopup')

btnCloseBasket.forEach(close => {
	close.addEventListener('click', () => {
		basketPopup.style.display = 'none'
		removeBasketPopup.style.display = 'none'
	})
})

// basket-panel

const basketPanel = document.querySelector('.cart')
const basketBox = document.querySelector('.basket-box')
const singleItem = document.querySelector('.single-item')
const transactionBox = document.querySelector('.transaction-box')
const valueItemsArea = document.querySelector('.value-items')
const priceBasketTotal = document.querySelector('.total-price')

const miniItem = 'Opcja Mini'
const miniPrice = 49
const standardItem = 'Opcja Standard'
const standardPrice = 99
const premiumItem = 'Opcja Premium'
const premiumPrice = 199

const btnOpenBasketPanel = document.querySelector('.basket-cart')
const btnCloseBasketPanel = document.querySelector('.close-basket-panel')
const btnDeleteAllBasket = document.querySelector('.delete-basket')
const btnPay = document.querySelector('.pay')
const confirmationPopup = document.querySelector('.confirmation-popup')
const emptyBasketPopup = document.querySelector('.empty-basket-popup')
const emptyBasketInformation = document.querySelector('.empty-basket-information')
const iconFaCartPlus = document.querySelector('.fa-cart-plus')
const navigation = document.querySelector('nav')


const iconAddToBasket = () => {
	firstBox.classList.add('box-scale')
	firstBtn.classList.add('active-btn')
	addToBasket()
	setTimeout(closeBasketPanel)
	emptyBasketInformation.style.display = 'none'
	basketPopup.style.display = 'block'
}

const addToBasket = () => {
	const newTransaction = document.createElement('div')

	if (firstBox.classList.contains('box-scale')) {
		singleItem.append(newTransaction)
		newTransaction.innerHTML = `
		<div class="single-item">
		<div class="item-product">
			<div class="item">
				<p>${miniItem}</p>
			</div>
			<div class="price-product">
				<b>$<span class="price-total">${miniPrice}</span></b>
			</div>
			<p class="available">Dostępność: <i class="fa-solid fa-check"></i></p>
		</div>
	</div>
			`
		priceBasketTotal.append(miniPrice)
		emptyBasketInformation.style.display = 'none'
	} else if (secondBox.classList.contains('box-scale')) {
		singleItem.append(newTransaction)
		newTransaction.innerHTML = `
		<div class="single-item">
		<div class="item-product">
			<div class="item">
				<p>${standardItem}</p>
			</div>
			<div class="price-product">
				<b>$<span class="price-total">${standardPrice}</span></b>
			</div>
			<p class="available">Dostępność: <i class="fa-solid fa-check"></i></p>
		</div>
	</div>
			`
		priceBasketTotal.append(standardPrice)
		emptyBasketInformation.style.display = 'none'
	} else if (thirdBox.classList.contains('box-scale')) {
		singleItem.append(newTransaction)
		newTransaction.innerHTML = `
		<div class="single-item">
		<div class="item-product">
			<div class="item">
				<p>${premiumItem}</p>
			</div>
			<div class="price-product">
				<b>$<span class="price-total">${premiumPrice}</span></b>
			</div>
			<p class="available">Dostępność: <i class="fa-solid fa-check"></i></p>
		</div>
	</div>
			`
		priceBasketTotal.append(premiumPrice)
		emptyBasketInformation.style.display = 'none'
	} else {
		clearItemAfterRemove()
	}
}

const clearItemAfterRemove = () => {
	priceBasketTotal.innerHTML = ''
	singleItem.innerHTML = ''
	emptyBasketInformation.style.display = 'block'

	allBoxes.forEach(box => {
		box.classList.remove('box-scale')
	})

	btns.forEach(btn => {
		btn.classList.remove('active-btn')
	})
}

const showConfirmationPopup = () => {
	if (
		firstBox.classList.contains('box-scale') || secondBox.classList.contains('box-scale') || thirdBox.classList.contains('box-scale')
		
		
	) {
		confirmationPopup.style.display = 'block'
		setTimeout(closeConfirmationPopup, 7000)
		setTimeout(clearItemAfterRemove, 7000)
	} else {
		emptyBasketPopup.style.display = 'block'
		setTimeout(closeEmptyPopupWarning, 7000)
		
	}
}

const closeConfirmationPopup = () => {
	confirmationPopup.style.display = 'none'
}

const closeEmptyPopupWarning = () => {
	emptyBasketPopup.style.display = 'none'
}

const showBasketPanel = () => {
	basketPanel.style.display = 'block'
	navigation.style.display = 'none'
}

const closeBasketPanel = () => {
	basketPanel.style.display = 'none'
	navigation.style.display = 'flex'
}

btnPay.addEventListener('click', showConfirmationPopup)
btnDeleteAllBasket.addEventListener('click', clearItemAfterRemove)
btnOpenBasketPanel.addEventListener('click', showBasketPanel)
btnCloseBasketPanel.addEventListener('click', closeBasketPanel)
iconFaCartPlus.addEventListener('click', iconAddToBasket)

// cookies alert

const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-btn')

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')

	if (cookieEaten) {
		cookieBox.classList.add('hide')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('hide')
}

cookieBtn.addEventListener('click', handleCookieBox)
showCookie()

// current year

const footerYear = document.querySelector('.footer-year')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
