
daybreak.router.useScript(()=>{
	console.log("enter home");

	const {createGridTemplate, createInfiniteGrid} = window.daybreak;

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
	document.body.appendChild(gridContainer);

	const cleanupInfiniteGrid = createInfiniteGrid({
		cols: 8,
		templates: gridTemplates,
		baseElm: gridContainer,
		renderCell: (cellInfo) => {

			cellInfo.elm.style.height = "100px";

			// for empty cells
			if (cellInfo.type === CELL_EMPTY) {
				cellInfo.elm.innerHTML = "empty";
				cellInfo.elm.style.opacity = ".2";
				return;
			}

			const celldata = cellDataShuffled.next();
			cellInfo.elm.innerHTML = celldata.name;
			cellInfo.onUpdate(() => {
				console.log("update")
			})

			// cleanup cell
			return () => {

			}
		}
	});

	// cleanup function
	return ()=>{
		cleanupInfiniteGrid();
	}
})