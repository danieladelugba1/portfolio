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
        "assets/dino_project/dino.png",
        "assets/dino_project/dino1.png",
        "assets/dino_project/dino2.png",
        "assets/dino_project/dino3.png",
        "assets/dino_project/dino4.png",
        "assets/dino_project/dino5.png"
    ],

    hackathon: [
        "assets/mediaval_project/mediaval.png",
        "assets/mediaval_project/mediaval1.jpg",
        "assets/mediaval_project/mediaval2.jpg",
        "assets/mediaval_project/mediaval3.jpg",
        "assets/mediaval_project/mediaval4.jpg"
    ]
};

const demos = {
    dino_remake: [
        "assets/dino_project/dino_demo.mp4"
    ]
}

let current = 0;
let currentGallery = [];

const modal = document.getElementById("gallery");
const buttons = document.querySelectorAll(".gallery-btn");
const demoButtons = document.querySelectorAll(".video-btn");
const galleryImage = document.getElementById("gallery-image");
const galleryVideo = document.getElementById("gallery-video");
const galleryButtons = document.getElementById("gallery-buttons");

// Opening the gallery if "More Images" is clicked
buttons.forEach(button => {

    button.addEventListener("click", () => {

        const project = button.dataset.project;

        currentGallery = galleries[project];
        current = 0;

        galleryVideo.style.display = "none";
        galleryImage.style.display = "block";
        galleryButtons.style.display = "block";
        galleryImage.src = currentGallery[current];

        console.log("Button clicked");
        modal.style.display = "flex";

    });

});

// Opening the gallery if "Demo" is clicked
demoButtons.forEach(button => {

    button.addEventListener("click", () => {

        const project = button.dataset.project;

        galleryImage.style.display = "none";
        galleryVideo.style.display = "block";
        galleryButtons.style.display = "none";

        galleryVideo.src = demos[project];

        modal.style.display = "flex";

    });

});


// Close the gallery
document.getElementById("close")
.addEventListener("click", () => {

    modal.style.display = "none";
    galleryVideo.pause();

});

// Cylcing between prev and next images
document.getElementById("previous")
.addEventListener("click", () => {

    current--;

    if(current < 0){
        current = currentGallery.length - 1;
    }

    galleryImage.src = currentGallery[current];

});

document.getElementById("next")
.addEventListener("click", () => {

    current++;

    if(current >= currentGallery.length){
        current = 0;
    }

    galleryImage.src = currentGallery[current];

});
