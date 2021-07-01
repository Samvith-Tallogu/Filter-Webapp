
nosex = 0;
nosey = 0;
function preload(){
    mous = loadImage('https://i.postimg.cc/Yqc5MVBV/mts.png');
}

function setup(){
    canvas = createCanvas(350 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x - 38;
        nosey = results[0].pose.nose.y - 1;
        console.log('nose X = '+ nosex);
        console.log('nose Y = '+ nosey);
    }
}

function modelLoaded() {
    console.log("Model Loaded");
}


function draw(){
    image(video, 0, 0, 350, 300);
   // circle(nosex, nosey, 20);
    //stroke(255, 0, 0);
    //fill(255, 0, 0);
    image(mous, nosex, nosey, 80, 40);
}

function take_snapshot() {
    save("me_with_moustache.png");
}