var slideIndex = 1;
showSlides (slideIndex);

function plusSlides(n)
{
	showSlides(slideIndex +=n);
}


function showSlides(n)
{
	var i;
	var slides = document.getElementsByClassName("MySlides");

	if(n>slides.length)
	{
		slideIndex=1;
	}
	if(n<1)
	{
		slideIndex = slides.length;
	}

	for(i=0;i<slides.length;i++)
	{
		slides[i].style.display = "none";
	}

	slides[slideIndex-1].style.display = "block";
}

var items = document.getElementsByClassName("item");
var i;
for (var i = 0; i < items.length; i++) {
	items[i].onclick = function()
	{
		this.classList.toggle("active");
		this.nextElementSibling.classList.toggle("show");
		return false;
	}
}