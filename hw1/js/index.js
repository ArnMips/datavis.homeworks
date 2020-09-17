let smileCheckBox = document.getElementById("smile-switcher");
let smileLabel = document.querySelector("label[for='smile-switcher']");
let smilePath = document.querySelector('path');

smilePath.style.transformOrigin = "center";

smileCheckBox.onclick = () => {
  if(smileCheckBox.checked) {
    smilePath.style.transform = "";
    smileLabel.innerHTML = "Happy";
  }
  else {
    smilePath.style.transform = "scale(1,-1) translate(0px, -130px)";
    smileLabel.innerHTML = "Sad";
  }

}
