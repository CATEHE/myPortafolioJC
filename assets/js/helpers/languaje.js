
const check2 = document.getElementById('language-toggle'); 


function idioma () {


  if (check2.checked == true){
    location.href="index-en.html";

  } else {
    location.href="index.html";

  }
}

check2.addEventListener('click' ,idioma);

