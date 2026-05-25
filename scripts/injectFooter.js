const footerDiv = document.querySelector(".footer-bottom-0");
fetch("./footer.html")
.then(result => result.text())
.then(data =>
{
    // Injecte la prefab de la page footerDiv
    footerDiv.innerHTML = data;
});