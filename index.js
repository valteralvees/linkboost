
let lnk = document.getElementById('h1')



function geraUrl (url = "example.com/",titulo){
  let withoutHifen = titulo.split(' ');
console.log(withoutHifen)
const withHifen = withoutHifen.join('-')
console.log("Confira abaixo sua URL")
console.log(url + withHifen)
}

//DATE
const data = new Date()
console.log(data)


geraUrl("megacurioso.com/", "tudo o que você deveria saber sobre chimpanzés")

//#1 ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
//Array
let usersPlayed = ['Marta', 'Lucas', 'Guilherme', 'Ronaldo']

let [primeiroNome, ,segundoNome] = usersPlayed

console.log(segundoNome + ', ' + primeiroNome +" e outras " + (usersPlayed.length - 2) +" pessoas já usaram linkBoost. Aproveite você também hoje mesmo!")

//#2USO de spread e Rest operator
//ADD botão em versão futura para ver todos. 

let [...restoUsers] = usersPlayed
console.log('VER TODOS = ' + restoUsers)

//Objeto: Tradução da aplicação para EN-ES
const userData = {nome:'Valter', idade:19, estado: 'PE'}

const {nome:name,idade:age,estado:state = 'User does not signed their state :( '} = userData
console.log()
