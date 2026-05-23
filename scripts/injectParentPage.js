const parent = document.querySelector(".parentPage");
const childInnerHTML = parent.innerHTML;    // Retient le contenu de la page actuelle pour le réinsérer après
fetch("./parentPage.html")
.then(result => result.text())
.then(data =>
{
    // Injecte la prefab de la page parent
    parent.innerHTML = data;
    const body = document.querySelector(".main");
    
    // Une fois le contenu importé,
    // on réinsère le contenu précédent dans l'élément importé
    body.innerHTML = childInnerHTML;

    // Importe également le script de la page parent
    // s'il y en a un

    const parser = new DOMParser();
    const doc=  parser.parseFromString(data, "text/html");
    const script = doc.querySelector("script").textContent;

    if(script !== null)
    {
        eval(script);
    }
});