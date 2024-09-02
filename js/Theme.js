
function darkTheme () {
    const darkmode = document.querySelector(".darkmode");
    let dark = document.querySelector("body");
    
    darkmode.addEventListener("click", () => {
        dark.classList.toggle("bg-dark-mode");
    });
};

darkTheme();