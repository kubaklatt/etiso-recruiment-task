// QUERY SELECTORS:
const progressBar = document.querySelector('.progress-bar')
const providers = document.querySelector('.providers')
const footer = document.querySelector('.footer')

const stepOne = document.querySelector('.step-1')
const stepOneBtn = document.querySelector('.step-1__button')

const continueBtn = document.querySelector('.step-1-1__continue-button')
const stepOneOne = document.querySelector('.step-1-1')

const stepTwo = document.querySelector('.step-2')
const stepTwoBtn = document.querySelector('.step-2__continue-button')
const stepTwoBackBtn = document.querySelector('.step-2__back-button')

const stepThree = document.querySelector('.step-3')
const stepThreeBackBtn = document.querySelector('.step-3__back-button')

const loader = document.querySelector('.loader')

// FUNCTIONs TO MOVE FORWARD

function loadingStep() {
	loader.style.display = 'none'
	progressBar.style.display = 'flex'
	stepThree.style.display = 'flex'
	footer.style.display = 'flex'
}

function stepOneToStepOneOne() {
	stepOneBtn.style.display = 'none'
	stepOneOne.style.display = 'flex'
}

function stepOneOneToStepTwo() {
	stepOne.style.display = 'none'
	stepOneOne.style.display = 'none'
	stepTwo.style.display = 'flex'
}

function stepTwoToLoader() {
	progressBar.style.display = 'none'
	providers.style.display = 'none'
	footer.style.display = 'none'
	stepTwo.style.display = 'none'
	loader.style.display = 'flex'
	setTimeout(loadingStep, 3000)
}

// FUNCTIONS TO GO BACK

function stepTwoToStepOneOne() {
	stepTwo.style.display = 'none'
	stepOneOne.style.display = 'flex'
	stepOne.style.display = 'flex'
}

function stepThreeToStepTwo() {
	stepThree.style.display = 'none'
	providers.style.display = 'flex'
	stepTwo.style.display = 'flex'
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

stepOneBtn.addEventListener('click', stepOneToStepOneOne)
continueBtn.addEventListener('click', stepOneOneToStepTwo)
stepTwoBtn.addEventListener('click', stepTwoToLoader)
stepTwoBackBtn.addEventListener('click', stepTwoToStepOneOne)
stepThreeBackBtn.addEventListener('click', stepThreeToStepTwo)
