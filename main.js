song="";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";


function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,600,500) ;

}
function modelloaded(){
console.log("posenet is initialized");


}

function preload(){

song=loadSound("song2.mp3");


}
function play(){
song.play();
song.setVolume(1);
song.rate(1);
}


function gotPoses(results){
if(results.length>0){
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("leftWristX"+leftWristX+"leftWristY"+leftWristY);

rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("rightWristX"+rightWristX+"rightWristY"+rightWristY);
}



}