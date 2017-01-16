// getting the id of two button

var button1 = document.getElementById('click1')
// adding event listner
click1.addEventListener("click" , function() {

	//getting h1 by its id
	var head= document.getElementById('foo')
	foo.innerHTML = "<h1> I'm right</h1>"
})

var button2=document.getElementById('click2')
// add event listner
click2.addEventListener("click" , function(){
	// getting h1 by its id 
	var head2=document.getElementById("foo")
	// changing the innerHTML
	foo.innerHTML="<h1> No.. I'm right!"

})

// chaning inner text of h2 or larting user 
var fly= document.getElementById("me")
// adding event listener
me.addEventListener("mouseover", function(){
	alert('Told You Not do Hover yo'	)
})
