//@ts-check
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

	const gridTemplates = [
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

	const cellDataShuffled = shuffleGridData(cellData.reduce((arr, curr) => {
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

	const createProjectInfoContainer = (cellInfo)=>{
		// project info hovers
		const projectInfoContainer = document.createElement("div");
		projectInfoContainer.style.position = "relative";
		projectInfoContainer.style.height = "100%";
		projectInfoContainer.style.pointerEvents = "none";
		projectInfoContainer.style.display = "none";

		const getProjectInfoPlacement = (projectInfoContainer)=> {
			const cellLeft = cellInfo.getNearbyCell(-1,0);
			const cellRight = cellInfo.getNearbyCell(1,0);			
			const isCellRightEmpty = cellRight.type === CELL_EMPTY;

			if(isCellRightEmpty) {
				return cellRight.elm;
			}
			return cellLeft.elm;
		}
		const projectInfoContainerParent = getProjectInfoPlacement(projectInfoContainer); 

		return {projectInfoContainer, projectInfoContainerParent};
	}

	const createProjectInfoContent = (cellData)=>{
		const projectInfoContent = document.createElement("div");
		projectInfoContent.style.pointerEvents = "none";
		projectInfoContent.style.display = "flex";
		projectInfoContent.style.flexDirection = "column";
		projectInfoContent.style.position = "absolute";
		projectInfoContent.style.left = "0px";
		projectInfoContent.style.right = "0px";
		projectInfoContent.style.height = "100%";

		const year = document.createElement("div");
		year.innerHTML = cellData.year;
		year.classList.add("body-founders-small");
		year.style.fontSize = "12px";
		year.style.marginBottom = "16px";
		
		const name = document.createElement("div");
		name.innerHTML = cellData.name;
		name.classList.add("label");
		
		const description = document.createElement("div");
		description.innerHTML = cellData.description;
		description.classList.add("body-founders-small");
		description.style.marginBottom = "auto";
		
		const expertise = document.createElement("div");
		expertise.innerHTML = cellData.expertise.reduce((expertise,curr) => expertise + `<div>${curr}</div>`,"");
		expertise.classList.add("body-founders-small");

		return {projectInfoContent,year,name,description,expertise}
	}

	

	// ======================================================================
	// 
	// Setup infinite grid interaction
	// 
	// ======================================================================
	let selectedProject = null;

	// some selection utilities
	const getOtherProjectImages = (projectName)=> {
		return document.querySelectorAll(`img[for-project]:not([for-project="${projectName}"])`);
	}
	const getOtherProjectLinks = (projectName) => {
		return document.querySelectorAll(`a[for-project]:not([for-project="${projectName}"])`);
	}

	const {
		cleanupInfiniteGrid, 
		observePageCreation, 
		unobservePageCreation, 
		isInViewport,
		enableScroll,
		disableScroll
	} = createInfiniteGrid({
		cols: 8,
		templates: gridTemplates,
		baseElm: gridContainer,
		renderCell: (cellInfo) => {
			if (cellInfo.type === CELL_EMPTY) {
				return;
			}
			const cellData = cellDataShuffled.next();
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
			const {projectInfoContainer, projectInfoContainerParent} = createProjectInfoContainer(cellInfo);
			const {year, name, description, expertise, projectInfoContent} = createProjectInfoContent(cellData);

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
				projectInfoContainer.style.display = "block";
				fadeOtherProjectsImage(cellData.name);
			}
			const handleMouseLeave = ()=>{
				projectInfoContainer.style.display = "none";
				showOtherProjectsImage(cellData.name);
			}

			projectLink.addEventListener("mouseenter", handleMouseEnter);
			projectLink.addEventListener("mouseleave", handleMouseLeave);

			
			// cleanup cell
			return () => {
				projectLink.removeEventListener("mouseenter", handleMouseEnter);
				projectLink.removeEventListener("mouseleave", handleMouseLeave);

				projectLink.removeChild(projectImage);
				cellInfo.elm.removeChild(projectImage);
				projectInfoContainerParent.removeChild(projectInfoContainer);
			}
		}
	});

	const handlePageCreate = ()=>{
		daybreak.cursor.refershCursorTargets();
		daybreak.router.refershHrefTargets();
		
	}

	observePageCreation(handlePageCreate)

	// cleanup function
	return ({beginTransition})=>{

		const finishCleanup = () => {
			cleanupInfiniteGrid();
			unobservePageCreation(handlePageCreate);
		}

		const {onAbort, finish} = beginTransition();
		if(!selectedProject) {
			selectedProject = null;
			finishCleanup();
			finish();
			return;
		}

		const TRANSITION_DURATION = 1000;

		const otherProjectLinks = Array.from(getOtherProjectLinks(selectedProject));
		const linksInView = otherProjectLinks.filter((img)=> {
			return isInViewport(img)
		});

		const fadeOutOtherLinks = (linksInView) => {
			linksInView.forEach((elm)=> {
				elm.style.opacity = "0";
				// fade out all the in view images
				setTimeout(()=>{
				}, Math.random() * TRANSITION_DURATION*.4);
			});
		}
		fadeOutOtherLinks(linksInView);
		
		const timeout = setTimeout(()=>{
			finish();
			finishCleanup();
		}, TRANSITION_DURATION);

		disableScroll();
		onAbort(()=> {
			enableScroll();
			selectedProject = null;
			clearTimeout(timeout)
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