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

function test() {

}
//		document.querySelector('.animate-test').style.top = '0!important'

daybreak.router.useScript(()=>{
	console.log("enter about");
//	document.body.scrollTop = 0;
//  	document.documentElement.scrollTop = 0;
// 		document.querySelector('.animate-test').style.top = '0!important'
	function animateInHero() {
		var body = document.body,
		    html = document.documentElement;

		var windowHeight = Math.max( body.scrollHeight, body.offsetHeight, 
		    			html.clientHeight, html.scrollHeight, html.offsetHeight );
		document.querySelector('.nav-test').style.height = windowHeight + 'px'
//		document.querySelector('.animate-test').style.top = '0!important'
//		document.querySelector('.animate-test').classList.add('fuck')
// 		$(window).scroll(function (event) {
// 		    document.querySelector('.animate-test').style.top = '0!important'
// 		});
		document.querySelector('.background').classList.add("dark")
		document.querySelector('.footer').classList.add("dark")
		document.querySelector('.nav-container').classList.add("dark","transform")
		setTimeout(function() {
			document.querySelector('.daybreak-logo-big').classList.add("nav-logo--minimized");
		}, 450);
		document.querySelector('.nav-container').classList.remove("nav-home")
		document.querySelector('.nav-test').classList.add("close","dark")
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
		
		
		
		var interval = 6000
		var one, two, three, four, five, six;
		shift()
		var myInterval = setInterval(shift, interval * 4);
		function shift() {
			  move('0','brands')
			  one = setTimeout(function(){ 
			    move('1','brands')
		          }, interval);
		   	  two = setTimeout(function(){ 
			    move('2','brands')
		          }, interval * 2);
			  three = setTimeout(function(){ 
			    move('3','brands')
		          }, interval * 3);
			
			  move('0','software')
			  four = setTimeout(function(){ 
			    move('1','software')
		          }, interval);
		   	  five = setTimeout(function(){ 
			    move('2','software')
		          }, interval * 2);
			  six = setTimeout(function(){ 
			    move('3','software')
		          }, interval * 3);
		}
		
		function move(i,type) {
			var elm = document.querySelectorAll('#'+type+'-selector .about-selector--item')[i]
			var bar = document.querySelector('#'+type+'-selector .progress-bar')
			var push = elm.offsetTop
			var height = document.querySelectorAll('#'+type+'-selector .item-height')[i].offsetHeight + "px"

			  if (i == '0') {
			    document.querySelector('#'+type+'-selector .progress-bar-wrapper').style.top = push + "px"
			  } else {
			  var descHeight = document.querySelectorAll('#'+type+'-selector .about-selector--item .desc')[i-1].offsetHeight
			    document.querySelector('#'+type+'-selector .progress-bar-wrapper').style.top = (push - descHeight) + "px"
			  }
			  for (let x = 0; x < document.querySelectorAll('#'+type+'-selector .about-selector--item').length; x++) {
				document.querySelectorAll('#'+type+'-selector .about-selector--item')[x].style.height = document.querySelectorAll('#'+type+'-selector .body-founders._100')[x].offsetHeight + "px"
			  }

			  elm.style.height = height
			  bar.animate(
			    [
			      { transform: "translateY(-100%)" },
			      { transform: "translateY(0%)" },
			    ],
			    {
			      duration: interval,
			      iterations: 1,
			    }
			  );

			  document.querySelector('#'+type+'-selector .progress-bar-wrapper').style.height = height
			  document.querySelectorAll('.'+type+ '-img img').forEach((item, index) => {
			    item.style.zIndex = '-1'
			  })
			  document.querySelector('#'+type+ '-' + i).style.zIndex = '2'
		}
		
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
		
		
		
		setTimeout(function() {
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
				
				// delay one frame so that transition delay is in effect
				window.requestAnimationFrame(()=>{
				})
// 				document.querySelector('.background').classList.remove("dark")
// 				document.querySelector('.nav-container').classList.remove("dark","transform")
// 				document.querySelector('.daybreak-logo-big').classList.remove("nav-logo--minimized");
// 				document.querySelector('.nav-test').classList.remove("close","dark")
// 				document.querySelector('.content').style.transform = 'translateY(40vh)'
// 				document.querySelector('.animate-test').classList.remove('fuck')
				document.querySelector('.footer').classList.remove("dark")
				clearInterval(myInterval);
				clearTimeout(one);
				clearTimeout(two);
				clearTimeout(three);
				clearTimeout(four);
				clearTimeout(five);
				clearTimeout(six);

		}
	}
	const resetHero = animateInHero();
// 	setTimeout(function() {
// 		document.querySelector('.content').classList.remove("hide")
// 	}, 100);
	
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
