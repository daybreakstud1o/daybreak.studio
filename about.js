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

router.useScript(()=>{
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

	function setupLogoMinimizeOnScroll() {
		function minimizeLogo() {
			document.querySelector('.nav-logo').style.width = '131px';
		}
		function maximizeLogo() {
			document.querySelector('.nav-logo').style.width = '55vw';
		}

		const handleScroll =()=>{
			const scroll = window.scrollY;
			if (scroll >= 100) {
					minimizeLogo()
			} else if (scroll < 100) {
					maximizeLogo()
			}
		}
		window.addEventListener("scroll", handleScroll);
		return ()=>{
			minimizeLogo();
			window.removeEventListener("scroll", handleScroll);
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

	function isInViewport(el) {
			const rect = el.getBoundingClientRect();
			return (
					rect.top >= 0 &&
					rect.left >= 0 &&
					rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
					rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
	}


	const afterCarousel = document.querySelector('#after-carousel');

	
	const handlePageScroll = ()=> {
		
		if (isInViewport(afterCarousel) === true) {
			var elementDelay = 100;
				setTimeout(function () {
					for (let i = 0; i < document.querySelectorAll('.after-carousel .heading-massive span').length; i++) {
						document.querySelectorAll('.after-carousel .heading-massive span').forEach((element, i) => {
							setTimeout(function () {
								element.style.display = "inline-block" ?? "";
							}, i * elementDelay);
						});
					}
				}, 200);
		}



		const softwareEnter = document.querySelector('#software-enter');
		const brandsEnter = document.querySelector('#brands-enter');

		if ($(window).width() > 767) {
			if (isInViewport(softwareEnter) === true) {
				var elementDelay = 250;
				for (let i = 0; i < document.querySelectorAll('.software-sequence').length; i++) {
					document.querySelectorAll('.software-sequence').forEach((element, i) => {
						setTimeout(function () {
							element.style.display = "block";
						}, i * elementDelay);
					});
				}
				for (let i = 0; i < document.querySelectorAll('.brands-sequence').length; i++) {
					document.querySelectorAll('.brands-sequence').forEach((element, i) => {
						setTimeout(function () {
							element.style.display = "none";
						}, i * elementDelay);
					});
				}
			}
			
			if (isInViewport(brandsEnter) === true) {
				var elementDelay = 250;
				for (let i = 0; i < document.querySelectorAll('.software-sequence').length; i++) {
					document.querySelectorAll('.software-sequence').forEach((element, i) => {
						setTimeout(function () {
							element.style.display = "none";
						}, i * elementDelay);
					});
				}
				for (let i = 0; i < document.querySelectorAll('.brands-sequence').length; i++) {
					document.querySelectorAll('.brands-sequence').forEach((element, i) => {
						setTimeout(function () {
							element.style.display = "block";
						}, i * elementDelay);
					});
				}
			}
		} else {
			if (isInViewport(softwareEnter) === true) {
				var elementDelay = 250;
				for (let i = 0; i < document.querySelectorAll('.software-sequence').length; i++) {
					document.querySelectorAll('.software-sequence').forEach((element, i) => {
						setTimeout(function () {
							element.style.display = "block";
						}, i * elementDelay);
					});
				}
			}
			if (isInViewport(brandsEnter) === true) {
				var elementDelay = 250;
				for (let i = 0; i < document.querySelectorAll('.brands-sequence').length; i++) {
					document.querySelectorAll('.brands-sequence').forEach((element, i) => {
						setTimeout(function () {
							element.style.display = "block";
						}, i * elementDelay);
					});
				}
			}
		};

		const workWithUsEnter = document.querySelector('#work-with-us-enter');
		if (isInViewport(workWithUsEnter) === true) {
			triggerStaggerAnim(workWithUsEnter.children, {
				delay: 100, 
				styler: (style)=>{
					style.display = "inline-block"
				}
			})
			// triggerStaggerAnim(afterCarousel,{delay: 100, display:"inline-block"})
			// triggerTextAnim(workWithUsEnter, {useInlineBlock:true});
		}
	}

	document.addEventListener('scroll', handlePageScroll, {passive: true});

	return ()=>{
		console.log("leaving about");
		cleanupLogoMinimizeOnScroll();
		resetHero();
		document.removeEventListener("scroll", handlePageScroll, {passive: true});
	}
})

