// QUERY SELECTORS:

const progressBar = document.querySelector('.progress-bar')
const progressBarFirst = document.querySelector('.progress-bar__step__first')
const progressBarSecond = document.querySelector('.progress-bar__step__second')
const progressBarThird = document.querySelector('.progress-bar__step__third')

const providers = document.querySelector('.providers')
const footer = document.querySelector('.footer')

const stepOne = document.querySelector('.step-1')
const stepOneBtn = document.querySelector('.step-1__button')

const stepOneOne = document.querySelector('.step-1-1')
const stepOneOneBtn = document.querySelector('.step-1-1__continue-button')

const stepTwo = document.querySelector('.step-2')
const stepTwoBtn = document.querySelector('.step-2__continue-button')
const stepTwoBackBtn = document.querySelector('.step-2__back-button')

const stepThree = document.querySelector('.step-3')
const stepThreeBackBtn = document.querySelector('.step-3__back-button')

const loader = document.querySelector('.loader')

// LOADING STEP

function loadingStep() {
	loader.style.display = 'none'
	progressBar.style.display = 'flex'
	stepThree.style.display = 'flex'
	footer.style.display = 'flex'
	progressBarThird.classList.add('active')
}

// ACCORDION FOR STEP 2

const accordionItemHeaders = document.querySelectorAll('.step-2__accordion-item-header')

accordionItemHeaders.forEach(accordionItemHeader => {
	accordionItemHeader.addEventListener('click', event => {
		const currentlyActiveAccordionItemHeader = document.querySelector('.step-2__accordion-item-header.active')
		if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
			currentlyActiveAccordionItemHeader.classList.toggle('active')
			currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0
		}

		accordionItemHeader.classList.toggle('active')
		const accordionItemBody = accordionItemHeader.nextElementSibling
		if (accordionItemHeader.classList.contains('active')) {
			accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px'
		} else {
			accordionItemBody.style.maxHeight = 0
		}
	})
})

// EVENT LISTENERS TO GO FORWARD

stepOneBtn.addEventListener('click', () => {
	stepOneBtn.style.display = 'none'
	stepOneOne.style.display = 'flex'
})

stepOneOneBtn.addEventListener('click', () => {
	stepOne.style.display = 'none'
	stepOneOne.style.display = 'none'
	stepTwo.style.display = 'flex'
	progressBarSecond.classList.add('active')
})

stepTwoBtn.addEventListener('click', () => {
	progressBar.style.display = 'none'
	providers.style.display = 'none'
	footer.style.display = 'none'
	stepTwo.style.display = 'none'
	loader.style.display = 'flex'
	setTimeout(loadingStep, 3000)
})

// EVENT LISTENERS TO GO BACK

stepTwoBackBtn.addEventListener('click', () => {
	stepTwo.style.display = 'none'
	stepOneOne.style.display = 'flex'
	stepOne.style.display = 'flex'
	progressBarThird.classList.remove('active')
	progressBarSecond.classList.remove('active')
})

stepThreeBackBtn.addEventListener('click', () => {
	stepThree.style.display = 'none'
	providers.style.display = 'flex'
	stepTwo.style.display = 'flex'
	progressBarThird.classList.remove('active')
})
