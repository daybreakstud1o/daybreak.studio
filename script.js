var copyInquiriesAll = document.querySelectorAll('.copy-inquiries');
	copyInquiriesAll.forEach((elm) => elm.href = '');
	copyInquiriesAll.forEach((elm,i) => elm.onmouseover = function() {
		document.querySelectorAll('.copy-inquiries .copied-icon')[i].style.marginRight = "0";
		document.querySelectorAll('.copy-inquiries .copied-icon')[i].style.opacity = "1";
	});
	copyInquiriesAll.forEach((elm,i) => elm.onmouseout = function() {
		document.querySelectorAll('.copy-inquiries .copied-icon')[i].style.marginRight = "-16px";
		document.querySelectorAll('.copy-inquiries .copied-icon')[i].style.opacity = "0";
	});
	copyInquiriesAll.forEach((elm,i) => elm.onclick = function() {
		document.querySelectorAll('.copy-inquiries .link-copied')[i].style.display = "block";
		document.querySelectorAll('.copy-inquiries .copied-icon')[i].style.display = "none";
		setTimeout(function () {
			document.querySelectorAll('.copy-inquiries .link-copied')[i].style.display = "none";
			document.querySelectorAll('.copy-inquiries .copied-icon')[i].style.display = "block";
		}, 2000);
		navigator.clipboard.writeText('hello@daybreak.studio');
		return false
	});


	var copyCareersAll = document.querySelectorAll('.copy-careers');
	copyCareersAll.forEach((elm) => elm.href = '');
	copyCareersAll.forEach((elm,i) => elm.onmouseover = function() {
		document.querySelectorAll('.copy-careers .copied-icon')[i].style.marginRight = "0";
		document.querySelectorAll('.copy-careers .copied-icon')[i].style.opacity = "1";
	});
	copyCareersAll.forEach((elm,i) => elm.onmouseout = function() {
		document.querySelectorAll('.copy-careers .copied-icon')[i].style.marginRight = "-16px";
		document.querySelectorAll('.copy-careers .copied-icon')[i].style.opacity = "0";
	});
	copyCareersAll.forEach((elm,i) => elm.onclick = function() {
		document.querySelectorAll('.copy-careers .link-copied')[i].style.display = "block";
		document.querySelectorAll('.copy-careers .copied-icon')[i].style.display = "none";
		setTimeout(function () {
			document.querySelectorAll('.copy-careers .link-copied')[i].style.display = "none";
			document.querySelectorAll('.copy-careers .copied-icon')[i].style.display = "block";
		}, 2000);
		navigator.clipboard.writeText('careers@daybreak.studio');
		return false
	});

	// document.addEventListener('DOMContentLoaded', function() {
	// 	console.log("hi!")
	// 	const videos = document.querySelectorAll('video');
	// 	videos.forEach(video => {
	// 		video.load();
	// 	});
	// });

	// 	console.log("hi!")
	// 	const videos = document.querySelectorAll("video");
	// 	videos.forEach(video => {
	// 		video.load();
	// 	});
