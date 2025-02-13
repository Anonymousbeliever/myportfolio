window.addEventListener("load", function () {
  setTimeout(function () {
      document.getElementById("loader").style.display = "none"; //Finds the element with id="loader". Hides it by setting display: none;, making it invisible
  }, 1200); // The preloader stays visible for 1.2 seconds after the page loads before disappearing.
});



const menuBtn = document.getElementById("menu-btn");// Gets the menu button element by its ID
const navLinks = document.getElementById("nav-links");// Gets the navigation links container by its ID
const menuBtnIcon = menuBtn.querySelector("i");// Gets the <i> icon inside the menu button (for toggling between menu and close icons)

// Adding a click event listener to the menu button
menuBtn.addEventListener("click", () => {
 
  navLinks.classList.toggle("open"); // Toggle the "open" class on the navigation menu (show/hide the menu)
  const isOpen = navLinks.classList.contains("open");// Check if the menu is open by checking if the "open" class exists

  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");// If the menu is open, show the "close" icon, otherwise show the "menu" icon
});

// Adding a click event listener to the navigation links container
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open"); // When any link inside the navigation menu is clicked, close the menu
  menuBtnIcon.setAttribute("class", "ri-menu-line");// Reset the menu button icon back to the "menu" icon
});




// Scroll Animation
const scrollRevealOption = {
  distance: "50px",  // Moves elements by 50px before revealing
  origin: "bottom",  // Animation starts from the bottom
  duration: 1000,    // Animation lasts 1000ms (1 second)
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",       // Moves from the right instead of bottom
  delay: 1200,           // Appears after 1.2 seconds
});

ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1200, //The h2 appears from the bottom after 1.2 seconds.
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1500, //The h1 appears after 1.5 seconds for a natural flow.
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1700, //The paragraph fades in after 1.7 seconds.
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 2000, //The buttons appear last, after 2 seconds, ensuring a smooth, step-by-step reveal.
});
