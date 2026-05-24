const sidenavDiv = document.querySelector(".sidenav");
fetch("./sidenav.html")
.then(result => result.text())
.then(data =>
{
    // Injecte la prefab de la page sidenavDiv
    sidenavDiv.innerHTML = data;
    
    // Importe également le script de la page sidenavDiv
    // s'il y en a un

    const parser = new DOMParser();
    const doc=  parser.parseFromString(data, "text/html");
    const query = doc.querySelector("script");

    if(query !== null)
    {
        const script = query.textContent;

        if(script !== null)
        {
            eval(script);
        }
    }
});