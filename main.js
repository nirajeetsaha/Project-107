dog = 0;
cat = 0;
cow = 0;
lion = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hByy-Ub73/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

