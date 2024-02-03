const person = {

    name: 'karim kalam jamal',

    profession: 'Scientist',

    age: 45,

    address: 'Bangladesh',

    30: 'Rainy day',

    'son-name': 'hasan',

}

// dot notation 

const prof1 = person.profession;

//bracket notation 

// const prof2 = person[profession];
const prof2 = person["profession"];

// console.log(prof2);


const pName = 'profession';

const prof3 = person[pName];

console.log(prof3);

const season = person[30];

console.log(season);


const son = person['son-name'];

console.log(son);






