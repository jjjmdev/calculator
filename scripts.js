let itemsArray = document.querySelectorAll(".calcu-item");
let screen = document.querySelector(".screen");
let screenStoredValue = document.querySelector(".stored-value");
let screenCurrentValue = document.querySelector(".current-value");
let screenOperation = document.querySelector(".operation");
let currentValue = "";
let storedValue = "";
let operation = "";

const operate = (text) => {
	// console.log(text);

	switch (text) {
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
		case "0":
		case "00":
			currentValue =
				currentValue.length < 10 ? currentValue + text : currentValue;
			break;
		case ".":
			currentValue = currentValue.includes(".")
				? currentValue
				: currentValue === ""
				? "0."
				: (currentValue += text);
			break;
		case "AC":
			currentValue = "";
			storedValue = "";
			operation = "";
			break;
		case "C":
			currentValue = currentValue.slice(0, currentValue.length - 1);
			break;
		case "+/-":
			currentValue === ""
				? (storedValue = -+storedValue)
				: (currentValue = -+currentValue);
			currentValue = currentValue.toString();
			storedValue = storedValue.toString();
			break;
		case "+":
		case "-":
		case "*":
		case "/":
			operation = text;
			calculate(currentValue);
			break;
		case "=":
			calculate(currentValue);
			break;
		default:
			return;
	}

	console.log({ currentValue, storedValue });
	screenOperation.textContent = operation;

	screenCurrentValue.textContent = currentValue;
	screenStoredValue.textContent = storedValue;
};

const calculate = (value) => {
	if (value === "") return;

	if (storedValue === "") {
		storedValue = value;
	} else {
		storedValue = +storedValue;
		value = +value;
		switch (operation) {
			case "+":
				storedValue = storedValue + value;
				break;
			case "-":
				storedValue = storedValue - value;
				break;
			case "*":
				storedValue = storedValue * value;
				break;
			case "/":
				storedValue = storedValue / value;
				break;
		}
		storedValue = Math.floor(storedValue * 1000) / 1000;
		storedValue.toString();
	}

	currentValue = "";

	screenCurrentValue.textContent = currentValue;
	screenStoredValue.textContent = storedValue;
};

itemsArray.forEach((item) => {
	item.addEventListener("click", () => {
		operate(item.textContent);
	});
});

window.addEventListener("keydown", (e) => {
	// console.log(`${e.key}`);
	operate(`${e.key}`);
});
