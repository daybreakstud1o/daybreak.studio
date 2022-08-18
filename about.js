function breakIntoSpan(baseElm) {
	const content = baseElm.innerHTML;
	const words = content.split(" ");
	const wordSpans = words.map((word)=>{
		const spanElm = document.createElement("span");
		span.innerHTML = word;
		return spanElm;
	})
	return wordSpans;
}

function triggerStaggerAnim(wordElms, {delay=250, styler= (style)=>{ style.display = "block"}}) {
	for (let i = 0; i<wordElms.length; i++) {
		const elm = wordElms[i];
		setTimeout(()=> {
			styler(elm.style);
		}, i * delay);
	}
}

daybreak.router.useScript(()=>{
	console.log("enter about");

	function animateInHero() {
		document.querySelector('.nav-logo').style.width = '55vw';
		document.querySelector('.nav-left .daybreak-info').style.opacity = '0';
		document.querySelector('.nav-left .daybreak-info').style.transitionDelay = "0s";
		document.querySelector('.nav-left .cities-info').style.opacity = '0';
		document.querySelector('.nav-left .cities-info').style.transitionDelay = "0s";
		
		setTimeout(function() {
			document.querySelector('.nav-left .daybreak-info').style.display = 'none';
			document.querySelector('.nav-left .cities-info').style.display = 'none';
			var elementDelay = 250;
			for (let i = 0; i < document.querySelectorAll('.about-hero-split-item').length; i++) {
				document.querySelectorAll('.about-hero-split-item').forEach((element, i) => {
					setTimeout(function () {
						element.style.opacity = "1";
					}, i * elementDelay);
				});
			}
		}, 200);

		return ()=>{

				document.querySelector('.nav-left .daybreak-info').style.display = 'block';
				document.querySelector('.nav-left .cities-info').style.display = 'block';
				document.querySelector('.nav-left .daybreak-info').style.transitionDelay = '.3s';
				document.querySelector('.nav-left .cities-info').style.transitionDelay = '.3s';

				// delay one frame so that transition delay is in effect
				window.requestAnimationFrame(()=>{
					document.querySelector('.nav-left .daybreak-info').style.opacity = '1';
					document.querySelector('.nav-left .cities-info').style.opacity = '1';
				})
				document.querySelector('.nav-logo').style.width = '131px';

		}
	}
	const resetHero = animateInHero();
	
	const slider = document.querySelector('.about-carousel');
	let isDown = false;
	let startX;
	let scrollLeft;

	slider.addEventListener('mousedown', (e) => {
	  isDown = true;
	  //slider.classList.add('active');
	  startX = e.pageX - slider.offsetLeft;
	  scrollLeft = slider.scrollLeft;
	});
	slider.addEventListener('mouseleave', () => {
	  isDown = false;
	  //slider.classList.remove('active');
	});
	slider.addEventListener('mouseup', () => {
	  isDown = false;
	  //slider.classList.remove('active');
	});
	slider.addEventListener('mousemove', (e) => {
	  if(!isDown) return;
	  e.preventDefault();
	  const x = e.pageX - slider.offsetLeft;
	  const walk = (x - startX) * 3; //scroll-fast
	  slider.scrollLeft = scrollLeft - walk;
	  //console.log(walk);
	});

	function setupLogoMinimizeOnScroll() {
		function minimizeLogo() {
			document.querySelector('.nav-logo').style.width = '131px';
		}
		function maximizeLogo() {
			document.querySelector('.nav-logo').style.width = '55vw';
		}

		const handleScroll =(scroll)=>{
			// const scroll = window.scrollY;
			if (scroll >= 100) {
					minimizeLogo()
			} else if (scroll < 100) {
					maximizeLogo()
			}
		}
		// window.addEventListener("scroll", handleScroll);
		daybreak.scroll.observeScroll(handleScroll)

		return ()=>{
			minimizeLogo();
			daybreak.scroll.unobserveScroll(handleScroll)
			// window.removeEventListener("scroll", handleScroll);
		}
	}
	const cleanupLogoMinimizeOnScroll = setupLogoMinimizeOnScroll();
		
	// TODO: create transition
	/* 
	$('#home-link, #contact-link').click(function(e) {
		e.preventDefault();
		var linkUrl = $(this).attr('href');
		setTimeout(function(url) { window.location = url; }, 1000, linkUrl);
	});

	$( "#home-link, #contact-link" ).click(function() {
		document.querySelector('.nav-logo').style.width = '131px';
		document.querySelector('.nav-left .daybreak-info').style.display = 'block';
		document.querySelector('.nav-left .cities-info').style.display = 'block';
		document.querySelector('.nav-left .daybreak-info').style.opacity = '1';
		document.querySelector('.nav-left .cities-info').style.opacity = '1';
	});*/

	function classOfTheirOwnEnter() {
		var elementDelay = 100;
		setTimeout(function () {
			for (let i = 0; i < document.querySelectorAll('.after-carousel .heading-massive span').length; i++) {
				document.querySelectorAll('.after-carousel .heading-massive span').forEach((element, i) => {
					setTimeout(function () {
						// element.style.display = "inline-block" ?? "";
						element.style.visibility = "visible";
						element.style.width = "auto";
						daybreak.scroll.recalculatePageHeight();
					}, i * elementDelay);
				});
			}
		}, 200);
	}

	function softwareEnterDesktop() {
		var elementDelay = 250;
		for (let i = 0; i < document.querySelectorAll('.software-sequence').length; i++) {
			document.querySelectorAll('.software-sequence').forEach((element, i) => {
				setTimeout(function () {
					// element.style.display = "block";
					element.style.visibility = "visible";
					element.style.width = "auto";
					daybreak.scroll.recalculatePageHeight();
				}, i * elementDelay);
			});
		}
		for (let i = 0; i < document.querySelectorAll('.brands-sequence').length; i++) {
			document.querySelectorAll('.brands-sequence').forEach((element, i) => {
				setTimeout(function () {
					// element.style.display = "none";
					element.style.visibility = "hidden";
				}, i * elementDelay);
			});
		}	
	}

	function brandsEnterDesktop() {
		var elementDelay = 250;
		for (let i = 0; i < document.querySelectorAll('.software-sequence').length; i++) {
			document.querySelectorAll('.software-sequence').forEach((element, i) => {
				setTimeout(function () {
					// element.style.display = "none";
					element.style.visibility = "hidden";
				}, i * elementDelay);
			});
		}
		for (let i = 0; i < document.querySelectorAll('.brands-sequence').length; i++) {
			document.querySelectorAll('.brands-sequence').forEach((element, i) => {
				setTimeout(function () {
					// element.style.display = "block";
					element.style.visibility = "visible";
					element.style.width = "auto";
					daybreak.scroll.recalculatePageHeight();
				}, i * elementDelay);
			});
		}
	}

	function softwareEnterMobile() {
		var elementDelay = 250;
		for (let i = 0; i < document.querySelectorAll('.software-sequence').length; i++) {
			document.querySelectorAll('.software-sequence').forEach((element, i) => {
				setTimeout(function () {
					// element.style.display = "block";
					element.style.visibility = "visible";
					element.style.width = "auto";
					daybreak.scroll.recalculatePageHeight();
				}, i * elementDelay);
			});
		}
	}

	function brandsEnterMobile() {
		var elementDelay = 250;
		for (let i = 0; i < document.querySelectorAll('.brands-sequence').length; i++) {
			document.querySelectorAll('.brands-sequence').forEach((element, i) => {
				setTimeout(function () {
					// element.style.display = "block";
					element.style.visibility = "visible";
					element.style.width = "auto";
					daybreak.scroll.recalculatePageHeight();
				}, i * elementDelay);
			});
		}
	}


	const {cleanupIntersectionObserver, onIntersectionChange} = createIntersectionObserver();

	const onElementEnter = (elm, callback) => {
		onIntersectionChange(elm,(entry)=> {
			entry.isIntersecting && callback()
		})
	}


	// enter carosell
	const afterCarousel = document.querySelector('#after-carousel');
	onElementEnter(afterCarousel, (entry)=>{
		classOfTheirOwnEnter();
	})

	const softwareEnter = document.querySelector('#software-enter');
	const brandsEnter = document.querySelector('#brands-enter');

	const mobileBreakpoint = 767;

	// enter software
	onElementEnter(softwareEnter, (entry)=>{
		if(window.innerWidth > mobileBreakpoint) {
			softwareEnterDesktop();
		} else {
			softwareEnterMobile();
		}
	})

	// enter brands
	onElementEnter(brandsEnter, (entry)=>{
		if(window.innerWidth > mobileBreakpoint) {
			brandsEnterDesktop();
		} else {
			brandsEnterMobile();
		}
	})

	// enter work with us
	const workWithUsEnter = document.querySelector('#work-with-us-enter');
	onElementEnter(workWithUsEnter, (entry)=>{
		triggerStaggerAnim(workWithUsEnter.children, {
				delay: 100, 
				styler: (style)=>{
					// style.display = "inline-block"
					style.visibility = "visible";
					style.width = "auto";
				}
			})
	})

	const cleanupDocumentSticky = enableAllStickyPosition();	
	function enableAllStickyPosition() {
		const stickyElm = document.querySelectorAll(".sticky");

		const cleanups = Array.from(stickyElm).map((elm)=>{
			return enableStickyPosition(elm);
		})
		
		return ()=> cleanups.forEach((cleanup)=>cleanup());
	}
	
	
	return ()=>{
		console.log("leaving about");
		cleanupLogoMinimizeOnScroll();
		resetHero();
		cleanupIntersectionObserver();
		cleanupDocumentSticky();
	}
})
