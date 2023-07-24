daybreak.router.useScript(()=>{
	// setTimeout(function() {
	// 	document.documentElement.scrollTop = 0;
	// }, 100);
	function animateInHero() {
		document.querySelector('html').style.scrollBehavior = 'auto'

		//document.querySelector('.background').classList.add("dark")
		//document.querySelector('.footer').classList.add("dark")
		//document.querySelector('.nav-container').classList.add("dark","transform")
		document.querySelector('.background').style.filter = 'invert(0.9)'
		for (let i = 0; i < document.querySelectorAll('.footer').length; i++) {
			document.querySelectorAll('.footer')[i].style.filter = 'invert(1) hue-rotate(180deg)'
		}
		document.querySelector('.nav-container').style.filter = 'invert(1)'
		document.querySelector('#real-nav1').classList.add("dark")
		document.querySelector('.nav-container').classList.add("transform")
		document.querySelector('html').classList.remove('open')
		document.querySelector('.nav-test').classList.remove("casestudy")
		document.querySelector('.nav-container').classList.remove("casestudy-bg")
		document.querySelector('#real-nav1').classList.remove("flesh-top-1","flesh-top-2","flesh-top-3")
		
		setTimeout(function() {
			document.querySelector('.daybreak-logo-big').classList.add("nav-logo--minimized");
		}, 450);
		document.querySelector('.nav-container').classList.remove("nav-home")
		//document.querySelector('.nav-test').classList.add("close","dark")
		document.querySelector('.nav-test').classList.add("close")

		setTimeout(function(){document.querySelector('.content').style.transform = 'translateY(0)';document.querySelector('.content').style.opacity = '1'}, 600)
		
		setTimeout(function() {
	    		document.querySelector('.nav-test').style.height = document.querySelector(".content").offsetHeight + 'px'
		}, 600);
		
		let wide = document.querySelector('#image-size-1').offsetWidth + 'px'
    	let narrow = document.querySelector('#image-size-2').offsetWidth + 'px'

		document.querySelectorAll('.about-carousel .wide').forEach((element) => {
		  element.style.minWidth = wide
		})
		document.querySelectorAll('.about-carousel .narrow').forEach((element) => {
		  element.style.minWidth = narrow
		})
		


		var list = document.querySelectorAll('.wordmarks-wrapper .wordmark-wrapper')
		var Arr = Array.prototype.slice.call(list).sort((a, b) => 0.5 - Math.random());
		var visible = Arr.splice(0,9)
		var invisible = Arr.slice(-5)

		visible.forEach((item, index) => {
		    var n = index + 1
		    item.style.gridArea = 'Area-' + n
		    item.setAttribute('area', 'Area-' + n)
		})
		invisible.forEach((item, index) => {
		    item.style.opacity = '0'
		    item.setAttribute('area', '')
		})

		function changeLogo() {
			var random = visible.sort(() => .5 - Math.random()).slice(0,3)
			var random1 = invisible.sort(() => .5 - Math.random()).slice(0,3)

			random.forEach((item) => {
			const index = visible.indexOf(item)
		    if (index > -1) { 
		      visible.splice(index, 1) 
		    }
		    invisible.push(item)
			})
		  random1.forEach((item) => {
			const index = invisible.indexOf(item)
		    if (index > -1) { 
		      invisible.splice(index, 1) 
		    }
		    visible.push(item)
			})

		  return [random,random1]
		}
		var interval1 = 300
		sdhjdsdfhj()
		var myInterval1 = setInterval(sdhjdsdfhj, interval1 * 10);
	

		function sdhjdsdfhj() {
		  var items = changeLogo()
		  var visibleList = items[0]
		  var invisibleList = items[1]
		  var fml0 = visibleList[0].getAttribute('area')
		  var fml1 = visibleList[1].getAttribute('area')
		  var fml2 = visibleList[2].getAttribute('area')

		  setTimeout(function () { appear('0') }, interval1 * 1)
		  setTimeout(function () { appear('1') }, interval1 * 2)
		  setTimeout(function () { appear('2') }, interval1 * 3)
		  setTimeout(function () { disappear('0') }, interval1 * 4)
		  setTimeout(function () { disappear('1') }, interval1 * 5)
		  setTimeout(function () { disappear('2') }, interval1 * 6)

		  function appear(node) {
			visibleList[node].style.opacity = '0'
		    visibleList[node].style.gridArea = ''
		    visibleList[node].setAttribute('area', '')
		  }
		  function disappear(node) {
			invisibleList[node].style.opacity = '1'
			invisibleList[node].style.gridArea = eval('fml' + node)
		    invisibleList[node].setAttribute('area', eval('fml' + node))
		  }
		}
		
		

		return ()=>{
				
				window.requestAnimationFrame(()=>{
				})
				//document.querySelector('.footer').classList.remove("dark")

		}
	}
	const resetHero = animateInHero();

	const currentUrl = window.location.href;
	var slug = currentUrl.split("/");
	var project = slug[slug.length - 1]

	
	// addEventListener("scroll", (event) => {
	// 	var brandTop = document.querySelector('#brand-identity').getBoundingClientRect().top
	// 	var productTop = document.querySelector('#product-design').getBoundingClientRect().top
	// 	if (brandTop > 400) {
	// 	  document.querySelector('#brand-identity-selector').style.opacity = '0.5'
	// 	  document.querySelector('#product-design-selector').style.opacity = '0.5'
	// 	} 
	// 	if (brandTop <= 400) {
	// 	  document.querySelector('#brand-identity-selector').style.opacity = '1'
	// 	  document.querySelector('#product-design-selector').style.opacity = '0.5'
	// 	} 
	// 	if (productTop <= 400) {
	// 	  document.querySelector('#brand-identity-selector').style.opacity = '0.5'
	// 	  document.querySelector('#product-design-selector').style.opacity = '1'
	// 	} 
	// });
	
	
	
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

	if ($(window).width() <= 767) {
		document.querySelectorAll('.daybreak-brief-grid-item-1').forEach((element, i) => {
			element.style.display = 'grid'
			element.style.gridTemplateRows = '20px 0fr'
			document.querySelectorAll('.daybreak-brief-grid-item-1 > ._100')[i].innerHTML = document.querySelectorAll('.daybreak-brief-grid-item-1 > ._100')[i].innerHTML.slice(0,-4)
			document.querySelectorAll('.daybreak-brief-grid-item-1 > ._100')[i].innerHTML += ' (+)'
			document.querySelectorAll('.daybreak-brief-grid-item-1 > ._50')[i].style.overflow = "hidden"
			element.style.gridTemplateRows = '20px 0fr'
			document.querySelectorAll('.daybreak-brief-grid-item-1 > ._100')[i].addEventListener("click", (event) => {
				closeDrawer()
				element.style.gridTemplateRows = '20px 1fr'
				document.querySelectorAll('.daybreak-brief-grid-item-1 > ._100')[i].innerHTML = document.querySelectorAll('.daybreak-brief-grid-item-1 > ._100')[i].innerHTML.slice(0,-4)
				document.querySelectorAll('.daybreak-brief-grid-item-1 > ._100')[i].style.pointerEvents = 'none'
			})
			function closeDrawer() {
				for (let j = 0; j < document.querySelectorAll('.daybreak-brief-grid-item-1').length; j++) {
					document.querySelectorAll('.daybreak-brief-grid-item-1')[j].style.gridTemplateRows = '20px 0fr'
					document.querySelectorAll('.daybreak-brief-grid-item-1 > ._100')[j].innerHTML = document.querySelectorAll('.daybreak-brief-grid-item-1 > ._100')[j].innerHTML.slice(0,-4)
					document.querySelectorAll('.daybreak-brief-grid-item-1 > ._100')[j].innerHTML += ' (+)'
					document.querySelectorAll('.daybreak-brief-grid-item-1 > ._100')[j].style.pointerEvents = 'all'
				}
			}
		})
	}
	  

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

// function enableStickyPosition(element) {

// 	const computedElmStyle = window.getComputedStyle(element, null);

// 	const stickyTop = parseInt(computedElmStyle.top);
// 	const elementHeight = parseInt(computedElmStyle.height);

// 	const stickyObserver = createIntersectionObserver({
// 		rootMargin: `0px 0px 0px 0px`,
// 		threshold: [0.0, 1.0]
// 	});

// 	// start calculating scroll when the element on screen
// 	const handleScroll = (scrollProgress)=>{
// 		const parentOffsetBound = element.parentElement.getBoundingClientRect();

// 		const stickyOffsetValue = -parentOffsetBound.top + stickyTop;
// 		const stickyBottomPosition = stickyOffsetValue + elementHeight;

// 		// before the sticky area
// 		if(stickyOffsetValue < 0) {
// 			// reset when before the sticking point
// 			element.style.transform = `translateY(0px)`;
// 			return;
// 		} 

// 		// over the sticky area
// 		if(stickyBottomPosition > parentOffsetBound.height) {
// 			// allow the element to scroll like other element,
// 			// aka not doing any compensation
// 			return;
// 		}
		
// 		// withing the sticky area
// 		// compensate the y position to make it always in one position
// 		element.style.transform = `translateY(${stickyOffsetValue}px)`;
// 	}

// 	stickyObserver.onIntersectionChange(element, (entry)=>{

// 		if(entry.intersectionRatio === 1) {
// 			daybreak.scroll.observeScroll(handleScroll);
// 		}

// 		if(entry.intersectionRatio === 0) {
// 			daybreak.scroll.unobserveScroll(handleScroll);
// 		}
// 	})

// 	return ()=>{
// 		stickyObserver.cleanupIntersectionObserver()
// 	}
// }


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