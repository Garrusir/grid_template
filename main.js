window.onload = () => {
	btn = document.getElementById('nav-btn');
	mobMenu = document.querySelector('.mob-nav');
	btn.onclick = () => {
		mobMenu.classList.toggle("active") ;
	}
}