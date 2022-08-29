daybreak.router.useScript(() => {
	// javascript some how has 24 in their hour
	function fix24HrString(str) {
		const strSplitted = str.split(":");
		const hr = strSplitted[0] === "24"? "00":strSplitted[0];
		const min = strSplitted[1];
		const sec = strSplitted[2];

		return `${hr}:${min}:${sec}`
	}

	function getTorontoTime() {
		const date = new Date();

		// pacific time
		const eastCoastTimeStr = date.toLocaleString("en-US", {
			timeZone: "America/New_York",
			hour12: false
		})
		return fix24HrString(eastCoastTimeStr.split(" ")[1]);
	}

	function getSFtime() {
		const date = new Date();

		// pacific time
		const pacificTimeStr = date.toLocaleString("en-US", {
			timeZone: "America/Los_Angeles",
			hour12: false
		})


		return fix24HrString(pacificTimeStr.split(" ")[1]);
	}

	const updateTime = () => {
		// periodically update the time elements
		const allSfTimeElm = document.querySelectorAll('.sf-time');
		const allTorontoTimeElm = document.querySelectorAll('.toronto-time');

		const sfTime = getSFtime();
		const torontoTime = getTorontoTime();

		allSfTimeElm.forEach((elm) => elm.innerHTML = sfTime);
		allTorontoTimeElm.forEach((elm) => elm.innerHTML = torontoTime);
	}

	setInterval(updateTime,1000);
	updateTime();

	// async function torontotime() {
	// 	const api_url = 'https://worldtimeapi.org/api/timezone/America/Toronto';
	// 	const response = await fetch(api_url);
	// 	const data = await response.json();
	// 	const { datetime } = data;
	// 	for (let i = 0; i < document.querySelectorAll('.toronto-time').length; i++) {
	// 		document.querySelectorAll(".toronto-time")[i].innerHTML = datetime.substring(11,19);
	// 	}
	// }
	// async function SFtime() {
	// 	const api_url = 'https://worldtimeapi.org/api/timezone/America/Los_Angeles';
	// 	const response = await fetch(api_url);
	// 	const data = await response.json();
	// 	const { datetime } = data;
	// 	for (let i = 0; i < document.querySelectorAll('.sf-time').length; i++) {
	// 		document.querySelectorAll(".sf-time")[i].innerHTML = datetime.substring(11,19);
	// 	}
	// }


	// console.log(document.querySelectorAll('.toronto-time').length);

	weatherUpdate = (city, slang) => {
		const xhr = new XMLHttpRequest();
		xhr.open(
			"GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`);
			xhr.send();
			xhr.onload = () => {
			var data = JSON.parse(xhr.response);
			for (let i = 0; i < document.querySelectorAll('.city-' + slang + ' .clouds').length; i++) {

				let elm;
				if (data.weather[0].main == 'Clouds') {
					elm = document.querySelectorAll('.city-' + slang + ' .clouds')[0];
				} else if (data.weather[0].main == 'Clear') {
					elm = document.querySelectorAll('.city-' + slang + ' .clear')[0];
				} else if (data.weather[0].main == 'Rain') {
					elm = document.querySelectorAll('.city-' + slang + ' .rain')[0];
				} else if (data.weather[0].main == 'Snow') {
					elm = document.querySelectorAll('.city-' + slang + ' .snow')[0];
				} else if (data.weather[0].main == 'Haze') {
					elm = document.querySelectorAll('.city-' + slang + ' .haze')[0];
				} else if (data.weather[0].main == 'Thunderstorm') {
					elm = document.querySelectorAll('.city-' + slang + ' .thunderstorm')[0];
				} else if (data.weather[0].main == 'Mist') {
					elm = document.querySelectorAll('.city-' + slang + ' .mist')[0]
				}
				if(!elm) return;
				elm.style.display = 'block';
				elm.style.opacity = '0';
				elm.style.transition = 'opacity .3s linear';
				requestAnimationFrame(()=>{
					elm.style.opacity = "1";
				})
			}
			// console.log(data.name + ", " + `${Math.round(data.main.temp - 273.15)}°C` + ", " + data.weather[0].main + ", " + data.weather[0].description)
		};
	};

	weatherUpdate("toronto", "toronto");
	weatherUpdate("san fransisco", "sf");


	document.getElementById('menu-open').onclick = function openMobileNav() {
		document.getElementById('mobile-nav').style.maxHeight = '100%'
		// document.body.style.overflow="hidden";
	}
	document.getElementById('menu-close').onclick = function closeMobileNav() {
		document.getElementById('mobile-nav').style.maxHeight = '0%'
		// document.body.style.overflow="scroll";
	}


	let resizeTimer;
	const handleResize = () => {
		document.body.classList.add("resize-animation-stopper");
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			document.body.classList.remove("resize-animation-stopper");
		}, 400);
	}
	window.addEventListener("resize", handleResize);

	const handleLocationChnage = ()=>{
		const navRight = document.querySelector(".nav-right");
		navRight.children.forEach((elm)=>{ 
			if (!elm.href) return;
			console.log(elm.href);
			console.log(elm.href.indexOf(location.pathname));

			if (elm.href.indexOf(location.pathname) !== -1){
				elm.classList.add("w--current");
				return;
			}
			elm.classList.remove("w--current");
		});
		window.removeEventListener('locationchange', handleLocationChnage);
	}
	
	return ()=>{
		window.removeEventListener("resize", handleResize);
		window.addEventListener('locationchange', handleLocationChnage);
	}
});