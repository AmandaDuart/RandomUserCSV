const pacoteFetch = require ('node-fetch');
const pacoteFs = require('fs');

async function randomUser (){
    
      pacoteFs.writeFile("./User.csv", "Nome, Sobrenome, E-mail, Idade, Genero, Usuario, Senha  \n", "utf8", err =>{
                if(err)
                throw err;   
        })
    
    const response = await pacoteFetch ("https://randomuser.me/api/?results=300");
    const responseJson = await response.json();

    for (let usuario of responseJson.results){
        const text = pacoteFs.createWriteStream("./User.csv", {flags: "a"})
        text.write(`${usuario.name.first}, ${usuario.name.last}, ${usuario.email}, ${usuario.dob.age}, ${usuario.gender}, ${usuario.login.username}, ${usuario.login.password}\n`);
    }
    
}

randomUser();