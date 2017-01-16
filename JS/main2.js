var head = document.getElementById("head")
var button = document.getElementById("login-button")
// loging button 
button.addEventListener("click", function() {
	valdatForm()
})


function valdatForm(){
	if (checkPassword() == true && checkUsername() == true) {
		head.innerHTML = "<h1> Your're now logged in suckers !</h1>"
	}else{
		alert("Incorrect!")
	}
}

function checkPassword() {
 var password = document.getElementById('password').value 

 // chekcing to see if the user inputs valid pass

 if (password == "12345678") {
 	return true
 }else {
 	return false
 }
}

function checkUsername(){
	// get the elment by id 
	var username = document.getElementById('username').value
	// splitting the string 
 
	var characters = username.split("")
	// chekcing the array in side of characters 
	var presence = characters.map(function(element){
		// returning the value of array as number cheking to see 
		return Number.isInteger(parseInt(element) )
		// parseInt take an string and returns int

	})
	
	// see is true is there 
	if (presence.indexOf(true) !== -1) {
		return true
	}else {
		return false
	}
}