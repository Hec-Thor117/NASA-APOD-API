const picInfo = document.getElementsByClassName("pic-info");

const mainBtn = document.getElementsByClassName("main-btn");

mainBtn[0].addEventListener("click", () => {
	fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
		.then(res => res.json())
		.then(data => {
			let img = document.createElement("img");
			img.src = data.url;
			img.alt = data.title;
	
			document.body.appendChild(img);

			picInfo[0].textContent = data.explanation;
		})
	mainBtn[0].disabled = true;
	mainBtn[0].classList.add("disabled");
});	