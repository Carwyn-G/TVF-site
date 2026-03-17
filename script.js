(function () {
	const headings = document.querySelectorAll('h2.special-h2');
	Array.prototype.forEach.call(headings, h => {
		let headbtn = h.querySelector('button');
		let target = h.nextElementSibling;
		headbtn.onclick = () => {
			let expanded = headbtn.getAttribute('aria-expanded') === 'true';
			headbtn.setAttribute('aria-expanded', !expanded);
			target.hidden = expanded;
		}
	});
})();