//navbar//
const navToggle = document.querySelector("#mobile-nav-toggle");
const navBar = document.querySelector("#primary-navigation");


navToggle.addEventListener("click", ()=>{
    const visibility = navBar.getAttribute("data-visible");

    if (visibility === 'false') {
        navBar.setAttribute("data-visible", "true");
        navBar.classList.remove("-translate-x-full");
        navToggle.innerHTML = `<svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentcolor"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/>
                    </svg>`;
    } else {
        navBar.setAttribute("data-visible", "false");
        navBar.classList.add("-translate-x-full");
        navToggle.innerHTML = `<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentcolor"><path d="M120-240v-66.67h520V-240H120Zm673.33-48L600.67-480.67l192-192L840-625.33 695.33-480.67l145.34 145.34L793.33-288ZM120-448v-66.67h400V-448H120Zm0-205.33V-720h520v66.67H120Z"/>
                </svg>`;
    }
});
//end//


//search section
// Elements
const searchSection = document.getElementById("search-section");
const openSearchBtn = document.getElementById("open-search");
const closeSearchBtn = document.getElementById("close-search");
const searchInput = document.getElementById("search-input");

// Open search section
openSearchBtn.addEventListener("click", () => {
  searchSection.classList.remove("hidden");
  searchInput.focus();
});

// Close search section
closeSearchBtn.addEventListener("click", () => {
  searchSection.classList.add("hidden");
  searchInput.value = "";
});


//update//
const updateCloseBtn = document.querySelector("#update-close");
const updateDiv = document.querySelector("#update");

updateCloseBtn.addEventListener("click", ()=> {
    updateDiv.classList.add("hidden");
})
//end//

//dropdown-menu//
const citizenDropdownBtn = document.querySelector("#citizen-dropdown-btn");
const dropdownSection = document.querySelector("#dropdown-section");
const entreprenuer = document.querySelector("#entreprenuer");

citizenDropdownBtn.addEventListener("click", () =>{
    dropdownSection.classList.toggle("hidden");
    entreprenuer.classList.toggle("text-green-800");
});


//scrool to top//
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (scrollPosition > totalHeight * 0.25) {
    scrollToTopButton.classList.remove("hidden");
  } else {
    scrollToTopButton.classList.add("hidden");
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});
//end//