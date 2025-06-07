const loandingOverlay = document.getElementById("loadingOverlay");
function showLoandingOverlay(){
    loandingOverlay.classList.remove("hidden")
}

function openPage(page){
    showLoandingOverlay();

    setTimeout(() => {
        window.open(page, "_blank");
        loandingOverlay.classList.add("hidden")
    }, 900);
};

