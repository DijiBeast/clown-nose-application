noseX = 0;
noseY = 0;
function preload()
{
    clown_nose = loadImage("clown_nose.png");
}

function setup()
{
canvas = createCanvas(500, 500);
canvas.center();
video = createCapture(VIDEO);
video.size(500, 500);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function draw()
{
image(video, 0, 0, 500, 500);
fill("#eb3734");
stroke("#0a0a0a");
image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot()
{
    save("Divyamgupta.png");
}

function modelLoaded()
{
    console.log("model loaded!");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y - 10;

        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
    
    

}