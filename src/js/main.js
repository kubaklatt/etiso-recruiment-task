const stepOne = document.querySelector('.step-1')
const findAddressBtn = document.querySelector('.step-1__button')
const continueBtn = document.querySelector('.step-1-1__continue-button')
const stepOneOne = document.querySelector('.step-1-1')
const stepTwo = document.querySelector('.step-2')
const stepThree = document.querySelector('.step-3')
const stepTwoBtn = document.querySelector('.step-2__continue-button')
const loader = document.querySelector('.loader')
const progressBar = document.querySelector('.progress-bar')
const providers = document.querySelector('.providers')
const footer = document.querySelector('.footer')

function loadingStep() {
	loader.style.display = 'none'
	progressBar.style.display = 'flex'
	stepThree.style.display = 'flex'
	footer.style.display = 'flex'
}

function stepOneToStepOneOne() {
	findAddressBtn.style.display = 'none'
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
	setInterval(loadingStep, 3000)
}

findAddressBtn.addEventListener('click', stepOneToStepOneOne)
continueBtn.addEventListener('click', stepOneOneToStepTwo)
stepTwoBtn.addEventListener('click', stepTwoToLoader)
