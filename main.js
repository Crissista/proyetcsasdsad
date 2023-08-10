noseX = 0;
noseY = 0;

differnce = 0;
rightWristX = 0;
leftWristX = 0;



function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet inicio');
}

function gotPoses(results){
    if (results.length  > 0)
    {
        console.log(results);
        noseX = results[0].pose.noseX;
        noseY= results[0].pose.noseY;
        console.log("noseX = " + noseX + "noseY = " + noseY);


        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);

        console.log("leftRistX = " + leftWristX + "rightRistX" + rightWristX + "difference = " + difference);


    }
}

function draw(){
    background('#969A97');
    ocument.getElementById("square_side").innerHTML = "El ancho y alto del cuadrado sera " + difference + "px";    
    fill('#F90093');

    stroke('#F90093');
    square(noseX, noseY, difference);
}