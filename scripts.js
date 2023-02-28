var toggle_btn = document.getElementById('theme-btn');
var body = document.getElementsByTagName('body')[0];
var dark_theme_class = 'dark';
var light_theme_class = 'light-theme';
const myImg = toggle_btn.querySelector('img');


toggle_btn.addEventListener('click', function() {

 if (body.classList.contains(dark_theme_class)) {


 body.classList.remove(dark_theme_class);


}

 else {

 body.classList.add(dark_theme_class);


}

  if (myImg.src.includes('https://img.icons8.com/fluency/18/null/crescent-moon.png')) {

    myImg.src = 'https://img.icons8.com/emoji/18/000000/bright-button-emoji.png';
    myImg.alt = 'Soleil';
  } else {

    myImg.src = 'https://img.icons8.com/fluency/18/null/crescent-moon.png';
    myImg.alt = 'Lune';
  }

});


document.getElementById("theme-btn").addEventListener("click", changerBulle1);
var etatB = false;
function changerBulle1() {
  var InS = document.getElementById("InfS");
  var Bulle2 = document.getElementById("Bulle2");
  var Bulle = document.getElementById("Bulle1");
  if (etatB) {
    InS.src = "infoshoot.svg", 
    Bulle2.src = "Bulle2.svg";
    Bulle.src = "Bulle1.svg";
  } else {
    InS.src = "infoshootbis.svg";
    Bulle2.src = "Bulle2bis.svg";
    Bulle.src = "Bulle1bis.svg";
  }
  etatB = !etatB;
}



