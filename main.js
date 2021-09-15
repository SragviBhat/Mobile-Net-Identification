
function setup(){
canvas = createCanvas(300, 300);
canvas.position(580, 400)
webcam = createCapture(VIDEO);
webcam.hide();

classifier = ml5.imageClassifier("MobileNet", modelLoaded);
}

function draw(){
image(webcam, 0, 0, 300, 300);

classifier.classify(webcam, gotResults);
}

function modelLoaded(){
console.log("Model Is Loaded");
}
    
function gotResults(error, results){
if(error){
console.error(error);
}
else{
console.log(results);
document.getElementById("obj"). innerHTML = results[0].label;
document.getElementById("acc"). innerHTML = results[0].confidence.toFixed(3);
}
}
