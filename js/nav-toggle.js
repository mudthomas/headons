document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.wp-block-navigation__responsive-container').forEach(function (container) {
		var nav = container.closest('.wp-block-navigation');
		var openButton = nav && nav.querySelector('.wp-block-navigation__responsive-container-open');
		var closeButton = container.querySelector('.wp-block-navigation__responsive-container-close');
		if (!openButton) return;

		function open() {
			container.classList.add('is-menu-open');
			openButton.setAttribute('aria-expanded', 'true');
			if (closeButton) closeButton.focus();
		}
		function close() {
			container.classList.remove('is-menu-open');
			openButton.setAttribute('aria-expanded', 'false');
			openButton.focus();
		}

		openButton.setAttribute('aria-expanded', 'false');
		openButton.addEventListener('click', open);
		if (closeButton) closeButton.addEventListener('click', close);
		container.addEventListener('keydown', function (e) {
			if (e.key === 'Escape') close();
		});
	});
});
