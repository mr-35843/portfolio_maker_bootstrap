const availabilityHeader = document.getElementById("availabilityHeader");
const availabilityContent = document.getElementById("availabilityContent");

fetchTranslationJSON("availability").then(translation => {
    availabilityHeader.innerHTML = translation.MAIN_HEADER
    availabilityContent.innerHTML = translation.CONTENT;
})