/*function insetUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(dados => console.log(dados));
}*/

async function insertUsers(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let dados = await response.json();
    console.log(dados);
}