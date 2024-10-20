const sidebar = () => {
	const sidebar = document.querySelector('.sidebar');
	const collapseBtn = document.querySelector('[data-collapse="sidebar"]');
	const burger = document.querySelector('.burger');

	// Inside sidebar
	const expandedElements = sidebar.querySelectorAll('[data-expanded]');

	collapseBtn.addEventListener('click', () => {
		hide();

		burger.classList.add('active');
	});

	burger.addEventListener('click', () => {
		show();

		burger.classList.remove('active');
	});

	const hide = () => {
		sidebar.dataset.expanded = 'true';

		setExpanded('true');
	};

	const show = () => {
		sidebar.dataset.expanded = 'false';

		setExpanded('false');
	};

	const setExpanded = value => {
		expandedElements.forEach(elem => {
			elem.dataset.expanded = value;
		});
	};
};

const dropdown = () => {
	const dropdowns = document.querySelectorAll('[data-dropdown]');

	dropdowns.forEach(dropdown => {
		const btn = dropdown.querySelector('[data-toggle]');
		const subMenu = dropdown.querySelector('[data-submenu]');
		const height = subMenu.scrollHeight;

		btn.addEventListener('click', () => {
			btn.classList.toggle('active');

			if (subMenu.clientHeight) {
				subMenu.style.height = '0';
				dropdown.dataset.visible = 'false';
			} else {
				subMenu.style.height = `${height}px`;
				dropdown.dataset.visible = 'true';
			}
		});
	});
};

const userDropdown = () => {
	const user = document.querySelector('.user');
	const userBtn = user.querySelector('.user__btn');
	let isUserVisible = false;

	const show = () => {
		user.classList.toggle('active');
		isUserVisible = !isUserVisible;
	};

	const hide = () => {
		user.classList.remove('active');
		isUserVisible = false;
	};

	const handleClickOutside = e => {
		if (isUserVisible && !user.contains(e.target)) hide();
	};

	const handleClickEscape = e => {
		if (isUserVisible && e.key === 'Escape') hide();
	};

	userBtn.addEventListener('click', show);

	window.addEventListener('click', handleClickOutside);

	window.addEventListener('keydown', handleClickEscape);
};

const project = () => {
	const project = document.querySelector('.project');
	const btn = project.querySelector('.project__btn');
	let isProjectVisible = false;

	const toggle = () => {
		project.classList.toggle('active');
		isProjectVisible = !isProjectVisible;
	};

	const hide = () => {
		project.classList.remove('active');
		isProjectVisible = false;
	};

	const handleClickOutside = e => {
		if (isProjectVisible && !project.contains(e.target)) hide();
	};

	const handleClickEscape = e => {
		if (isProjectVisible && e.key === 'Escape') hide();
	};

	btn.addEventListener('click', toggle);

	window.addEventListener('click', handleClickOutside);

	window.addEventListener('keydown', handleClickEscape);
};

sidebar();
dropdown();
userDropdown();
project();
