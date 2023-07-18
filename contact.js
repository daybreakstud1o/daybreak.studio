daybreak.router.useScript(()=>{
	// setTimeout(function() {
	// 	document.documentElement.scrollTop = 0;
	// }, 100);
	function animateInHero() {
		document.querySelector('html').style.scrollBehavior = 'auto'
		
		document.querySelector('.background').style.filter = 'invert(0)'
		for (let i = 0; i < document.querySelectorAll('.footer').length; i++) {
			document.querySelectorAll('.footer')[i].style.filter = 'invert(0)'
		}
		document.querySelector('.nav-container').style.filter = 'invert(0)'
		document.querySelector('#real-nav1').classList.remove("dark")
		document.querySelector('.nav-container').classList.add("transform")
		document.querySelector('html').classList.remove('open')
		document.querySelector('.nav-test').classList.remove("casestudy")
		document.querySelector('.nav-container').classList.remove("casestudy-bg")
		document.querySelector('#real-nav1').classList.remove("flesh-top-1","flesh-top-2","flesh-top-3")
		
		setTimeout(function() {
			document.querySelector('.daybreak-logo-big').classList.add("nav-logo--minimized");
		}, 450);
		document.querySelector('.nav-container').classList.remove("nav-home")
		document.querySelector('.nav-test').classList.add("close")
		setTimeout(function(){
			document.querySelector('.content').style.transform = 'translateY(0)'
			document.querySelector('.content').style.opacity = '1'
		}, 600)
		setTimeout(function() {
	    		document.querySelector('.nav-test').style.height = document.querySelector(".content").offsetHeight + 'px'
		}, 600);

		return ()=>{
				
				// delay one frame so that transition delay is in effect
				window.requestAnimationFrame(()=>{
				})
		}
	}
	const resetHero = animateInHero();
	
	
	  

	// function setupLogoMinimizeOnScroll() {
	// 	function minimizeLogo() {
	// 		document.querySelector('.nav-logo').classList.remove("nav-logo--expanded")
	// 	}
	// 	function maximizeLogo() {
	// 		document.querySelector('.nav-logo').classList.add("nav-logo--expanded")
	// 	}

	// 	const handleScroll =(scroll)=>{
	// 		// const scroll = window.scrollY;
	// 		if (scroll >= 100) {
	// 				minimizeLogo()
	// 		} else if (scroll < 100) {
	// 				maximizeLogo()
	// 		}
	// 	}
	// 	// window.addEventListener("scroll", handleScroll);
	// 	daybreak.scroll.observeScroll(handleScroll)

	// 	return ()=>{
	// 		minimizeLogo();
	// 		daybreak.scroll.unobserveScroll(handleScroll)
	// 		// window.removeEventListener("scroll", handleScroll);
	// 	}
	// }
	// const cleanupLogoMinimizeOnScroll = setupLogoMinimizeOnScroll();
		
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


 	// const {cleanupIntersectionObserver, onIntersectionChange} = createIntersectionObserver();

 // 	const mobileBreakpoint = 767;

	// const cleanupDocumentSticky = enableAllStickyPosition();	
	// function enableAllStickyPosition() {
	// 	const stickyElm = document.querySelectorAll(".sticky");

	// 	const cleanups = Array.from(stickyElm).map((elm)=>{
	// 		return enableStickyPosition(elm);
	// 	})
		
	// 	return ()=> cleanups.forEach((cleanup)=>cleanup());
	// }
	
	
	// return ()=>{
// 		console.log("leaving about");
		// cleanupLogoMinimizeOnScroll();
		// resetHero();
		// cleanupIntersectionObserver();
		// cleanupDocumentSticky();
	// }
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
