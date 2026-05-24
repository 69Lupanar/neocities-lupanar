const baseLayoutDiv = document.querySelector(".base-layout");
const childInnerHTML = baseLayoutDiv.innerHTML;    // Retient le contenu de la page actuelle pour le réinsérer après
fetch("./baseLayout.html")
.then(result => result.text())
.then(data =>
{
    // Injecte la prefab de la page baseLayoutDiv
    baseLayoutDiv.innerHTML = data;
    
    // Une fois le contenu importé,
    // on réinsère le contenu précédent dans l'élément importé
    const body = document.querySelector(".main");
    body.innerHTML = childInnerHTML;

    // Importe également le script de la page baseLayoutDiv
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