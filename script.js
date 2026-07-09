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

// Displaying more images for a project
const images = [

    "assets/project1/dino1.png",
    "assets/project1/dino2.png",
    "assets/project1/dino3.png"

];

let current = 0;

// Opening the gallery
const modal = document.getElementById("gallery");

document.getElementById("open-gallery")
.addEventListener("click", () => {

    console.log("Button clicked");
    modal.style.display = "flex";

});

// Close the gallery
document.getElementById("close")
.addEventListener("click", () => {

    modal.style.display = "none";

});

// Cylcing between prev and next images
document.getElementById("previous")
.addEventListener("click", () => {

    current--;

    if(current < 0){
        current = images.length - 1;
    }

    document.getElementById("gallery-image").src =
        images[current];

});

document.getElementById("next")
.addEventListener("click", () => {

    current++;

    if(current >= images.length){
        current = 0;
    }

    document.getElementById("gallery-image").src =
        images[current];

});