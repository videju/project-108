var dog = 0;
var godzilla= 0;
var cat = 0;
var cow = 0;
var lion = 0;

///rfdss//
var icon = document.getElementById("icon")

icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src="sun.png"
    }else{
        icon.src="moon.png"
    }
    
}

function  startC(){
     navigator.mediaDevices.getUserMedia({audio:true});
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nVLAnyR-R/model.json',modelready)
}
function modelready() {
    classifier.classify(gotResults);
}
function gotResults(error, results){
  if(error){
      console.log(error)
  }else{
      console.log(results);
      random_number_r = Math.floor(Math.random()*255) + 1;
      random_number_g = Math.floor(Math.random()*255) + 1;
      random_number_b = Math.floor(Math.random()*255) + 1;
    document.getElementById("detected").innerHTML = " Detected Dog =  " +dog+", Detected Godzilla =   "+godzilla +", Detected cat = "+cat+", Detected cow = "+cow+", Detected lion = "+lion;
    document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    document.getElementById("animal_voices").innerHTML = "Detected Voice is of = "+results[0].label;
    document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";




} 
}

