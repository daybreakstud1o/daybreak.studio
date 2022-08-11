router.useScript(()=>{

	// $(document).ready(function(){
		document.querySelector('.nav-logo').style.width = '55vw';
		document.querySelector('.nav-left .daybreak-info').style.opacity = '0';
		document.querySelector('.nav-left .cities-info').style.opacity = '0';
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
	// });

	function setupLogoMinimizeOnScroll() {
		const handleScroll =()=>{
			const scroll = window.scrollY;
			if (scroll >= 100) {
					document.querySelector('.nav-logo').style.width = '131px';
			} else if (scroll < 100) {
					document.querySelector('.nav-logo').style.width = '55vw';
			}
		}
		window.addEventListener("scroll", handleScroll);
		return ()=>{
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

	document.addEventListener('scroll', function () {
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
	}, {
			passive: true
	});



	const softwareEnter = document.querySelector('#software-enter');

	const brandsEnter = document.querySelector('#brands-enter');

	if ($(window).width() > 767) {
		document.addEventListener('scroll', function () {
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
		}, {
				passive: true
		});
		
		document.addEventListener('scroll', function () {
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
		}, {
				passive: true
		});
	} else {
		document.addEventListener('scroll', function () {
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
		}, {
				passive: true
		});
		
		document.addEventListener('scroll', function () {
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
		}, {
				passive: true
		});
	};

	const workWithUsEnter = document.querySelector('#work-with-us-enter');

	document.addEventListener('scroll', function () {
		if (isInViewport(workWithUsEnter) === true) {
			var elementDelay = 250;
			for (let i = 0; i < document.querySelectorAll('.work-with-us .heading-massive span').length; i++) {
				document.querySelectorAll('.work-with-us .heading-massive span').forEach((element, i) => {
					setTimeout(function () {
						element.style.display = "inline-block" ?? "";
					}, i * elementDelay);
				});
			}
		}
	}, {
			passive: true
	});

	return ()=>{
		console.log("clean up about")
		cleanupLogoMinimizeOnScroll();
	}
})

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

function createPoppingTextEffect(baseElm, elmDelay=250) {
	const wordElms = baseElm.children;
	for (let i = 0; i < wordElms.length; i++) {
		wordElms.forEach((element, i) => {
			setTimeout(()=> {
				element.style.display = "inline-block";
			}, i * elementDelay);
		});
	}
}