var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}


ready(() => {
	

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
		blocks: [4],
	});

});
