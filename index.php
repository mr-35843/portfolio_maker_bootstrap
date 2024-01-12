<?php
//localization requirement: value for selected language
//work in progress, currently setting a quick fallback default value and hardcoded switch between dutch and english.
//As it stands now this feature will require lots of code digging to add additional languages and should be
//made easier to work with. For now it serves as an entry point to start modularizing the application. 
//Marked for rework.
if(!isset($_GET['lang'])){  //setting a default value for language by GET request
    $_GET['lang']='en';
}

switch($_GET['lang']){          //setting the language variable in the global scope.
    case "en";
    $language = 'en';
    break;

    case "nl";
    $language = 'nl';
    break;

    default;
    $language = 'en';
}
//loading view components. Add components in the order you wish to display them to add features. 
//head must be loaded first as it contains the frameworks used by other components.
require("components/head/index.html");
require("components/language/main.php");
require("components/navbar/index.html");
require("components/about/index.html");
require("components/skills/index.html");
require("components/availability/index.html");
require("components/contact/index.html");
require("components/portfolio/index.html");
?>    
</body>
</html>