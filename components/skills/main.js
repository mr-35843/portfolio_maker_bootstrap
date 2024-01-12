const skillsMainHeader = document.getElementById("skillsMainHeader");
const skillsListOne = document.getElementById("skillsListOne");
const skillsListTwo = document.getElementById("skillsListTwo");
const skillsListThree = document.getElementById("skillsListThree");
const skillsExtraContent = document.getElementById("skillsExtraContent");

fetchTranslationJSON("skills").then(translation =>{
    skillsMainHeader.innerHTML = translation.MAIN_HEADER;
    skillsListOne.innerHTML = translation.LIST_ONE;
    skillsListTwo.innerHTML = translation.LIST_TWO;
    skillsListThree.innerHTML = translation.LIST_THREE;
    skillsExtraContent.innerHTML = translation.EXTRA_CONTENT;
})