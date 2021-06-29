function preload(){}

function setup(){
    canvas = createCanvas(350 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("Model Loaded");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log('nose X = '+ results[0].pose.nose.x);
        console.log('nose Y = '+ results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 10, 10, 330, 270);
}

function take_snapshot() {
    save("me_with_clown_nose.png");
}