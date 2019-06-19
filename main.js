window.onload = () => {
	let btn = document.getElementById('nav-btn');
	let mobMenu = document.querySelector('.mob-nav');
	btn.onclick = () => {
		mobMenu.classList.toggle("active") ;
	}

	let slider = document.querySelector('header');
	let dots = document.querySelectorAll(".slider-nav .item");
	let currentSlide = 1;
	for (item of dots){
		item.onclick = (event) => {
			currentSlide = event.target.id;
			slide(currentSlide);
			// event.target.classList.toggle('active');
		}
	}
	document.querySelector(".left-arrow").onclick = () => {
		if (currentSlide == 1) {
			currentSlide = 3;
			slide(currentSlide)
		} else {
			currentSlide--;
			slide(currentSlide);
		}
	}

	document.querySelector(".right-arrow").onclick = () => {
		
		if (currentSlide == 3) {
			currentSlide = 1;
			slide(currentSlide);
		} else {
			currentSlide++;
			slide(currentSlide);
		}
	}
	function slide(n) {
		slider.classList.add('showing');
		setTimeout(()=>{
		slider.className = '';
		slider.classList.add(`slide-${n}`);
	}, 300)
		
		for (item of dots){
			item.classList.remove('active');
		}
		console.log(dots[currentSlide-1]);
		console.log(currentSlide);
		dots[currentSlide-1].classList.add('active');
	}

	setInterval(()=>{
		if (currentSlide == 3) {
			currentSlide = 1;
			slide(currentSlide);
		} else {
			currentSlide++;
			slide(currentSlide);
		}
	}, 10000)
}