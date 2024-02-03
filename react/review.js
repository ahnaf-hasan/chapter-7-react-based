// const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);


// Find Out


// const special = products.find(p => p.name.includes('n'));

// console.log(specilal);


// 1. array destructing

const numbers = [42, 65];

// const x = numbers[0];

// const y = numbers[1];

// const [x, y] = [42, 65];

const [x, y] = numbers;

function boxify(num1, num2){

    const nums = [num1, num2];

    return nums;
}

// console.log(x, y);

// const [first, second] = [90, 35]

//  const [first, second] = boxify(90, 35);

console.log(boxify(90, 35));


const student = {

    name: 'Ahnaf Hasan',
    age: 26,

    hobby: ['Coding', 'Development']


}

const [firstHobby, secondHobby] = student.hobby;

// object destructuring 

const { name1, age2 } = {name: 'bulu', age: 15 };

const { name, age } = { id: 11, name: 'bulu', salary: 3400, age: 15 };



const employee = {

    id3: 'visiual code',

    designation: 'developer',

    machine: 'mac',

    languages: ['html', 'css', 'js'],

    specification: {

        height: 66,

        weight: 67,

        address: 'bogura',

        drink: 'whisky'




    }
    
}

const { machine, id } = employee;

const { weight, address } = employee.specification;





