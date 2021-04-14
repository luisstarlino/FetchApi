window.onload = function(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(dados => console.log(dados))
}

function getUser(){
    let nome = document.getElementById('usuario').value;
    fetch('https://api.github.com/users/'+nome)
    .then(response => response.json())
    .then(dados => console.log(dados))
}