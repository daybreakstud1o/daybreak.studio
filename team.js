// function breakIntoSpan(baseElm) {
// 	const content = baseElm.innerHTML;
// 	const words = content.split(" ");
// 	const wordSpans = words.map((word)=>{
// 		const spanElm = document.createElement("span");
// 		span.innerHTML = word;
// 		return spanElm;
// 	})
// 	return wordSpans;
// }

// function triggerStaggerAnim(wordElms, {delay=250, styler= (style)=>{ style.display = "block"}}) {
// 	for (let i = 0; i<wordElms.length; i++) {
// 		const elm = wordElms[i];
// 		setTimeout(()=> {
// 			styler(elm.style);
// 		}, i * delay);
// 	}
// }

// function test() {

// }

daybreak.router.useScript(()=>{
	console.log("enter team");
	function animateInHero() {
		var body = document.body,
		    html = document.documentElement;
		
		var windowHeight = Math.max( body.scrollHeight, body.offsetHeight, 
		    			html.clientHeight, html.scrollHeight, html.offsetHeight );
		document.querySelector('.nav-test').style.height = windowHeight + 'px'
//		document.querySelector('.animate-test').classList.add('fuck')
// 		$(window).scroll(function (event) {
// 		    document.querySelector('.animate-test').style.top = '0!important'
// 		});
		
		document.querySelector('.background').classList.remove("dark")
		document.querySelector('.nav-container').classList.remove("dark")
		document.querySelector('.nav-test').classList.remove("dark")
		
		document.querySelector('.nav-container').classList.add("transform")
		setTimeout(function() {
			document.querySelector('.daybreak-logo-big').classList.add("nav-logo--minimized");
		}, 450);
		document.querySelector('.nav-container').classList.remove("nav-home")
		document.querySelector('.nav-test').classList.add("close")
		setTimeout(function(){document.querySelector('.content').style.transform = 'translateY(0)'}, 600)
		let wide = document.querySelector('#image-size-1').offsetWidth + 'px'
    		let narrow = document.querySelector('#image-size-2').offsetWidth + 'px'
		document.querySelectorAll('.about-carousel > *').forEach((element) => {
		  element.setAttribute("sizes", "")
		});
		document.querySelectorAll('.about-carousel .wide').forEach((element) => {
		  element.style.minWidth = wide
		});
		document.querySelectorAll('.about-carousel .narrow').forEach((element) => {
		  element.style.minWidth = narrow
		});
		
		
// 		setTimeout(function() {
// 			var elementDelay = 250;
// 			for (let i = 0; i < document.querySelectorAll('.about-hero-split-item').length; i++) {
// 				document.querySelectorAll('.about-hero-split-item').forEach((element, i) => {
// 					setTimeout(function () {
// 						element.style.opacity = "1";
// 					}, i * elementDelay);
// 				});
// 			}
// 		}, 200);

		return ()=>{
				
				// delay one frame so that transition delay is in effect
				window.requestAnimationFrame(()=>{
				})
// 				document.querySelector('.background').classList.remove("dark")
// 				document.querySelector('.nav-container').classList.remove("dark","transform")
// 				document.querySelector('.daybreak-logo-big').classList.remove("nav-logo--minimized");
// 				document.querySelector('.nav-test').classList.remove("close","dark")
// 				document.querySelector('.content').style.transform = 'translateY(40vh)'
// 				document.querySelector('.animate-test').classList.remove('fuck')
		}
	}
	const resetHero = animateInHero();
	
	document.querySelectorAll('.about-carousel').forEach((element, i) => {
	  
	  let isDown = false;
	  let startX;
	  let scrollLeft;

	  element.addEventListener('mousedown', (e) => {
	    isDown = true;
	    //slider.classList.add('active');
	    startX = e.pageX - element.offsetLeft;
	    scrollLeft = element.scrollLeft;
	    cancelMomentumTracking();
	  });


	  element.addEventListener('mouseleave', () => {
	    isDown = false;
	    //slider.classList.remove('active');
	  });


	  element.addEventListener('mouseup', () => {
	    isDown = false;
	    //slider.classList.remove('active');
	    beginMomentumTracking();
	  });


	  element.addEventListener('mousemove', (e) => {
	    if(!isDown) return;
	    e.preventDefault();
	    const x = e.pageX - element.offsetLeft;
	    const walk = (x - startX) * 1; //scroll-fast
	    var prevScrollLeft = element.scrollLeft;
	    element.scrollLeft = scrollLeft - walk;
	    velX = element.scrollLeft - prevScrollLeft;
	  });

	  // Momentum 

	  var velX = 0;
	  var momentumID;

	  element.addEventListener('wheel', (e) => {
	    cancelMomentumTracking();
	  });  

	  function beginMomentumTracking(){
	    cancelMomentumTracking();
	    momentumID = requestAnimationFrame(momentumLoop);
	  }
	  function cancelMomentumTracking(){
	    cancelAnimationFrame(momentumID);
	  }
	  function momentumLoop(){
	    element.scrollLeft += velX;
	    velX *= 0.97; 
	    if (Math.abs(velX) > 0.5){
	      momentumID = requestAnimationFrame(momentumLoop);
	    }
	  }
	});
	  

	function setupLogoMinimizeOnScroll() {
		function minimizeLogo() {
			document.querySelector('.nav-logo').classList.remove("nav-logo--expanded")
		}
		function maximizeLogo() {
			document.querySelector('.nav-logo').classList.add("nav-logo--expanded")
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


 	const {cleanupIntersectionObserver, onIntersectionChange} = createIntersectionObserver();

 	const mobileBreakpoint = 767;

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

function enableStickyPosition(element) {

	const computedElmStyle = window.getComputedStyle(element, null);

	const stickyTop = parseInt(computedElmStyle.top);
	const elementHeight = parseInt(computedElmStyle.height);

	const stickyObserver = createIntersectionObserver({
		rootMargin: `0px 0px 0px 0px`,
		threshold: [0.0, 1.0]
	});

	// start calculating scroll when the element on screen
	const handleScroll = (scrollProgress)=>{
		const parentOffsetBound = element.parentElement.getBoundingClientRect();

		const stickyOffsetValue = -parentOffsetBound.top + stickyTop;
		const stickyBottomPosition = stickyOffsetValue + elementHeight;

		// before the sticky area
		if(stickyOffsetValue < 0) {
			// reset when before the sticking point
			element.style.transform = `translateY(0px)`;
			return;
		} 

		// over the sticky area
		if(stickyBottomPosition > parentOffsetBound.height) {
			// allow the element to scroll like other element,
			// aka not doing any compensation
			return;
		}
		
		// withing the sticky area
		// compensate the y position to make it always in one position
		element.style.transform = `translateY(${stickyOffsetValue}px)`;
	}

	stickyObserver.onIntersectionChange(element, (entry)=>{

		if(entry.intersectionRatio === 1) {
			daybreak.scroll.observeScroll(handleScroll);
		}

		if(entry.intersectionRatio === 0) {
			daybreak.scroll.unobserveScroll(handleScroll);
		}
	})

	return ()=>{
		stickyObserver.cleanupIntersectionObserver()
	}
}


function createIntersectionObserver(config = {rootMargin: '0px', threshold: 1.0}) {
	
	let options = {
		root: document.querySelector('.scroll-container'),
		rootMargin: (config && config.rootMargin) || "0px",
		threshold: (config && config.threshold) || 1.0
	}
	let entryCallbackCount = 0;
	const elementEntryCallback = {};
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
			const intersectionId = entry.target.getAttribute("intersection-observer-id");
			elementEntryCallback[intersectionId](entry);
		});
	};
	let observer = new IntersectionObserver(handleIntersectionChange, options);
	
	let abortCallbacks = []
	function onIntersectionChange(element, callback) {
		const abort = onFullyLoaded(()=> {
			element.setAttribute("intersection-observer-id", entryCallbackCount);
			elementEntryCallback[entryCallbackCount] = callback;
			observer.observe(element);
			entryCallbackCount++;
		})
		abortCallbacks.push(abort);
	}

	function cleanupIntersectionObserver() {
		observer.disconnect();
		abortCallbacks.forEach((abort)=>abort());
	}

	return {
		onIntersectionChange,
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
