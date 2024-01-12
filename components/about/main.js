const aboutMainHeader = document.getElementById("aboutMainHeader");
const aboutMainContent = document.getElementById("aboutMainContent");
const aboutMainImage = document.getElementById("aboutMainImage");
const aboutSecondaryHeader = document.getElementById("aboutSecondaryHeader");
const aboutProjectBasedHeader = document.getElementById("aboutProjectBasedHeader");
const aboutProjectBasedContent = document.getElementById("aboutProjectBasedContent");
const aboutEmploymentBasedHeader = document.getElementById("aboutEmploymentBasedHeader");
const aboutEmploymentBasedContent = document.getElementById("aboutEmploymentBasedContent");
const aboutWhatIWantImage = document.getElementById("aboutWhatIWantImage");

fetchTranslationJSON('about').then( translation => {
    aboutMainHeader.innerHTML = translation.MAIN_HEADER;
    aboutMainContent.innerHTML = translation.MAIN_CONTENT;
    aboutSecondaryHeader.innerHTML = translation.SECONDARY_HEADER;
    aboutProjectBasedHeader.innerHTML = translation.PROJECT_BASED_HEADER;
    aboutProjectBasedContent.innerHTML = translation.PROJECT_BASED_CONTENT;
    aboutEmploymentBasedHeader.innerHTML = translation.EMPLOYMENT_BASED_HEADER;
    aboutEmploymentBasedContent.innerHTML = translation.EMPLOYMENT_BASED_CONTENT;
})