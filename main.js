/**	
	Jukebox in JS: 6/1/18 
	Author: Aaron Taveras 

	Assignment Description: Display at least one song on the
	page when the page loads Give the user the ability to play
	that song, without using the "built-in" play button. This
	could be through a different button, through clicking or
	mousing over an image on the page, or any other device of 
	your choosing. Give the user the ability to stop that song
	without using the "built-in" stop button. Once again, this
	could be through a different button, through clicking or 
	mousing over an image on the page, or any other device of 
	your choosing. Give the user the ability to load at least
	one different song into the Jukebox besides the one that is
	loaded when the page initially renders. The whole Jukebox 
	should be backed by an object called Jukebox with methods
	to play, stop, and load songs.

**/

document

// ************************ CLASS DEFINITIONS ************************ 

// Represents a song as strings of text. 

class song{
	constructor(name,mp3){
		this.name = name;
		this.mp3 = mp3;		
	}
}

// Encapsulates an audio player with play, pause, skip, shuffle, and
// functionality to play songs in any desired order.  
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
		if(position >= 0 && position < this.playlist.length){
		this.audioPlayer.src = this.playlist[position].mp3;
		this.audioPlayer.load();
		this.playSong();
		}
		else{
			console.log("Song skipping out of bounds!");
		}
	
	}

	pauseSong(){
		audioPlayer.pause();
	}

	shuffle(){
		let pos = Math.floor(Math.random() * this.playlist.length);
		this.goToSong(pos);
	}

	loadSong(song){
		this.playlist.push(song);
	}

}

/** 
	Here we create our objects, variables, and eventListeners that will be used
	in our program. We will need a Jukebox object to operate on, 
	buttons and listeners for each of the buttons, and a listener 
	for our form in which we add new mp3s to the playlist. 
**/ 

// ************************ VARIABLES ************************ 

var myJukebox = new Jukebox();

var pauseButton = document.getElementById("pausebutton");
var playButton = document.getElementById("playbutton");
var shuffleButton = document.getElementById("shufflebutton");
var nextButton = document.getElementById("nextbutton");
var prevButton = document.getElementById("prevbutton");
var submitButton = document.getElementById("submitbutton");

// ************************ LISTENERS ************************

myJukebox.audioPlayer.addEventListener("ended",function(event){
	
	for(let i=0;i<myJukebox.playlist.length;i++){
		if(myJukebox.playlist[i].mp3 === myJukebox.audioPlayer.currentSrc){
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
	for(let i=0;i<myJukebox.playlist.length;i++){
		if(myJukebox.playlist[i].mp3 === myJukebox.audioPlayer.currentSrc){
				myJukebox.goToSong(i-1);
		}
	}
})

prevButton.addEventListener("click", function(event){
	for(let i=0;i<myJukebox.playlist.length;i++){
		if(myJukebox.playlist[i].mp3 === myJukebox.audioPlayer.currentSrc){
				myJukebox.goToSong(i+1);
		}
	}
})

submitButton.addEventListener("click", function(event){
	myJukebox.loadSong(new song("imported_song",document.getElementById(url)));
})


