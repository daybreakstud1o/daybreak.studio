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

		const handleScroll =(scroll)=>{
			// const scroll = window.scrollY;
			if (scroll >= 100) {
					minimizeLogo()
			} else if (scroll < 100) {
					maximizeLogo()
			}
		}
		// window.addEventListener("scroll", handleScroll);
		window.daybreakScroll.observeScroll(handleScroll)

		return ()=>{
			minimizeLogo();
			window.daybreakScroll.unobserveScroll(handleScroll)
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

	function isInViewport(el, scroll) {
			const rect = el.getBoundingClientRect();
			return (
					rect.top - scroll >= 0 &&
					rect.left >= 0 &&
					rect.bottom - scroll <= (window.innerHeight || document.documentElement.clientHeight) &&
					rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
	}


	const afterCarousel = document.querySelector('#after-carousel');


	

	function classOfTheirOwnEnter() {
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

	function softwareEnterDesktop() {
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

	function brandsEnterDesktop() {
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

	function softwareEnterMobile() {
		var elementDelay = 250;
		for (let i = 0; i < document.querySelectorAll('.software-sequence').length; i++) {
			document.querySelectorAll('.software-sequence').forEach((element, i) => {
				setTimeout(function () {
					element.style.display = "block";
				}, i * elementDelay);
			});
		}
	}

	function brandsEnterMobile() {
		var elementDelay = 250;
		for (let i = 0; i < document.querySelectorAll('.brands-sequence').length; i++) {
			document.querySelectorAll('.brands-sequence').forEach((element, i) => {
				setTimeout(function () {
					element.style.display = "block";
				}, i * elementDelay);
			});
		}
	}


	const {cleanupIntersectionObserver, observeElementEntry} = createIntersectionObserver();
	observeElementEntry(afterCarousel, (entry)=>{
		classOfTheirOwnEnter();
	})

	const softwareEnter = document.querySelector('#software-enter');
	const brandsEnter = document.querySelector('#brands-enter');

	const mobileBreakpoint = 767;
	observeElementEntry(softwareEnter, ()=>{
		if(window.innerWidth > mobileBreakpoint) {
			brandsEnterDesktop();
		} else {
			brandsEnterMobile();
		}
	})

	observeElementEntry(brandsEnter, ()=>{
		if(window.innerWidth > mobileBreakpoint) {
			softwareEnterDesktop();
		} else {
			softwareEnterMobile();
		}
	})

	const workWithUsEnter = document.querySelector('#work-with-us-enter');
	observeElementEntry(workWithUsEnter, ()=>{
		triggerStaggerAnim(workWithUsEnter.children, {
				delay: 100, 
				styler: (style)=>{
					style.display = "inline-block"
				}
			})
	})
	
	return ()=>{
		console.log("leaving about");
		cleanupLogoMinimizeOnScroll();
		resetHero();
		cleanupIntersectionObserver();
	}
})


function createIntersectionObserver() {
	let options = {
		root: document.querySelector('.scroll-container'),
		rootMargin: '0px',
		threshold: 1.0
	}
	let observingCount = 0;
	const observingElementsCallback = {};
	const handleIntersectionChange = (entries, observer) => {
		entries.forEach((entry) => {
			// Each entry describes an intersection change for one observed
			// target element:
			//   entry.boundingClientRect
			//   entry.intersectionRatio
			//   entry.intersectionRect
			//   entry.isIntersecting
			//   entry.rootBounds
			//   entry.target
			//   entry.time
			if(entry.isIntersecting) {
				const intersectionId = entry.target.getAttribute("intersection-observer-id");
				observingElementsCallback[intersectionId](entry);
			}
		});
	};
	let observer = new IntersectionObserver(handleIntersectionChange, options);


	let abortCallbacks = []
	function observeElementEntry(element, callback) {
		const abort = onFullyLoaded(()=> {
			element.setAttribute("intersection-observer-id", observingCount);
			observingElementsCallback[observingCount] = callback;
			observer.observe(element);
			observingCount++;
		})
		abortCallbacks.push(abort);
	}

	function cleanupIntersectionObserver() {
		observer.disconnect();
		abortCallbacks.forEach((abort)=>abort());
	}

	return {
		observeElementEntry,
		cleanupIntersectionObserver
	}
}

function onFullyLoaded(callback) {
	let aborted = false;
	const abort = ()=> {
		aborted = true;
	};
	const invoke = ()=> {
		callback();
	}
	
	if (document.readyState !== "complete") {
		window.addEventListener("load", () => {
			if(!aborted) 
				invoke()
		});
	} else {
		//invoke right if body is loaded
		invoke();
	}

	return abort;
}