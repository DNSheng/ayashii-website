function check(form) {
	var msg = document.getElementById("error");
	var loginform = document.getElementById("loginform");
	var user = form.userid.value;
	if(user.toLowerCase() == "ayashii" && form.pswrd.value == "info") {
		msg.style.display = "none";

		var sessionTimeout = 1;
		var loginDuration = new Date();
	
		loginDuration.setTime(loginDuration.getTime() + (sessionTimeout*60*60*1000));
		document.cookie = "CrewCentreSession=valid; " + loginDuration.toGMTString() + "; path=/";
		
		// Go back to page if redirected. Otherwise, go to random page
		if (document.referrer.indexOf(location.protocol + "//" + location.host) === 0) {
			location.href = document.referrer;
		} else {
			home();
		}
	} else {
		loginform.reset();
		if (msg.style.display === "none") {
			msg.style.display = "block";
		}
	}
}

function redirect() {
	if (document.cookie.indexOf("CrewCentreSession=valid") == -1) {
		location.href = "https://ayashii.info";
	}
}

function random_site() {
	var sites = ["dmc", "blend", "gochuu", "gochuu2", "konohana", "lwa", "pripal", "tamako", "hibike", "hibike2", "llsun", "llsun2", "kon", "kon2", "flipflap", "newgame", "newgame2", "panzer", "maiddragon", "tamako", "eromanga", "eromanga", "nnb", "nnb2", "yuruyuri", "yuruyuri2", "yuruyuri3", "yuruyuriova", "yuruyuriova", "yuruyuriova2"];
	var number = parseInt(Math.random() * (sites.length));
	var rand_site = sites[number];
	var current_site = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
	// Prevent returning the same site
	if (current_site != rand_site) {
		window.location = rand_site;
	} else {
		random_site();
	}
}

function home() {
	location.href = "menu";
}
