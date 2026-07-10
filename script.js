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
const galleries = {
    dino_remake: [
        "assets/project1/dino.png",
        "assets/project1/dino1.png",
        "assets/project1/dino2.png",
        "assets/project1/dino3.png",
        "assets/project1/dino4.png",
        "assets/project1/dino5.png"
    ],

    hackathon: [
        "assets/project2/mediaval.png",
        "assets/project2/mediaval1.png",
        "assets/project2/mediaval2.png",
        "assets/project2/mediaval3.png",
        "assets/project2/mediaval4.png"
    ]
};

let current = 0;
let currentGallery = [];

// Opening the gallery
const modal = document.getElementById("gallery");
const buttons = document.querySelectorAll(".gallery-btn");
const galleryImage = document.getElementById("gallery-image");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const project = button.dataset.project;

        currentGallery = galleries[project];

        current = 0;

        galleryImage.src = currentGallery[current];

        console.log("Button clicked");
        modal.style.display = "flex";

    });

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