
//@ts-ignore
daybreak.router.useScript(()=>{
	console.log("enter home");
//	document.body.scrollTop = 0;
//   	document.documentElement.scrollTop = 0;
	function animateInHero() {
		document.querySelector('.background').classList.remove("dark")
		document.querySelector('.nav-container').classList.remove("dark","transform")
		document.querySelector('.nav-container').classList.add("nav-home")
		document.querySelector('.daybreak-logo-big').classList.remove("nav-logo--minimized");
		document.querySelector('.nav-test').classList.remove("close","dark")
		document.querySelector('.content').style.transform = 'translateY(40vh)'
		document.querySelector('.animate-test').classList.remove('fuck')
		const padTop = []
		setTimeout(function() {
			document.querySelector('.nav-test').classList.remove("home-load")
		}, 600);
		//document.querySelector('#real-nav').style.top = '400px'
//		$(window).scroll(function (event) {
// 		    if(document.querySelector('#real-nav').offsetTop <= 0) {
// 			console.log('fixed')
// 		    } else if(document.querySelector('#real-nav').offsetTop > 0) {
// 		   	var scroll = 400 - $(window).scrollTop()
// 		    	document.querySelector('#real-nav').style.top = scroll + 'px'
//  			var navTop = document.querySelector('#real-nav1').getBoundingClientRect().top
// 			var navWidth = document.querySelector('#sticky-nav').getBoundingClientRect().width
// 			document.querySelector('.animate-test').style.top = navTop + 'px'
// 			document.querySelector('#real-nav1').style.width = navWidth + 'px'
// 		    }
//		});
		
// 		setTimeout(function() {
// 			document.querySelector('.daybreak-info').style.display = 'none';
// 			document.querySelector('.cities-info').style.display = 'none';
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
				//document.querySelector('.animate-test').style.top = '0!important'
				document.querySelector('.nav-container').classList.remove("nav-home")
//				document.querySelector('#real-nav').style.top = '0px'

		}
	}
	const resetHero = animateInHero();
	
	
// 				$( "#fwesdfsdfsd" ).on( "click", function() {
// 					document.querySelector('.animate-test').style.top = '0!important'
// 					console.log('hi')
// 				} );
// 	document.querySelector('#fwesdfsdfsd').addEventListener("click", (event) => {
// 		document.querySelector('.animate-test').style.top = '0!important'
// 					console.log('hi')
// 	});


	// ======================================================================
	// 
	// Setup infinite grid interaction
	// 
	// ======================================================================
// 	let selectedProject = null;
// 	let projectIdCount = 0;
// 	let currentGridData = cellDataShuffled;
// 	let isMobileGrid = false;

// 	// some selection utilities
// 	const getOtherProjectImages = (projectName)=> {
// 		return document.querySelectorAll(`img[for-project]:not([for-project="${projectName}"])`);
// 	}
// 	const getOtherProjectLinks = (projectName) => {
// 		return document.querySelectorAll(`a[for-project]:not([for-project="${projectName}"])`);
// 	}
// 	const getProjectLinks = (projectName) => {
// 		return document.querySelectorAll(`a[for-project="${projectName}"]`);
// 	}

// 	const getProjectDescriptionInView = (projectName) => {
// 		const allProjectDescriptions = document.querySelectorAll(`div[for-project="${projectName}"]`);
// 		for (let i = 0; i < allProjectDescriptions.length; i++) {
// 			const elm = allProjectDescriptions[i];
// 			if(isInViewport(elm)) {
// 				return elm;
// 			}
// 		}
// 		return
// 	}

// 	// handle project link enter
// 	const linkContainerObserver = new IntersectionObserver((entries)=> {
// 		entries.forEach((entry)=> {
// 			const project = entry.target.getAttribute("for-project");
// 			if(entry.isIntersecting) {
// 				// elm on screen
// 				const elm = getProjectDescriptionInView(project);
// 				if(!elm) return;
// 				//@ts-ignore
// 				elm.style.transition = "opacity .15s linear";
// 				requestAnimationFrame(()=>{
// 					//@ts-ignore
// 					elm.style.opacity = "1";
// 				})
// 			} else {
// 				const elm = getProjectDescriptionInView(project);
// 				if(!elm) return;
// 				//@ts-ignore
// 				elm.style.opacity = "0";
// 			}
// 		})

// 	},{ 
// 		rootMargin: "-220px 0px -55% 0px" 
// 	});
	


// 	const {
// 		cleanupInfiniteGrid, 
// 		observePageCreation, 
// 		unobservePageCreation, 
// 		isInViewport,
// 		enableScroll,
// 		disableScroll,
// 		setGridGap,
// 		setGridTemplates,
// 		setTopPadding,
// 		observeScroll,
// 		unobserveScroll,
// 		getScrollPosition
// 	} = createInfiniteGrid({
// 		cols: 8,
// 		templates: GRID_TEMPLATES_LARGE,
// 		baseElm: gridContainer,
// 		renderCell: (cellInfo) => {
// 			const isCellMobileGrid = isMobileGrid;
			
// 			if (cellInfo.type === CELL_EMPTY) {
// 				return;
// 			}
// 			const cellData = currentGridData.next();
// 			const projectLink = document.createElement("a");
// 			projectLink.href = cellData.href;
// 			projectLink.style.display = "block";
// 			projectLink.style.backgroundColor = "#D9D9D9";

// 			// assign project id
// 			const thisProjectId = cellData.name + projectIdCount;
// 			const thumbnailCount = 'thumbnail' + projectIdCount;
// 			projectIdCount ++;
// 			projectLink.classList.add("hover-target-big", "project-tile", thumbnailCount);
// 			projectLink.setAttribute("for-project", thisProjectId)

// 			const handleLinkClick =  ()=> {
// 				selectedProject = thisProjectId;
// 			}
// 			projectLink.addEventListener("click",handleLinkClick);

// 			const projectImage = createProjectImage(cellData.name,cellData.cover);
// 			const {projectInfoContainer, projectInfoContainerParent} = createProjectInfoContainer(cellInfo, cellData, isMobileGrid);

// 			const {year, name, description, expertise, projectInfoContent} = createProjectInfoContent(cellData, isMobileGrid);

// 			isCellMobileGrid && linkContainerObserver.observe(projectLink);

// 			projectInfoContent.appendChild(year);
// 			projectInfoContent.appendChild(name);
// 			projectInfoContent.appendChild(description);
// 			projectInfoContent.appendChild(expertise);
			
// 			projectInfoContainerParent.appendChild(projectInfoContainer);
// 			projectInfoContainer.appendChild(projectInfoContent)
			
// 			projectLink.appendChild(projectImage);
// 			cellInfo.elm.appendChild(projectLink);

// 			const FADE_OPACITY = .1;
// 			const fadeOtherProjectsImage = (projectName)=> {
// 				getOtherProjectImages(projectName).forEach((img)=>{
// 					//@ts-ignore
// 					if(!img.complete) return;
// 					//@ts-ignore
// 					img.style.opacity = `${FADE_OPACITY}`;
// 				})
// 			}
// 			const showOtherProjectsImage = (projectName)=> {
// 				getOtherProjectImages(projectName).forEach((img)=>{
// 					//@ts-ignore
// 					if(!img.complete) return;
// 					//@ts-ignore
// 					img.style.opacity = `1`;
// 				})
// 			}

// 			// thumbnail over state
// 			const handleMouseEnter = ()=>{
// 				// transitioning out, disable the animation
// 				if(selectedProject || isMobileGrid) return;
// 				projectInfoContainer.style.opacity = "1";
// 				fadeOtherProjectsImage(cellData.name);
// 			}
// 			const handleMouseLeave = ()=>{
// 				// transitioning out, disable the animation to remove distraction
// 				if(selectedProject || isMobileGrid) return;
// 				projectInfoContainer.style.opacity = "0";
// 				showOtherProjectsImage(cellData.name);
// 			}

// 			projectLink.addEventListener("mouseenter", handleMouseEnter);
// 			projectLink.addEventListener("mouseleave", handleMouseLeave);

// 			// cleanup cell
// 			return () => {
// 				projectLink.removeEventListener("mouseenter", handleMouseEnter);
// 				projectLink.removeEventListener("mouseleave", handleMouseLeave);

// 				cellInfo.elm.removeChild(projectLink);
// 				projectInfoContainerParent.removeChild(projectInfoContainer);
// 				isCellMobileGrid && linkContainerObserver.unobserve(projectLink);
// 			}
// 		}
// 	});

// 	const handlePageCreate = ()=>{
// 		daybreak.cursor.refershCursorTargets();
// 		daybreak.router.refershHrefTargets();
// 	}

// 	observePageCreation(handlePageCreate);

// 	const GRID_SMALL_BREAKPOINT = 479;
// 	const GRID_MEDIUM_BREAKPOINT = 991;
// 	const GRID_LARGE_BREAKPOINT = 1440;

// 	const handlePageResize = ()=> {
// 		if(window.innerWidth > GRID_LARGE_BREAKPOINT) {
// 			currentGridData = cellDataShuffled;
// 			isMobileGrid = false;
// 			setGridTemplates(GRID_TEMPLATES_LARGE);
// 			setGridGap(24);
// 			setTopPadding(0);
// 			return;
// 		} 
		
// 		if(window.innerWidth > GRID_MEDIUM_BREAKPOINT) {
// 			currentGridData = cellDataShuffled;
// 			isMobileGrid = false;
// 			setGridTemplates(GRID_TEMPLATE_MEDIUM);
// 			setGridGap(24);
// 			setTopPadding(0);
// 			return;
// 		} 
		
// 		if(window.innerWidth > GRID_SMALL_BREAKPOINT) {
// 			currentGridData = cellDataShuffled;
// 			isMobileGrid = false;
// 			setGridTemplates(GRID_TEMPLATE_SMALL);
// 			setGridGap(24);
// 			setTopPadding(0);
// 			return;
// 		} 
		
// 		isMobileGrid = true;
// 		currentGridData = cellDataMobileShuffled;
// 		setGridTemplates(GRID_TEMPLATES_MOBILE);
// 		setGridGap(12);
// 		setTopPadding(180);
// 	}
// 	handlePageResize();
// 	const pageResizeDebounced = debounce(handlePageResize, 10);
// 	window.addEventListener("resize", pageResizeDebounced);
	
// 	const daybreakInfo = (()=>{
// 		const menuOpenButton = document.querySelector("#menu-open");
// 		const daybreakInfo = document.querySelector(".daybreak-info");
// 		const daybreakLogoSmall = document.querySelector(".daybreak-logo-small");
// 		const daybreakLogoBig = document.querySelector(".daybreak-logo-big");
	
// 		let isInfoHidden = false;

// 		const hideInfo = ()=> requestAnimationFrame(()=>{
// 			isInfoHidden = true;
// 			const buttonBounds = menuOpenButton.getBoundingClientRect();
// 			const parentBounds = menuOpenButton.parentElement.getBoundingClientRect();
	
// 			const verticalOffset = parentBounds.top - 16;
// 			const horizontalOffset = parentBounds.width - buttonBounds.width;
// 			menuOpenButton.style.transform = `translate3d(${horizontalOffset}px, -${verticalOffset}px, 0px)`;
// 			daybreakInfo.style.transform = `translate3d(${horizontalOffset/2}px, -${verticalOffset/2}px, 0px) scale(0)`;
// 			daybreakInfo.style.opacity = `0`;
			
// 			daybreakLogoSmall.classList.add("daybreak-logo-small--scrolled");
// 			daybreakLogoBig.classList.add("daybreak-logo-big--scrolled");
// 		})
// 		const showInfo = ()=> requestAnimationFrame(()=>{
// 			isInfoHidden = false;
// 			menuOpenButton.style.transform = `translate3d(0px, 0px, 0px)`;
// 			daybreakInfo.style.transform = `translate3d(0px, 0px, 0px) scale(1)`;
// 			daybreakInfo.style.opacity = `.7`;
			
// 			daybreakLogoSmall.classList.remove("daybreak-logo-small--scrolled");
// 			daybreakLogoBig.classList.remove("daybreak-logo-big--scrolled");
// 		})
// 		const handleGridScroll = (scroll)=> {
// 			if(scroll > 0 && isMobileGrid) {
// 				if(isInfoHidden) return;
// 				hideInfo();
// 				return;
// 			}
// 			showInfo();
// 		}
		
// 		const cleanupInfo = ()=>{
// 			unobserveScroll(handleGridScroll);
// 			menuOpenButton.style.transform = ``;
// 			menuOpenButton.style.transitionDuration = "0s";
// 		}
// 		const initInfo = ()=> {
// 			observeScroll(handleGridScroll);
// 			handleGridScroll(getScrollPosition());
			
// 			menuOpenButton.style.willChange = `transform`;
// 			menuOpenButton.style.transition = `transform .3s cubic-bezier(0.85, 0, 0.15, 1)`;
// 			daybreakInfo.style.willChange = `transform,opacity`;
// 			daybreakInfo.style.transitionDelay = "0s";
// 			daybreakInfo.style.transitionProperty = `transform,opacity`;
// 			daybreakInfo.style.transitionTimingFunction = `cubic-bezier(0.85, 0, 0.15, 1)`;
// 			daybreakInfo.style.transitionDuration = `.3s`;
// 			daybreakInfo.style.opacity = `1`;
// 		}
// 		return {
// 			cleanupInfo,
// 			initInfo,
// 		}
// 	})();

// 	daybreakInfo.initInfo();
	
	
// 	// cleanup function
// 	return ({beginTransition, nextPath})=>{

// 		const finishCleanup = () => {
// 			daybreakInfo.cleanupInfo();
// 			cleanupInfiniteGrid();
// 			unobservePageCreation(handlePageCreate);
// 			window.removeEventListener("resize", pageResizeDebounced);
// 			linkContainerObserver.disconnect();
// 		}

// 		const {onAbort, finish} = beginTransition();
		
// 		const isAbout = nextPath.includes("/about");
// 		const isContact = nextPath.includes("/contact");

// 		console.log(selectedProject)
		
// 		if(isAbout || isContact) {
// 			selectedProject = null;
// 			finishCleanup();
// 			finish();
// 			return;
// 		}
		
// 		const TRANSITION_DURATION = 1000;
		
// 		const allProjectLinks = Array.from(document.querySelectorAll(`a[for-project]`));
// 		const isSelectedLink = (link) => link.getAttribute("for-project") === selectedProject;

// 		let selectedLinkIndex = 0;
// 		let firstLinkInView = 0;
// 		const linksInView = allProjectLinks.filter((link, index)=> {

// 			const isVisible = isInViewport(link);
// 			if(isVisible && firstLinkInView === 0) {
// 				firstLinkInView = index;
// 			}

// 			if(isSelectedLink(link)) {
// 				selectedLinkIndex = index - firstLinkInView;
// 			}

// 			return isVisible
// 		});

// 		const {linksBefore, linksAfter} = linksInView.reduce((prev, curr, index) => {
// 			if(index > selectedLinkIndex) {
// 				prev.linksAfter.push(curr);
// 				return prev;
// 			}
// 			prev.linksBefore.push(curr);
// 			return prev;

// 		},{linksBefore:[],linksAfter:[]});

// 		const {addTimeout, clearAllTimeout} = createTimeoutList();

// 		// fade out nav
// 		const navBar = document.querySelector(".navbar");
// 		navBar.style.transform = "translateY(0%)";
// 		requestAnimationFrame(()=>{
// 			navBar.style.transitionProperty = "opacity";
// 			navBar.style.transitionDuration = ".2s";
// 			navBar.style.opacity = "0";
// 		})

// 		const fadeOutLinks = (linksBefore, linksAfter) => {
// 			const biggerItemCount = Math.max(linksBefore.length, linksAfter.length);

// 			linksBefore.forEach((elm, index)=> {
// 				addTimeout(()=>{
// 					if (isSelectedLink(elm)) return;
// 					elm.style.visibility = "hidden";
// 				}, (index/biggerItemCount) * TRANSITION_DURATION * .5);
// 			});

// 			linksAfter.reverse().forEach((elm, index)=> {
// 				addTimeout(()=>{
// 					if (isSelectedLink(elm)) return;
// 					elm.style.visibility = "hidden";
// 				}, (index/biggerItemCount) * TRANSITION_DURATION * .5);
// 			});
// 		}

// 		const fadeInLinks = (links) => {
// 			const delay = TRANSITION_DURATION * .9;
// 			links.forEach((elm,index)=> {
// 				// fade out all the in view images
// 				addTimeout(()=>{
// 					elm.style.opacity = "1";
// 				}, index * TRANSITION_DURATION * .1 + delay);
// 			});
// 		}

// 		fadeOutLinks(linksBefore, linksAfter);
		
// 		const timeout = setTimeout(()=>{
// 			finish();
// 			finishCleanup();
// 		}, TRANSITION_DURATION);

// 		disableScroll();
// 		onAbort(()=> {
// 			//@ts-ignore
// 			navBar.style.opacity = "1";
// 			clearAllTimeout();
// 			fadeInLinks(linksInView);
// 			enableScroll();
// 			selectedProject = null;
// 			clearTimeout(timeout);
// 			daybreakInfo.initInfo();
// 		});
// 	}
// 			var elementDelay = 250;
//       for (let i = 0; i < document.querySelectorAll('.my-class').length; i++) {
//         document.querySelectorAll('.my-class').forEach((element, i) => {
//           setTimeout(function () {
//             element.style.visibility = "visible" ?? "";
//           }, i * elementDelay);
//         });
//       }
})

// append()
// function append() {
// 	var shapeLoader = 75;
// 		    for (let i = 0; i < document.querySelectorAll('img').length; i++) {
// 					document.querySelectorAll('img').forEach((element, i) => {
// 						element.className += " " + "test";
// 					});
// 	      }
// }


function readProjectDataFromHTML() {
	const baseElm = document.querySelector(".all-daybreak-projects");
  const allProjects = baseElm?.querySelectorAll(".daybreak-project");
	//@ts-ignore
  const projectData = Array.from(allProjects).map((projectElm) => {
		//@ts-ignore
    const href = projectElm.href;
    const importanceElm = projectElm.querySelector(".daybreak-project-importance");
    const nameElm = projectElm.querySelector(".daybreak-project-name");
    const descriptionElm = projectElm.querySelector(".daybreak-project-description");
    const yearElm = projectElm.querySelector(".daybreak-project-year");
    const expertiseElm = projectElm.querySelector(".daybreak-project-expertise");
    const coverElm = projectElm.querySelector(".daybreak-project-cover");

		if(!importanceElm || !nameElm ||!descriptionElm||!yearElm||!expertiseElm||!coverElm) {
			throw "invalid element"
		}

    const importance = parseInt(importanceElm.innerHTML);
    const name = nameElm.innerHTML;
    const description = descriptionElm.innerHTML;
    const year = yearElm.innerHTML;
    const expertise = expertiseElm.innerHTML.split(",").map((str) => str.trim());
		//@ts-ignore
    const cover = Array.from(coverElm.children).map((elm) => (elm).src);

    return {
      importance, name, description, year, expertise, cover,href
    }
  })

  return projectData;
}

function createTimeoutList() {
	const allTimeout = [];
	const addTimeout = (callback, time)=>{
		allTimeout.push(setTimeout(callback, time));
	}

	const clearAllTimeout = ()=> {
		allTimeout.forEach((t)=>{
			clearTimeout(t)
		})
	}

	return {
		addTimeout, clearAllTimeout
	}
}

function debounce(callback, millisec) {
  let timeoutId;
  function triggerDebounce() {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, millisec);
  }

  return triggerDebounce;
}
