let itemsArray = document.querySelectorAll(".calcu-item");
let screen = document.querySelector(".screen");

const operate = (text) => {
	console.log(text);
	screen.textContent = text;
};

itemsArray.forEach((item) => {
	item.addEventListener("click", () => {
		operate(item.textContent);
	});
});
