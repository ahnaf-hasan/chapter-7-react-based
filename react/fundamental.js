// 1. How to declare a variable using let and const 




const fatherName = 'Kamal';

let season = 'winter';

season = 'summer';



// 2.conditions

// 6 basic conditions : < , >, ===, !==, <=, >=

// multiple conditions: &&, ||






if (fatherName === 'kamal' || season === 'winter') {


}

else if (fatherName === 'kamal') {


}

else {


}




// 3. array declare 

// 4. index,

// length, push




const numbers = [12, 13, 14, 15];

const number = number[i];

console.log(number);




// 5. function




function multiply(num1, num2) {

    const result = num1 * num2;

    return result;


}


const output = multiply(35, 78);



// 6. object

// access property





const student = {

    name: 'Ahnaf Tahmid Hasan',

    age: 32,

    About: ['Ahnaf Hasan', 'Dhakai Thake']




}





const myVariable = 'age';

console.log(student.age) // direct by property 

console.log(student['age']); // access via property  name string 


console.log(student[myVariable]); // access via property  name in a variable

