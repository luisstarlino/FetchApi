/*function insetUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(dados => console.log(dados));
}*/

async function insertUsers(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let dados = await response.json();
    document.getElementById('table').innerHTML = "<tr><th scope='col'> Name </th><th scope='col' > UserName </th> <th scope='col'> email </th></tr>"
    dados.forEach(function(dado){
        let name = dado.name;
        let userName = dado.username;
        let email = dado.email;
        var tr = document.createElement('tr');
        tr.innerHTML = "<td>"+ name + "</td>" + "<td>" + userName + "</td>" + "<td>" + email + "</td>" 
        document.getElementById('table').append(tr)
    })
}


