const color1 = "#000000";
const color12 = "#151515"
const color2 = "#1A1A1A";
const color3 = "#1D1D1D";
const color4 = "#C4C4C4";
const color5 = "#D7D7D7";
const color6 = "#ffffff";
const color8 = "#909090";

let topButton = document.querySelector("#backToTop");

topButton.addEventListener("mouseenter", () => {
    topButton.style.cursor = "pointer";
    topButton.style.backgroundColor = color12;
});

topButton.addEventListener("mouseleave", () => {
    topButton.style.backgroundColor = color2;
});

topButton.addEventListener("click", () => {
    document.querySelector("header").scrollIntoView({
        top: 0,
        behavior: "smooth",
    });
});
