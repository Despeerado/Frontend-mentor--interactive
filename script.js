var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

const form = document.getElementById('cardForm');

// inputs

const cardName = document.getElementById('userName');
const cardNumber = document.getElementById('cardNumber');
const cardMonth = document.getElementById('month');
const cardYear = document.getElementById('year');
const cardCVC = document.getElementById('cvc');

// error messages 

const errorName = document.getElementById('errorName');
const errorCard = document.getElementById('errorCard');
const errorDate = document.getElementById('errorDate');
const errorCVC = document.getElementById('errorCvc');

let isValidCardName = false;
let isValidCardNumber = false;
let isValidCardMonth = false;
let isValidCardYear = false;
let isValidCardCVC = false;

const events = ['focus', 'keyup', 'keypress'];

new Cleave('#cardNumber', {
	creditCard: true,
	delimiter: ' ',
	numericOnly: true,
});

new Cleave('#month', {
    date: true,
		datePattern: ['m'],
		numericOnly: true,
});

new Cleave('#year', {
    date: true,
		datePattern: ['y'],
		numericOnly: true,
});

	new Cleave('#cvc', {
		numericOnly: true,
		blocks: [3],
	});

	// function validation() {
	// if (isValidCardName && isValidCardNumber && isValidCardMonth && isValidCardYear && isValidCardCVC) {
	// 	alert("Done")
	// }
	// else {
	// 	alert("Ne ne")
	// }
	// }

const submit = document.getElementById('submit');
submit.addEventListener('click', validate);

function validate(e) {
	e.preventDefault();
	let valid = true;

	if (isValidCardName && isValidCardNumber && isValidCardMonth && isValidCardYear && isValidCardCVC) {
		document.getElementById('modal').classList.remove('invisible');
		document.getElementsByClassName('contact-form')[0].classList.add('invisible');
	}
	return valid;
}

ready(() => {

	events.forEach((evt) => {

		// validation - card name

		cardName.addEventListener(evt, () => {
			
			if (cardName.value == undefined || cardName.value.trim().length <= 0 || !/^[A-Z ]+$/i.test(cardName.value)) {
				cardName.classList.add('border-red');
				cardName.innerHTML = "Name must not be empty";
				errorName.classList.remove('error');
				isValidCardName = false;
				return;
			}

			cardName.classList.remove('border-red');
			errorName.classList.add('error');
			isValidCardName = true;
		});

		// validation - card number

		cardNumber.addEventListener(evt, () => {
			if (cardNumber.value == undefined || cardNumber.value.trim().length <= 0) {
				cardNumber.classList.add('border-red');
				errorCard.classList.remove('error');
				isValidCardNumber = false;
				return;	
			}

			cardNumber.classList.remove('border-red');
			errorCard.classList.add('error');
			isValidCardNumber = true;
			return;
		
		});
		// validation - month
		cardMonth.addEventListener(evt, () => {
			if (cardMonth.value == undefined || cardMonth.value.trim().length <= 0)
			{
				cardMonth.classList.add('border-red');
				errorDate.classList.remove('error');
				isValidCardMonth = false;
				return;
			}
				cardMonth.classList.remove('border-red');
				errorCard.classList.add('error');
				isValidCardMonth = true;
				return;
		});

		// validation - year

		cardYear.addEventListener(evt, () => {
			if (cardYear.value == undefined || cardMonth.value.trim().length <= 0)
			{
				cardYear.classList.add('border-red');
				errorDate.classList.remove('error');
				isValidCardYear = false;
				return;
			}
				cardYear.classList.remove('border-red');
				errorDate.classList.add('error');
				isValidCardYear = true;
				return;
		});
		// });
		
	
		// validation - cvc
		cardCVC.addEventListener(evt, () => {

			if (cardCVC.value == undefined || cardCVC.value.trim().length <= 0) {
				cardCVC.classList.add('border-red');
				errorCVC.innerHTML = "CVC must not be empty";
				errorCVC.classList.remove('error');
				isValidCardCVC = false;
				return;
			}
			if (cardCVC.value.trim().length <= 2) {
				errorCVC.innerHTML = "CVC must be 3 digits";
				errorCVC.classList.remove('error');
				isValidCardCVC = false;
				return;
			}
			if (cardCVC.value.trim().length == 3) {
				cardCVC.classList.remove('border-red');
				errorCVC.classList.add('error');
				errorCVC.innerHTML = '';
				isValidCardCVC = true;
				return;
			}
		})
	});

});

