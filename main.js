function preload(){

}

function setup(){
canvas=createCanvas(400, 400)
canvas.center();
video=createCapture(VIDEO)
video.hide();
tc="";
}

function draw(){
image(video, 50, 50, 300, 300)
tint(tc)
fill("cyan")
stroke("cyan")
circle(10, 10, 100)
circle(380, 390, 100)
circle(10, 390, 100)
circle(390, 10, 100)
}



function snap(){
save("myimage.png")
}