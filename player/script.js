var songs = ["1.mp3","2.mp3","3.mp3","4.mp3"];
var imgs = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];

var strSong = document.getElementById('strSong');
var slider = document.getElementById('fill');
var timer = document.getElementById('timer');





var song = new Audio();
var numSong = 0;




function songPlay (){

	song.src = "songs/" + songs [numSong];
	strSong.textContent = songs [numSong];
	song.play();





	


}

function songPause (){
	if (song.play) {
		song.pause();
		
	}

	else {
		song.play();
		
	}

	
}


song.addEventListener("timeupdate",function(){

	var progress = song.currentTime / song.duration;

	slider.style.width = progress * 100 + "%";

	timeConvert(Math.round(song.currentTime));

	if (song.ended) {

		nextSong();
	}

});

function timeConvert(seconds){
    var minute = Math.floor(seconds/60);
    var sec = seconds % 60;
	

	minute = (minute<10)? "0" + minute:minute;
	sec = (sec<10)? "0" + sec:sec;
	timer.textContent = minute + ":" + sec;


allTimer (Math.round(song.duration));

}

function allTimer(seconds){

    var minute = Math.floor(seconds/60);
    var sec = seconds%60;
	

	minute = (minute < 10) ? "0" + minute:minute;
	sec = (sec < 10) ? "0" + sec:sec;

	timer.textContent += " / "  + minute + ":"  + sec;


}

function nextSong(){

	numSong++;
	if (numSong > 3) {
		numSong = 0;
	}

    
   $("#images img").attr("src",imgs[numSong]); 





	songPlay();
	
}

function prevSong(){

	numSong--;
	if (numSong < 0) {
		numSong = 3;
	}

    
   $("#images img").attr("src",imgs[numSong]); 





	songPlay();
	
}

