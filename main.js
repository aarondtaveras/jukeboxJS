document

class song{
	constructor(name,mp3){
		this.name = name;
		this.mp3 = mp3;		
	}
}


class Jukebox{
	constructor(){
		this.playlist = [];
		this.audioPlayer = document.getElementById("audioPlayer");
		for(let i = 0; i < document.getElementsByTagName("source").length;i++){
			this.playlist[i] = new song("title",document.getElementsByTagName("source")[i].src); 
		}
	}

	playSong(){
		audioPlayer.play();
	}

	playNext(){
		audioPlayer.load();
	}

	goToSong(position){
		

		audioPlayer.src(this.playlist[position].mp3); 
	
	}

	pauseSong(){
		audioPlayer.pause();
	}

	shuffle(){
		let pos = Math.floor(Math.random() * this.playlist.length);
		goToSong(pos);
	}

}

var mySong = new song("Nocturne in Eb");
var myJukebox = new Jukebox();

console.log(myJukebox.playlist);

var pauseButton = document.getElementById("pausebutton");
var playButton = document.getElementById("playbutton");
var shuffleButton = document.getElementById("shufflebutton");
var nextButton = document.getElementById("nextbutton");
var prevButton = document.getElementById("prevbutton");

myJukebox.audioPlayer.addEventListener("ended",function(event){
	var index;
	for(let i=0;i<myJukebox.playlist.length;i++){
		if(myJukebox.playlist[i].mp3 === myJukebox.audioPlayer.currentSrc
			&& !((i + 1) >= myJukebox.playlist.length){
				myJukebox.goToSong(i+1);
		}
	}
})

playButton.addEventListener("click", function(event){
	myJukebox.playSong();
})

pauseButton.addEventListener("click", function(event){
	myJukebox.pauseSong();
})

shuffleButton.addEventListener("click", function(event){
	myJukebox.shuffle();
})

nextButton.addEventListener("click", function(event){
	myJukebox.shuffle();
})

prevButton.addEventListener("click", function(event){
	myJukebox.shuffle();
})

console.log(mySong);

