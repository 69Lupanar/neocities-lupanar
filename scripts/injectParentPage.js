const parent = document.querySelector(".parentPage");
const childInnerHTML = parent.innerHTML;
fetch("./parentPage.html")
.then(result => result.text())
.then(data =>
{
    parent.innerHTML = data;
    const body = document.querySelector(".main");
    body.innerHTML = childInnerHTML;
})