const portfolioMainHeader = document.getElementById("portfolioMainHeader");
const portfolioContent = document.getElementById("portfolioMainContent");

fetchTranslationJSON("portfolio").then(translation => {
    portfolioMainHeader.innerHTML = translation.MAIN_HEADER;
    
        for(let i = 0; i < translation.CONTENT.length; i = i + 3 ){
            const url = translation.CONTENT[i];
            const title = translation.CONTENT[i+1];
            const text = translation.CONTENT[i+2];

            portfolioMainContent.innerHTML = portfolioMainContent.innerHTML +
            '<h4>'+'<a href="'+url+'">'+title+'</a></h4>' +
            '<p>'+text+'</p>';
        }
    })