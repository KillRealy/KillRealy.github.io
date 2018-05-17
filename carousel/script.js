var count = 1;

showImg(1);

function present (x){

	count = count + 1;
	showImg(count);


}

function showImg (x){
	var images = document.getElementsByTagName("img");

if (x>images.length) {
	count =1;
};

if (x<1) {
	count = images.length;
};

	for (var i = 0; i < images.length; i++) {
		images[i].style.display = "none";
	};

	images[count - 1].style.display = "block";
}









