// Toggle Mobile Menu
let hamburgerMenu = document.querySelector(".hamburger");
let navbar = document.querySelector(".nav-bar");

hamburgerMenu.addEventListener("click", () => {
	navbar.classList.toggle("active");
});

// Select Menu Item as Active
document.querySelectorAll(".nav-bar a").forEach((link) => {
	link.addEventListener("click", () => {
		// Remove the active class from all the item
		document.querySelectorAll(".nav-bar a").forEach((NavLink) => {
			NavLink.classList.remove("activeLink");
		});

		//add active class to the clicked item
		link.classList.add("activeLink");
	});
});
