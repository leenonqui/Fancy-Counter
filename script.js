//create an element by querying the html
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease')
const resetButtonEl = document.querySelector('.counter__reset--button')
const counterValueEl = document.querySelector('.counter__value');


//increase counter  value
const incrementCounter = () => {
	//get current value from the element
	const currentValue = counterValueEl.textContent;

	//convert value to number type
	const currentValueAsNum = +currentValue

	//increse the value by 1
	newValue = currentValueAsNum + 1; 

	//update current value of the element
	counterValueEl.textContent = newValue;

	increaseButtonEl.blur()
};

increaseButtonEl.addEventListener('click', incrementCounter);
document.addEventListener('keydown', incrementCounter);

//decrease counter value
const decrementCounter = () => {
	//get current value from the element
	const currentValue = counterValueEl.textContent;

	//convert value to number type
	const currentValueAsNum = +currentValue;
	
	//decrement by 1 
	let newValue = currentValueAsNum - 1;
	
	//check that value is not less then 0 and if true prevent decrementing
	if (newValue < 0) {newValue = 0};
		
	//update value
	counterValueEl.textContent = newValue;

	decreaseButtonEl.blur();
};

decreaseButtonEl.addEventListener('click', decrementCounter);


//reset counter value
resetButtonEl.addEventListener('click', () => {
	counterValueEl.textContent = 0;

	resetButtonEl.blur();
});