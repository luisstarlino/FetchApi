window.onload = function(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(dados => putImage(dados));
}

//JOGANDO A IMG NO CONSOLE
function jogarTag(dados){
    let link_imagem= dados.message;
    console.log(link_imagem)
}

//JOGANDO A IMAGEM NO ARQUIVO
function putImage(dados){
    let img =  dados.message;
    document.getElementById('imagem').innerHTML = "<img src='"+img+"'>"
}

function getUser(){
    let nome = document.getElementById('usuario').value;
    fetch('https://api.github.com/users/'+nome)
    .then(response => response.json())
    .then(dados => console.log(dados))
}