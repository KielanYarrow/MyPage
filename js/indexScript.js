	//set the plant button to active colour
	document.getElementById("plant").style.borderColor = '#565e64';
	document.getElementById("plant").style.backgroundColor = '#565e64';
		
	//console.log(document.querySelectorAll("button"));
	var theyChangedTheImage = false; 
	var oldWindowSize = window.innerWidth;
	var currentBackImage = "plant";

	function getPixelSize(sWidth) {
		let dimString = "";
		if (sWidth > 1399) {
  				dimString = "1320x743"
			} else if (sWidth > 1199) {
			  	dimString = "1140x642"
			} else if (sWidth > 991) {
			  	dimString = "960x541"
			} else if (sWidth > 767) {
			  	dimString = "720x406"
			} else {
			  	dimString = "540x305"
			}
		return dimString;
	}

    function dealWithClick(e) {

    	//console.log(this);
    	//console.log(e);
    	//console.log(window.innerWidth);
    	
    	//there is a fourth button associated with the menu, so
    	//must rule that out
    	if (e.target.nodeName == "BUTTON" && 
    		e.target.className != "navbar-toggler" &&
    		e.target.className != "navbar-toggler collapsed") {
    		//turn all buttons to base colour
    		document.getElementById("plant").style.borderColor = '#6c757d';
			document.getElementById("plant").style.backgroundColor = '#6c757d';
			document.getElementById("river").style.borderColor = '#6c757d';
			document.getElementById("river").style.backgroundColor = '#6c757d';
			document.getElementById("duck").style.borderColor = '#6c757d';
			document.getElementById("duck").style.backgroundColor = '#6c757d';
			//return clicked button to dark colour
			document.getElementById(e.target.id).style.backgroundColor = '#565e64';
			document.getElementById(e.target.id).style.borderColor = '#565e64';
			//change background picture with reference to screen size
			
			let myWidth = window.innerWidth;
			let dimString = getPixelSize(myWidth);
			pictureString = "url(./images/YarrowBackdrop" + e.target.id + dimString + ".jpg)";
			document.querySelector(".mainImage").style.backgroundImage = pictureString;
			theyChangedTheImage = true;
			currentBackImage = e.target.id;
			oldWindowSize = myWidth;
    	}
    }

    function updatePictureSize(e2) {
    	//only fire if they have messed with the buttons/back image and are sizing up
    	if (theyChangedTheImage == true && window.innerWidth > oldWindowSize) {
    		let oldString = getPixelSize(oldWindowSize);    		
    		let dimString = getPixelSize(window.innerWidth);
    		if (dimString != oldString) {
    			//console.log('updated picture!')    			
				pictureString = "url(./images/YarrowBackdrop" + currentBackImage + dimString + ".jpg)";
				document.querySelector(".mainImage").style.backgroundImage = pictureString;
				oldWindowSize = window.innerWidth;
			}
    	}
    }

// Unobtrusive event binding
    //document.querySelector("button").addEventListener("click", sayHello);
    //document.getElementById("plant").addEventListener("click", backgroundEqualsPlant);
    //event listening for clicks anywhere on the whole document:
    document.addEventListener("click", dealWithClick);

    window.addEventListener('resize', updatePictureSize);

    