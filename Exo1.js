// Reponse numero 1
const txt = 'Il gagne 4000 euros de salaire par mois, 10000 euros de bonus annuel, 5500 euros de cours en ligne par mois. '
let salaire = 4000 
let bonus = 10000
let cours = 5500
let revenuAnuelTotal = salaire + bonus + cours
console.log("revenu anuel total :" ,revenuAnuelTotal, "euro");


// Reponse numero 3
function estVariableValide(nomVariable) {
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return regex.test(nomVariable);
}
console.log(estVariableValide('first_name'));
console.log(estVariableValide('first-name'));
console.log(estVariableValide('1first_name'));
console.log(estVariableValide('firstname'));