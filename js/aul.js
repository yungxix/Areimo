 

let userA = [
    { username: 'Michael Jordan', pass: 010, id: 01, country: 'paraguay'}, 
    { username: "Jeremy Auck", pass:  020, id: 02, country: 'Urguay'}, 
    { username: "Federico Pascal", pass: 030, id: 03, counrty: 'Argentina'} ]

// function users(username, pass) {
//      let entityA = userA.username
//      let entityB =  userA.pass
// }

function getUser(username, pass) {
    let user = userA.find(user => user.username === username && user.pass === pass)
    return user
}

const user = getUser('Michael Jordan', 010)