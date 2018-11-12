document.addEventListener("DOMContentLoaded", ()=> {

	let form = document.querySelector(".myform");
	// let namedItem = form.
	// let weather = document.querySelectorAll('input[name=weather]');
	// let music = document.querySelectorAll('input[name=music]');
	// let hobbies = document.querySelectorAll('input[name=hobbies]');
	let header = document.querySelector(".header");
	let subscript = document.querySelector(".sub");

	let num = 0;

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		// console.log(form.elements.namedItem("extra")[0].value)
		// console.log(form.elements[13].checked)

		for(let i = 0; i < form.elements.length-1; i++){
			if(form.elements[i].checked){
				num += Number(form.elements[i].value);
			}
		}

		// for(let i = 0; i < music.length; i++){
		// 	if(music[i].checked){
		// 		num += Number(music[i].value);
		// 	}
		// }

		// for(let i = 0; i < hobbies.length; i++){
		// 	if(hobbies[i].checked){
		// 		num += Number(hobbies[i].value);
		// 	}
		// }

		// for(let i = 0; i < weather.length; i++){
		// 	if(weather[i].checked){
		// 		num += Number(weather[i].value);
		// 	}
		// }
		
		// console.log(num)

		if(form.elements.namedItem("music").value.length == 0 || 
			form.elements.namedItem("weather").value.length == 0 || 
			form.elements.namedItem("hobbies").value.length == 0){

			header.innerText = "Please make a valid selection for each question.";

		} else {
			if (num > 15){
				header.innerText = "You are a Go-getter";
				subscript.innerText = "Refresh and try again.";

			} else if (num > 10){
				header.innerText = "You are a Transformer";
				subscript.innerText = "Refresh and try again.";

			} else if (num > 5) {
				header.innerText = "You are a Procrastinator";
				subscript.innerText = "Refresh and try again.";	
			} else {
				header.innerText = "You are a Socialist";
				subscript.innerText = "Refresh and try again.";
			}
		}

	});

});


// event.target.innerText = 
// event.preventDefault();

