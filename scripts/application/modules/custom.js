document.addEventListener('DOMContentLoaded', () => {

	document.getElementById('ToggleMenu').addEventListener('click', () => {
		
		let x = document.getElementById("SiteNav");
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
		
	})	
	
})