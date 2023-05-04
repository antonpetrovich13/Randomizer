
let startButton = document.querySelector('.randomizer__start');
let resultField = document.querySelector('.randomizer__result');


document.querySelector('._minValue').addEventListener('focus', function () {
	this.select();
});

document.querySelector('._maxValue').addEventListener('focus', function () {
	this.select();
})


if (startButton) {
	startButton.addEventListener('click', function () {
		let minValue = +document.querySelector('._minValue').value;
		let maxValue = +document.querySelector('._maxValue').value;

		randomizer(minValue, maxValue);
	})
}

function randomizer(min, max) {
	resultField.innerHTML = Math.floor(min + Math.random() * (max + 1 - min));
}

