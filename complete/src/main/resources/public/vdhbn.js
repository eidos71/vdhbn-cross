$(document).ready(function() {

	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "http://172.17.51.99:8080/sev/rest/oauth/token",
	  "method": "POST",
	  "headers": {
	    "content-type": "application/x-www-form-urlencoded",
	    "authorization": "Basic VkRILVNFVjpkLUw1b05VZix1KztrPjJgRkM3SGlDLF9lOHA/cEUnei15V3ZOMkhIcGVMZFUnKUFPL0g1bD1udygheFNuTg==",
	    "cache-control": "no-cache",
	    "postman-token": "910c616c-7870-06fd-bf1a-93f245b35b34"
	  },
	  "data": {
	    "grant_type": "password",
	    "username": "usuarioTest2",
	    "password": "pass2"
	  }
	}

	$.ajax(settings).done(function (response) {
	  console.log(response);
	});
});