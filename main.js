var song="";




function setup(){
canvas=createCanvas(600,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();


}

function draw(){
image(video,0,0,600,400);
}

function preload(){
    song=loadSound("sound.mp3");

}

function play(){
    song.play();

}

function stop(){
    song.stop();

}
