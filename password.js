/*
Welcome the user to the password validator
Prompt the user for a password to validate
Check if the user's password is at least 10 characters long
If the user's password meets the constraint, show a success message to the user
If the password fails the constraint, show a failure message to the user
*/

let longString = `.##......##.########.##........######...#######..##.....##.######## \n` + `.##..##..##.##.......##.......##....##.##.....##.###...###.##...... \n` + `.##..##..##.##.......##.......##.......##.....##.####.####.##...... \n` + `.##..##..##.######...##.......##.......##.....##.##.###.##.######.. \n` + 
`.##..##..##.##.......##.......##.......##.....##.##.....##.##...... \n` + `.##..##..##.##.......##.......##....##.##.....##.##.....##.##...... \n` + `..###..###..########.########..######...#######..##.....##.######## \n`

const readline = require('readline');
const { ReadableStreamBYOBRequest } = require('stream/web');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(longString)

reader.question("Welcome to the password validator! Please type a password to validate:", function(input){
        tokens = input.split()

        userPassword = tokens[0];

        if (userPassword.length >= 10 && userPassword == userPassword.toUpperCase()){
            console.log("Your password has been validated!")
        } else if(userPassword.length >= 10){
            console.log("Password requires an uppercase letter.")
        } else if(userPassword == userPassword.toUpperCase()){
            console.log("Password is not long enough.")
        } else {
            console.log("Password validation has failed.")
        }
        
        reader.close()

});