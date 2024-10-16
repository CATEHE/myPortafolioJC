
const check2 = document.getElementById('language-toggle'); 


function idioma () {


  if (check2.checked == true){
    location.href="index-en.html";
    window.alert('pagina en ingles');

  } else {
    location.href="index.html";
    window.alert('pagina en español');

  }
}

check2.addEventListener('click' ,idioma);

