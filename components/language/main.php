<?php
echo '
<div id="language" style="display: none;">'.$language.'</div>
<script src="js/helperFunctions.js"></script> 
';
//the script placement is a bit iffy. It's placed here because the helperFunction that is contained in the script is 
//dependent on the #langague ID and placement here allows for dependancy injection. 

?>