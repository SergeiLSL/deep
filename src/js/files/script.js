// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
"use script"


window.addEventListener('load', windowLoad);

function windowLoad() {

	document.body.classList.add('loaded');

	document.addEventListener("click", documentActions);

	function  documentActions(e) {
		const targetElement = e.target;
		//Tabs - выполняется табуляция по категории
		// Up - страница скролится к шапке при нажатии на кнопку Up в footer
		if(targetElement.closest('.footer__up')) {
			window.scrollTo({
				top:0,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}