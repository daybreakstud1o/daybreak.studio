
//@ts-ignore
daybreak.router.useScript(()=>{
	console.log("enter home");

	//@ts-ignore
	const daybreak = window.daybreak;
	const {createGridTemplate, createInfiniteGrid, shuffleGridData} = daybreak.grid;

	const CELL_EMPTY = "empty";
	const CELL_PROJECT = "project";

	// alias for project and empty cells
	const _ = CELL_EMPTY;
	const X = CELL_PROJECT;

	const GRID_TEMPLATES_LARGE = [
		createGridTemplate([
			[_, X, _, X, X, _, _, X],
			[X, _, X, _, _, _, X, _],
			[_, X, _, _, X, _, X, _],
			[X, _, X, _, X, X, _, X],
			[_, _, _, X, _, _, X, _],
			[X, _, X, _, X, _, _, X],
			[_, X, _, X, _, _, X, _],
			[X, _, _, _, X, _, _, X],
			[X, _, X, _, _, X, _, _],
		]),
		createGridTemplate([
			[X, _, _, X, X, _, _, X],
			[_, _, X, _, _, _, X, _],
			[_, X, _, _, X, _, X, _],
			[X, _, X, _, X, X, _, X],
			[_, _, _, X, _, _, X, _],
			[X, _, X, _, _, _, _, X],
			[_, X, _, X, _, _, X, _],
			[X, _, _, _, X, _, _, X],
			[X, _, X, _, _, X, _, _],
		]),
	]

	const GRID_TEMPLATE_MEDIUM = [
		createGridTemplate([
			[_, X, _, X, X, _],
			[X, _, X, _, _, _],
			[_, X, _, _, X, _],
			[X, _, X, _, X, X],
			[_, _, _, X, _, _],
			[X, _, X, _, X, _],
			[_, X, _, X, _, _],
			[X, _, _, _, X, _],
			[X, _, X, _, _, X],
		]),
		createGridTemplate([
			[_, X, X, _, _, X],
			[X, _, _, _, X, _],
			[_, _, X, _, X, _],
			[X, _, X, X, _, X],
			[_, X, _, _, X, _],
			[X, _, _, _, _, X],
			[_, X, _, _, X, _],
			[_, _, X, _, _, X],
			[X, _, _, X, _, _],
		]),
	]
	
	const GRID_TEMPLATE_SMALL = [
		createGridTemplate([
			[_, X, _, X],
			[X, _, X, _],
			[_, X, _, _],
			[X, _, X, _],
			[_, _, _, X],
			[X, _, X, _],
			[_, X, _, X],
			[X, _, _, _],
			[X, _, X, _],
		]),
		createGridTemplate([
			[_, X, _, X],
			[X, _, _, _],
			[_, _, X, _],
			[X, _, _, X],
			[_, X, _, _],
			[X, _, _, X],
			[_, X, _, _],
			[_, _, X, _],
			[X, _, _, _],
		]),
	]

	const GRID_TEMPLATES_MOBILE = [
		createGridTemplate([
			[_,X,_],
			[X,_,_],
			[_,_,X],
		]),
		createGridTemplate([
			[X,_,_],
			[_,_,X],
			[_,X,_],
			[_,_,X],
		]),
		createGridTemplate([
			[_,X,_],
			[_,_,X],
			[X,_,_],
			[_,_,X],
		]),
	]

	const gridContainer = document.createElement("div");
	gridContainer.classList.add("project-grid-container")
	document.body.appendChild(gridContainer);

	const projectDataFromHTML = readProjectDataFromHTML();

  // data with multiple images
  const cellData = projectDataFromHTML.reduce((arr, currProject) => {
    currProject.cover.forEach((coverImageUrl) => {
      arr.push({
        // @ts-ignore
        ...currProject, cover: coverImageUrl
      })
    })

    return arr;
  }, [])

  const cellDataMobile = projectDataFromHTML.reduce((arr, currProject) => {
    arr.push({
      // @ts-ignore
      ...currProject, cover: currProject.cover[0]
    })
    return arr;
  }, [])

	const cellDataShuffled = shuffleGridData(cellData.reduce((arr, curr) => {
    arr.push({ importance: curr.importance, data: curr });
    return arr
  }, []));

	const cellDataMobileShuffled = shuffleGridData(cellDataMobile.reduce((arr, curr) => {
    arr.push({ importance: curr.importance, data: curr });
    return arr
  }, []));





	// ======================================================================
	// 
	// Grid Element Factories
	// 
	// ======================================================================

	const createProjectImage = (projectName,src)=>{
		const projectImage = document.createElement("img");
		projectImage.alt = projectName;

		projectImage.setAttribute("for-project", projectName);

		projectImage.style.pointerEvents = "none"; // disable for microsoft edge
		projectImage.style.display = "block";
		projectImage.style.width = "100%";
		projectImage.style.height = "auto";
		projectImage.src = src;
		projectImage.width = 567;
		projectImage.height = 756;
		
		// onload animation
		projectImage.style.opacity = "0";
		projectImage.style.transitionProperty = "opacity";
		projectImage.style.transitionDuration = ".3s";
		projectImage.onload = () => projectImage.style.opacity = "1";

		return projectImage;
	}

	const createProjectInfoContainer = (cellInfo,cellData, isMobileGrid = false)=>{
		// project info hovers
		const projectInfoContainer = document.createElement("div");
		projectInfoContainer.style.position = "absolute";
		projectInfoContainer.style.left = "0px";
		projectInfoContainer.style.right = "0px";
		projectInfoContainer.style.top = isMobileGrid? "100%" :"0px";
		projectInfoContainer.style.bottom = "0px";
		projectInfoContainer.style.pointerEvents = "none";
		projectInfoContainer.style.opacity = "0";
		projectInfoContainer.setAttribute("for-project", cellData.name);

		const getProjectInfoPlacement = ()=> {
			const cellLeft = cellInfo.getNearbyCell(-1,0);
			const cellRight = cellInfo.getNearbyCell(1,0);			
			const isCellRightEmpty = cellRight.type === CELL_EMPTY;

			// grab the bottom element when its a mobile grid
			if(isMobileGrid) {
				return cellInfo.elm;
			}
			if(isCellRightEmpty) {
				return cellRight.elm;
			}
			return cellLeft.elm;
		}
		const projectInfoContainerParent = getProjectInfoPlacement();
		projectInfoContainerParent.style.position = "relative";

		return {projectInfoContainer, projectInfoContainerParent};
	}

	const createProjectInfoContent = (cellData, isMobileGrid = false)=>{
		const projectInfoContent = document.createElement("div");
		projectInfoContent.style.pointerEvents = "none";
		projectInfoContent.style.display = "flex";
		projectInfoContent.style.flexDirection = "column";
		projectInfoContent.style.height = "100%";

		const year = document.createElement("div");
		year.innerHTML = cellData.year;
		year.classList.add("body-founders-small");
		year.style.fontSize = "12px";
		year.style.marginBottom = "16px";
		year.style.display = isMobileGrid? "none":"block";
		
		const name = document.createElement("div");
		name.innerHTML = cellData.name;
		name.classList.add("label");
		name.style.marginTop = "8px";
		
		const description = document.createElement("div");
		description.innerHTML = cellData.description;
		description.classList.add("body-founders-small");
		description.style.marginBottom = "auto";
		description.style.fontSize = isMobileGrid ? "12px" : "";
		description.style.lineHeight = isMobileGrid ? "16px" : "";
		
		const expertise = document.createElement("div");
		expertise.innerHTML = cellData.expertise.reduce((expertise,curr) => expertise + `<div>${curr}</div>`,"");
		expertise.classList.add("body-founders-small");
		expertise.style.display = isMobileGrid? "none":"block";
		
		return {projectInfoContent,year,name,description,expertise}
	}


	// ======================================================================
	// 
	// Setup infinite grid interaction
	// 
	// ======================================================================
	let selectedProject = null;
	let currentGridData = cellDataShuffled;
	let isMobileGrid = false;

	// some selection utilities
	const getOtherProjectImages = (projectName)=> {
		return document.querySelectorAll(`img[for-project]:not([for-project="${projectName}"])`);
	}
	const getOtherProjectLinks = (projectName) => {
		return document.querySelectorAll(`a[for-project]:not([for-project="${projectName}"])`);
	}
	const getProjectLinks = (projectName) => {
		return document.querySelectorAll(`a[for-project="${projectName}"]`);
	}

	const getProjectDescriptionInView = (projectName) => {
		const allProjectDescriptions = document.querySelectorAll(`div[for-project="${projectName}"]`);
		for (let i = 0; i < allProjectDescriptions.length; i++) {
			const elm = allProjectDescriptions[i];
			if(isInViewport(elm)) {
				return elm;
			}
		}
		return
	}

	// handle project link enter
	const linkContainerObserver = new IntersectionObserver((entries)=> {
		entries.forEach((entry)=> {
			const project = entry.target.getAttribute("for-project");
			if(entry.isIntersecting) {
				// elm on screen
				const elm = getProjectDescriptionInView(project);
				if(!elm) return;
				//@ts-ignore
				elm.style.transition = "opacity .15s linear";
				requestAnimationFrame(()=>{
					//@ts-ignore
					elm.style.opacity = "1";
				})
			} else {
				const elm = getProjectDescriptionInView(project);
				if(!elm) return;
				//@ts-ignore
				elm.style.opacity = "0";
			}
		})

	},{ 
		rootMargin: "-220px 0px -50% 0px" 
	});

	const {
		cleanupInfiniteGrid, 
		observePageCreation, 
		unobservePageCreation, 
		isInViewport,
		enableScroll,
		disableScroll,
		setGridGap,
		setGridTemplates,
		setTopPadding,
		observeScroll,
		unobserveScroll
	} = createInfiniteGrid({
		cols: 8,
		templates: GRID_TEMPLATES_LARGE,
		baseElm: gridContainer,
		renderCell: (cellInfo) => {
			const isCellMobileGrid = isMobileGrid;

			if (cellInfo.type === CELL_EMPTY) {
				return;
			}
			const cellData = currentGridData.next();
			const projectLink = document.createElement("a");
			projectLink.href = cellData.href;
			projectLink.style.display = "block";
			projectLink.style.backgroundColor = "#D9D9D9";
			projectLink.classList.add("hover-target-big");
			projectLink.setAttribute("for-project", cellData.name)

			const handleLinkClick =  ()=> {
				selectedProject = cellData.name;
			}
			projectLink.addEventListener("click",handleLinkClick);

			const projectImage = createProjectImage(cellData.name,cellData.cover);
			const {projectInfoContainer, projectInfoContainerParent} = createProjectInfoContainer(cellInfo, cellData, isMobileGrid);

			const {year, name, description, expertise, projectInfoContent} = createProjectInfoContent(cellData, isMobileGrid);

			isCellMobileGrid && linkContainerObserver.observe(projectLink);

			projectInfoContent.appendChild(year);
			projectInfoContent.appendChild(name);
			projectInfoContent.appendChild(description);
			projectInfoContent.appendChild(expertise);
			
			projectInfoContainerParent.appendChild(projectInfoContainer);
			projectInfoContainer.appendChild(projectInfoContent)
			projectLink.appendChild(projectImage);
			cellInfo.elm.appendChild(projectLink);

			const FADE_OPACITY = .1;
			const fadeOtherProjectsImage = (projectName)=> {
				getOtherProjectImages(projectName).forEach((img)=>{
					//@ts-ignore
					if(!img.complete) return;
					//@ts-ignore
					img.style.opacity = `${FADE_OPACITY}`;
				})
			}
			const showOtherProjectsImage = (projectName)=> {
				getOtherProjectImages(projectName).forEach((img)=>{
					//@ts-ignore
					if(!img.complete) return;
					//@ts-ignore
					img.style.opacity = `1`;
				})
			}

			// thumbnail over state
			const handleMouseEnter = ()=>{
				// transitioning out, disable the animation
				if(selectedProject) return;

				projectInfoContainer.style.opacity = "1";
				fadeOtherProjectsImage(cellData.name);
			}
			const handleMouseLeave = ()=>{
				// transitioning out, disable the animation to remove distraction
				if(selectedProject) return;

				projectInfoContainer.style.opacity = "0";
				showOtherProjectsImage(cellData.name);
			}

			projectLink.addEventListener("mouseenter", handleMouseEnter);
			projectLink.addEventListener("mouseleave", handleMouseLeave);

			// cleanup cell
			return () => {
				projectLink.removeEventListener("mouseenter", handleMouseEnter);
				projectLink.removeEventListener("mouseleave", handleMouseLeave);

				cellInfo.elm.removeChild(projectLink);
				projectInfoContainerParent.removeChild(projectInfoContainer);
				isCellMobileGrid && linkContainerObserver.unobserve(projectLink);
			}
		}
	});

	const handlePageCreate = ()=>{
		daybreak.cursor.refershCursorTargets();
		daybreak.router.refershHrefTargets();
	}

	observePageCreation(handlePageCreate);

	const GRID_SMALL_BREAKPOINT = 479;
	const GRID_MEDIUM_BREAKPOINT = 991;
	const GRID_LARGE_BREAKPOINT = 1440;

	const handlePageResize = ()=> {
		if(window.innerWidth > GRID_LARGE_BREAKPOINT) {
			currentGridData = cellDataShuffled;
			isMobileGrid = false;
			setGridTemplates(GRID_TEMPLATES_LARGE);
			setGridGap(24);
			setTopPadding(0);
			return;
		} 
		
		if(window.innerWidth > GRID_MEDIUM_BREAKPOINT) {
			currentGridData = cellDataShuffled;
			isMobileGrid = false;
			setGridTemplates(GRID_TEMPLATE_MEDIUM);
			setGridGap(24);
			setTopPadding(0);
			return;
		} 
		
		if(window.innerWidth > GRID_SMALL_BREAKPOINT) {
			currentGridData = cellDataShuffled;
			isMobileGrid = false;
			setGridTemplates(GRID_TEMPLATE_SMALL);
			setGridGap(24);
			setTopPadding(0);
			return;
		} 
		
		isMobileGrid = true;
		currentGridData = cellDataMobileShuffled;
		setGridTemplates(GRID_TEMPLATES_MOBILE);
		setGridGap(12);
		setTopPadding(180);
	}
	handlePageResize();
	const pageResizeDebounced = debounce(handlePageResize, 10);
	window.addEventListener("resize", pageResizeDebounced);


	
	
	const menuOpenButton = document.querySelector("#menu-open");
	const daybreakInfo = document.querySelector(".daybreak-info");
	menuOpenButton.style.transition = `transform .3s cubic-bezier(.36,0,.24,.99)`;
	daybreakInfo.style.transitionProperty = `transform,opacity`;
	daybreakInfo.style.transitionTimingFunction = `cubic-bezier(.36,0,.24,.99)`;
	daybreakInfo.style.transitionDuration = `.3s`;
	daybreakInfo.style.opacity = `1`;

	const handleGridScroll = (scroll)=> {
		if(scroll > 50) {
			requestAnimationFrame(()=>{
				const buttonBounds = menuOpenButton.getBoundingClientRect();
				const parentBounds = menuOpenButton.parentElement.getBoundingClientRect();

				const verticalOffset = parentBounds.top - 16;
				menuOpenButton.style.transform = `translate3d(${parentBounds.width - buttonBounds.width}px, -${verticalOffset}px, 0px)`;
				daybreakInfo.style.transform = `translate3d(0px, -${verticalOffset}px, 0px)`;
			})
			return;
		}
		requestAnimationFrame(()=>{
			daybreakInfo.style.transform = `translate3d(0px,0px, 0px)`;
			menuOpenButton.style.transform = `translate3d(0px,0px,0px)`;
		})
	}
	observeScroll(handleGridScroll);
	
	// cleanup function
	return ({beginTransition, nextPath})=>{
		
		const finishCleanup = () => {
			unobserveScroll(handleGridScroll);
			cleanupInfiniteGrid();
			unobservePageCreation(handlePageCreate);
			window.removeEventListener("resize", pageResizeDebounced);
		}
		
		const {onAbort, finish} = beginTransition();
		
		const isAbout = nextPath.includes("/about");
		const isContact = nextPath.includes("/contact");
		
		if(isAbout || isContact) {
			selectedProject = null;
			finishCleanup();
			finish();
			return;
		}
		
		const TRANSITION_DURATION = 1000;
		
		const otherProjectLinks = Array.from(document.querySelectorAll(`a[for-project]:not([href="${nextPath}"])`));
		const selectedProjectLinks = Array.from(document.querySelectorAll(`a[href="${nextPath}"]`));
		const linksInView = otherProjectLinks.filter((link)=> {
			return isInViewport(link)
		});
		const selectedProjectInView = selectedProjectLinks.filter((link)=> {
			return isInViewport(link)
		})

		const {addTimeout, clearAllTimeout} = createTimeoutList();

		// fade out nav
		const navBar = document.querySelector(".navbar");
		//@ts-ignore
		navBar.style.transform = "translateY(0%)";
		
		requestAnimationFrame(()=>{
			//@ts-ignore
			navBar.style.transitionProperty = "opacity";
			//@ts-ignore
			navBar.style.transitionDuration = ".2s";
			//@ts-ignore
			navBar.style.opacity = "0";
		})

		const fadeOutOtherLinks = (linksInView) => {
			linksInView.forEach((elm, index)=> {
				// fade out all the in view images
				addTimeout(()=>{
					elm.style.opacity = "0";
				}, (index/linksInView.length) * TRANSITION_DURATION * .5);
			});
		}
		const fadeInOtherLinks = (linksInView)=>{
			linksInView.forEach((elm) => {
				// fade out all the in view images
				addTimeout(()=>{
					elm.style.opacity = "1";
				}, Math.random() * .5);
			});
		}

		const fadeOutSelectedLinks = (selectedLinks) =>{
			const delay = TRANSITION_DURATION * .9;
			console.log(selectedLinks);
			selectedLinks.forEach((elm,index)=> {
				// fade out all the in view images
				addTimeout(()=>{
					elm.style.opacity = "0";
				}, index * TRANSITION_DURATION * .1 + delay);
			});
		}

		const fadeInSelectedLinks = (selectedLinks) =>{
			selectedLinks.forEach((elm)=> {
				// fade out all the in view images
				addTimeout(()=>{
					elm.style.opacity = "1";
				}, Math.random() * .3);
			});
		}
		fadeOutOtherLinks(linksInView);
		fadeOutSelectedLinks(selectedProjectInView)
		
		const timeout = setTimeout(()=>{
			finish();
			finishCleanup();
		}, TRANSITION_DURATION);

		disableScroll();
		onAbort(()=> {
			//@ts-ignore
			observeScroll(handleGridScroll);
			navBar.style.opacity = "1";
			clearAllTimeout();
			fadeInOtherLinks(linksInView);
			fadeInSelectedLinks(selectedProjectInView);
			enableScroll();
			selectedProject = null;
			clearTimeout(timeout)
			window.addEventListener("resize", pageResizeDebounced);
		});
	}
})


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
