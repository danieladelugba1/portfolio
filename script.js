// const themeBtn = document.getElementById("themeBtn");

// themeBtn.addEventListener("click", () => {

//     document.body.classList.toggle("dark-mode");

//     const darkModeEnabled =
//         document.body.classList.contains("dark-mode");

//     localStorage.setItem("darkMode", darkModeEnabled);
// });

// if (localStorage.getItem("darkMode") === "true") {
//     document.body.classList.add("dark-mode");
// }

// const list = document.querySelectorAll("#");

// Scrolling rather than jumping for projects cards
document.querySelectorAll('a[href*="#"]').forEach(link => {
    // for each link, attach an event listener
    link.addEventListener('click', function (event) {

        const targetId = this.getAttribute('href').split('#')[1];
        const target = document.getElementById(targetId);

        if (target) {
            event.preventDefault(); // prevent jumping

            // smooth scrolling to section
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});