
let myVar = 5;
if (myVar) {


    myVar = myVar * 100;
}

else {

    myVar = 0;
}

let myMoney = 50;

if(!myMoney){


}


const money = 80;

let food;

if (money > 100){

    food = 'biryani';
}

else {

    food = 'kofee tea'
}

let food1 = money > 100 ? 'biryani' : 'kofee tea';

console.log(food1);


let drink = (money > 100 && myVar > 100) ? 'coke' : 'water';

console.log(drink);

const num1 = 52;

console.log(num1);

const numStr = num1 + '';

console.log(numStr)


// string to number 

const input = '560';

const inputNum = +input;

console.log(inputNum);





const isActive = true;

const showUser = () => console.log('Hi everyone');
const hideUser = () => console.log('Hellow everyone');


// etar maddome result show hoi given below part

isActive ? showUser() : hideUser();

isActive && showUser();

isActive || hideUser();