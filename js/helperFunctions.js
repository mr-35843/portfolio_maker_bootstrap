async function fetchTranslationJSON(component){
    const language = document.getElementById('language').innerHTML;
    const response = await fetch("components/"+component+"/translations/"+language+".json");
    const translation = await response.json();

    return  translation;
}