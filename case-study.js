daybreak.router.useScript(()=>{
	setTimeout(function() {
		document.documentElement.scrollTop = 0;
	}, 100);
	console.log("enter case study");
	function animateInHero() {
		setTimeout(function() {
			document.querySelector('html').style.scrollBehavior = 'auto'
		}, 1000);

	   	document.documentElement.scrollTop = 0;
		setTimeout(function() {
			document.documentElement.scrollTop = 0;
		}, 100);
		document.querySelector('html').classList.remove('open')
		
		document.querySelector('.nav-test').classList.remove("close")

		document.querySelector('.background').style.filter = 'invert(0)'
		for (let i = 0; i < document.querySelectorAll('.footer').length; i++) {
			document.querySelectorAll('.footer')[i].style.filter = 'invert(0)'
		}
		document.querySelector('.nav-container').style.filter = 'invert(0)'
		document.querySelector('#real-nav1').classList.remove("dark")
		
		document.querySelector('.nav-container').classList.add("casestudy-bg")
		setTimeout(function() {
			document.querySelector('.daybreak-logo-big').classList.add("nav-logo--minimized");
		}, 450);
		document.querySelector('.nav-container').classList.remove("nav-home")
		document.querySelector('.nav-test').classList.add("casestudy")    
		setTimeout(function(){document.querySelector('.content').style.transform = 'translateY(0)';document.querySelector('.content').style.opacity = '1'}, 600)
		
		setTimeout(function() {
	    		document.querySelector('.nav-test').style.height = document.querySelector(".content").offsetHeight + 'px'
		}, 2500);
		
		const currentUrl = window.location.href;
		var slug = currentUrl.split("/");
		var project = slug[slug.length - 1]
		let full = document.querySelector('#full').offsetWidth + 'px'
		document.getElementsByClassName(project)[0].style.minWidth = full
		document.getElementsByClassName(project)[0].classList.add('casestudy-thumbnail-height')
		document.querySelector('.content').style.zIndex = '-1'
		
		for (let i = 0; i < document.querySelectorAll('.thumbnail-row').length; i++) {
		  document.querySelectorAll('.thumbnail-row')[i].classList.remove('flex-start','flex-end')
		}

		const caseStudyName = document.getElementById('casestudy-name')
		const caseStudyCategories = document.getElementById('casestudy-categories')
		const caseStudyPrevious = document.getElementById('casestudy-previous')
		const caseStudyNext = document.getElementById('casestudy-next')
		const casestudyNavCreditsContent = document.getElementById('casestudy-nav-credits-content')
		
		if (project == 'hypercard') {
			document.querySelectorAll('.thumbnail-row')[0].classList.add('flex-start')
			caseStudyName.innerHTML = 'Hypercard'
			caseStudyCategories.innerHTML = 'Brand | Product | Web'
			casestudyNavCreditsContent.innerHTML = `
			<div>
				<div class="body-founders white _100">
					Creative direction:
				<div>
				<div class="body-founders white _50">
					Taha Hossain
				<div>
			</div>
			<div>
				<div class="body-founders white _100">
					Design:
				<div>
				<div class="body-founders white _50">
					Aliasger Rasheed, Benya Sutyanyong, Zilin Deng, PJ Musselman
				<div>
			</div>
			<div>
				<div class="body-founders white _100">
					Tone and Voice:
				<div>
				<div class="body-founders white _50">
					Lovish Saini
				<div>
			</div>
			<div>
				<div class="body-founders white _100">
					Product:
				<div>
				<div class="body-founders white _50">
					Vanessa Bahk
				<div>
			</div>
			<div>
				<div class="body-founders white _100">
					3D:
				<div>
				<div class="body-founders white _50">
					Mario Domingas, Javier Pardina
				<div>
			</div>
			<div>
				<div class="body-founders white _100">
					Motion:
				<div>
				<div class="body-founders white _50">
					Ross Chan
				<div>
			</div>`
			caseStudyPrevious.innerHTML = 'Notes About People'
			caseStudyPrevious.href = '/notes-about-people'
			caseStudyNext.innerHTML = 'Wombo Dream'
			caseStudyNext.href = '/wombo-dream'
		} else if (project == 'wombo-dream') {
			document.querySelectorAll('.thumbnail-row')[0].classList.add('flex-end')
			caseStudyName.innerHTML = 'Wombo Dream'
			caseStudyCategories.innerHTML = 'Product'
			caseStudyPrevious.innerHTML = 'Hypercard'
			caseStudyPrevious.href = '/hypercard'
			caseStudyNext.innerHTML = 'Inspired'
			caseStudyNext.href = '/inspired'
		} else if (project == 'inspired') {
			document.querySelector('.thumbnails-wrapper').classList.add('flesh-top-1')
			document.querySelector('#real-nav1').classList.add("flesh-top-1")
			document.querySelectorAll('.thumbnail-row')[1].classList.add('flex-start')
			caseStudyName.innerHTML = 'Inspired'
			caseStudyCategories.innerHTML = 'Brand | Strategy | Web'
			caseStudyPrevious.innerHTML = 'Wombo Dream'
			caseStudyPrevious.href = '/wombo-dream'
			caseStudyNext.innerHTML = 'Prologue'
			caseStudyNext.href = '/prologue'
		} else if (project == 'prologue') {
			document.querySelector('.thumbnails-wrapper').classList.add('flesh-top-1')
			document.querySelector('#real-nav1').classList.add("flesh-top-1")
			document.querySelectorAll('.thumbnail-row')[1].classList.add('flex-end')
			caseStudyName.innerHTML = 'Prologue'
			caseStudyCategories.innerHTML = 'Brand | Strategy | Product'
			caseStudyPrevious.innerHTML = 'Inspired'
			caseStudyPrevious.href = '/inspired'
			caseStudyNext.innerHTML = 'Curated'
			caseStudyNext.href = '/curated'
		} else if (project == 'curated') {
			document.querySelector('.thumbnails-wrapper').classList.add('flesh-top-2')
			document.querySelector('#real-nav1').classList.add("flesh-top-2")
			document.querySelectorAll('.thumbnail-row')[2].classList.add('flex-start')
			caseStudyName.innerHTML = 'Curated'
			caseStudyCategories.innerHTML = 'Brand | Strategy | Copywriting'
			caseStudyPrevious.innerHTML = 'Prologue'
			caseStudyPrevious.href = '/prologue'
			caseStudyNext.innerHTML = 'Workweek'
			caseStudyNext.href = '/workweek'
		} else if (project == 'workweek') {
			document.querySelector('.thumbnails-wrapper').classList.add('flesh-top-2')
			document.querySelector('#real-nav1').classList.add("flesh-top-2")
			document.querySelectorAll('.thumbnail-row')[2].classList.add('flex-end')
			caseStudyName.innerHTML = 'Workweek'
			caseStudyCategories.innerHTML = 'Brand | Web'
			caseStudyPrevious.innerHTML = 'Curated'
			caseStudyPrevious.href = '/curated'
			caseStudyNext.innerHTML = 'Party Round'
			caseStudyNext.href = '/party-round'
		} else if (project == 'party-round') {
			document.querySelector('.thumbnails-wrapper').classList.add('flesh-top-3')
			document.querySelector('#real-nav1').classList.add("flesh-top-3")
			document.querySelectorAll('.thumbnail-row')[3].classList.add('flex-start')
			caseStudyName.innerHTML = 'Party Round'
			caseStudyCategories.innerHTML = 'Brand'
			caseStudyPrevious.innerHTML = 'Workweek'
			caseStudyPrevious.href = '/workweek'
			caseStudyNext.innerHTML = 'Notes About People'
			caseStudyNext.href = '/notes-about-people'
		} else if (project == 'notes-about-people') {
			document.querySelector('.thumbnails-wrapper').classList.add('flesh-top-3')
			document.querySelector('#real-nav1').classList.add("flesh-top-3")
			document.querySelectorAll('.thumbnail-row')[3].classList.add('flex-end')
			caseStudyName.innerHTML = 'Notes About People'
			caseStudyCategories.innerHTML = 'Product | Visual identity'
			caseStudyPrevious.innerHTML = 'Party Round'
			caseStudyPrevious.href = '/party-round'
			caseStudyNext.innerHTML = 'Hypercard'
			caseStudyNext.href = '/hypercard'
		} 

		
// 		setTimeout(function() {
// 			var outroTop = window.pageYOffset + document.querySelector('.outro-placeholder').getBoundingClientRect().top
// 			if (project == 'hypercard') {
// 				next('pager')
// 			} else if (project == 'pager') {	
// 				next('capital')
// 			} 
// 			function next(project) {
// 				document.getElementById(project).classList.add('full')
// 				document.getElementById(project).style.top = outroTop + 'px'	
// 			}
// 		}, 1000);
		
		document.querySelectorAll('.thumbnail').forEach((element) => {
		  element.style.opacity = '0'
		  element.style.pointerEvents = 'none'
		});
		document.querySelector('.thumbnail-content #footer').style.opacity = '0'
		document.getElementsByClassName(project)[0].style.opacity = '1'
		
		
		
		
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
				document.querySelector('.nav-test').classList.remove("casestudy","short")
				document.querySelector('.nav-container').classList.remove("casestudy-bg")
				document.querySelector('#real-nav1').classList.remove("flesh-top-1","flesh-top-2")
				document.querySelector('.content').style.zIndex = 'auto'
			
				document.querySelector('.thumbnails-wrapper').classList.remove('flesh-top-1','flesh-top-2','flesh-top-3')
				document.querySelector('#real-nav1').classList.remove('flesh-top-1','flesh-top-2','flesh-top-3')
				document.getElementsByClassName('hypercard')[0].classList.remove('full')
				document.getElementsByClassName('hypercard')[0].style.top = 'auto'
				document.getElementsByClassName('wombo-dream')[0].classList.remove('full')
				document.getElementsByClassName('wombo-dream')[0].style.top = 'auto'
				document.getElementsByClassName('inspired')[0].classList.remove('full')
				document.getElementsByClassName('inspired')[0].style.top = 'auto'
				document.getElementsByClassName('prologue')[0].classList.remove('full')
				document.getElementsByClassName('prologue')[0].style.top = 'auto'
				document.getElementsByClassName('curated')[0].classList.remove('full')
				document.getElementsByClassName('curated')[0].style.top = 'auto'
				document.getElementsByClassName('workweek')[0].classList.remove('full')
				document.getElementsByClassName('workweek')[0].style.top = 'auto'
				document.getElementsByClassName('party-round')[0].classList.remove('full')
				document.getElementsByClassName('party-round')[0].style.top = 'auto'
				document.getElementsByClassName('notes-about-people')[0].classList.remove('full')
				document.getElementsByClassName('notes-about-people')[0].style.top = 'auto'
				document.querySelector(".casestudy-nav-indicator").innerHTML = ''

			
				let small = document.querySelector('#small').offsetWidth + 'px'
		    		let big = document.querySelector('#big').offsetWidth + 'px'
		    		let half = document.querySelector('#half').offsetWidth + 'px'
				document.querySelectorAll('.thumbnail-row .small').forEach((element) => {
				  element.style.minWidth = small
				  element.style.opacity = '1'
				  element.style.pointerEvents = 'all'
				  element.classList.remove('casestudy-thumbnail-height')
				});
				document.querySelectorAll('.thumbnail-row .big').forEach((element) => {
				  element.style.minWidth = big
				  element.style.opacity = '1'
				  element.style.pointerEvents = 'all'
				  element.classList.remove('casestudy-thumbnail-height')
				});
				document.querySelectorAll('.thumbnail-row .half').forEach((element) => {
				  element.style.minWidth = half
				  element.style.opacity = '1'
				  element.style.pointerEvents = 'all'
				  element.classList.remove('casestudy-thumbnail-height')
				});
				
// 				document.querySelector('.background').classList.remove("dark")
// 				document.querySelector('.nav-container').classList.remove("dark","transform")
// 				document.querySelector('.daybreak-logo-big').classList.remove("nav-logo--minimized");
// 				document.querySelector('.nav-test').classList.remove("close","dark")
// 				document.querySelector('.content').style.transform = 'translateY(40vh)'
// 				document.querySelector('.animate-test').classList.remove('fuck')
		}
	}
	const resetHero = animateInHero();
	
	$( "#casestudy-menu-open" ).on( "click", function() {
		document.querySelector('html').classList.add('open')
	} );
	$( "#casestudy-menu-close" ).on( "click", function() {
		document.querySelector('html').classList.remove('open')
	} );

	
	document.querySelector(".casestudy-nav-indicator").innerHTML = ''
	document.querySelectorAll('.casestudy-container').forEach(function(currentElement, index) {
		const navItem = document.createElement("div")
		navItem.classList.add('casestudy-nav-indicator-item', 'hover-target-big')
		document.querySelector(".casestudy-nav-indicator").appendChild(navItem)
		
		// $( window ).on( "scroll", function() {
		//   	var topPos = currentElement.getBoundingClientRect().top
		// 	if (topPos <= 0) {
		// 		for (let i = 0; i < document.querySelectorAll(".casestudy-nav-indicator-item").length; i++) {
		// 			document.querySelectorAll(".casestudy-nav-indicator-item")[i].style.opacity = '0.2'
		// 		}
		// 		// console.log(document.querySelectorAll(".casestudy-nav-indicator-item")[index])
		// 		// console.log(index)
		// 		document.querySelectorAll(".casestudy-nav-indicator-item")[index].style.opacity = '1'
		// 	}
		// } );
	})

	$( window ).on( "scroll", function() {
		document.querySelectorAll('.casestudy-container').forEach(function(currentElement, index) {
			var topPos = currentElement.getBoundingClientRect().top
			if (topPos <= 0) {
				for (let i = 0; i < document.querySelectorAll(".casestudy-nav-indicator-item").length; i++) {
					document.querySelectorAll(".casestudy-nav-indicator-item")[i].style.opacity = '0.2'
				}
				document.querySelectorAll(".casestudy-nav-indicator-item")[index].style.opacity = '1'
			}
		})
	})

	
	document.querySelector(".casestudy-nav--info").classList.add("intro")
	document.querySelector(".casestudy-nav--info").classList.remove("problem","solution","credits")
	document.querySelector("#intro-button").onclick = function() {
		document.querySelector(".casestudy-nav--info").classList.remove("problem","solution","credits")
		document.querySelector(".casestudy-nav--info").classList.add("intro")
	};
	document.querySelector("#problem-button").onclick = function() {
		document.querySelector(".casestudy-nav--info").classList.remove("intro","solution","credits")
		document.querySelector(".casestudy-nav--info").classList.add("problem")
	};
	document.querySelector("#solution-button").onclick = function() {
		document.querySelector(".casestudy-nav--info").classList.remove("intro","problem","credits")
		document.querySelector(".casestudy-nav--info").classList.add("solution")
	};
	document.querySelector("#credits-button").onclick = function() {
		document.querySelector(".casestudy-nav--info").classList.remove("intro","problem","solution")
		document.querySelector(".casestudy-nav--info").classList.add("credits")
	};
	

	
	// document.querySelectorAll('.about-carousel').forEach((element, i) => {
	  
	//   let isDown = false;
	//   let startX;
	//   let scrollLeft;

	//   element.addEventListener('mousedown', (e) => {
	//     isDown = true;
	//     //slider.classList.add('active');
	//     startX = e.pageX - element.offsetLeft;
	//     scrollLeft = element.scrollLeft;
	//     cancelMomentumTracking();
	//   });


	//   element.addEventListener('mouseleave', () => {
	//     isDown = false;
	//     //slider.classList.remove('active');
	//   });


	//   element.addEventListener('mouseup', () => {
	//     isDown = false;
	//     //slider.classList.remove('active');
	//     beginMomentumTracking();
	//   });


	//   element.addEventListener('mousemove', (e) => {
	//     if(!isDown) return;
	//     e.preventDefault();
	//     const x = e.pageX - element.offsetLeft;
	//     const walk = (x - startX) * 1; //scroll-fast
	//     var prevScrollLeft = element.scrollLeft;
	//     element.scrollLeft = scrollLeft - walk;
	//     velX = element.scrollLeft - prevScrollLeft;
	//   });

	//   // Momentum 

	//   var velX = 0;
	//   var momentumID;

	//   element.addEventListener('wheel', (e) => {
	//     cancelMomentumTracking();
	//   });  

	//   function beginMomentumTracking(){
	//     cancelMomentumTracking();
	//     momentumID = requestAnimationFrame(momentumLoop);
	//   }
	//   function cancelMomentumTracking(){
	//     cancelAnimationFrame(momentumID);
	//   }
	//   function momentumLoop(){
	//     element.scrollLeft += velX;
	//     velX *= 0.97; 
	//     if (Math.abs(velX) > 0.5){
	//       momentumID = requestAnimationFrame(momentumLoop);
	//     }
	//   }
	// });
	  

	// function setupLogoMinimizeOnScroll() {
	// 	function minimizeLogo() {
	// 		//document.querySelector('.nav-logo').classList.remove("nav-logo--expanded")
	// 	}
	// 	function maximizeLogo() {
	// 		//document.querySelector('.nav-logo').classList.add("nav-logo--expanded")
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
	// 		//daybreak.scroll.unobserveScroll(handleScroll)
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

 	// const mobileBreakpoint = 767;

	// const cleanupDocumentSticky = enableAllStickyPosition();	
	// function enableAllStickyPosition() {
	// 	const stickyElm = document.querySelectorAll(".sticky");

	// 	const cleanups = Array.from(stickyElm).map((elm)=>{
	// 		return enableStickyPosition(elm);
	// 	})
		
	// 	return ()=> cleanups.forEach((cleanup)=>cleanup());
	// }
	
	
	
	return ()=>{
		// console.log("leaving about");
		// cleanupLogoMinimizeOnScroll();
		resetHero();
		// cleanupIntersectionObserver();
		// cleanupDocumentSticky();
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
