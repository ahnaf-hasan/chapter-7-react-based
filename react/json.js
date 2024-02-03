// 1. JSON 

const student  = {

    name: 'Drew David',

    age: 45,

    movies: [ 'Star',  'In Cinema' ] 
}

const studentJSON = JSON.stringify(student);
 console.log(student);

 console.log(studentJSON);


const studentObj = JSON.parse(studentJSON);

 console.log(studentObj);


fetch('url')

.then(res => res.json())


.then(data => console.log(data));


const keys = Object.keys(student);

const values = Object.values(student);


const numbers = [23, 54, 67, 87, 23, 78];

numbers.forEach( num => console.log(num));

numbers.map( num => num * 2);



const products = [

    { name: 'webcam', price: 700, brand: 'AhTa'},
    { name: 'cam', price: 700, brand: 'AhTa'},
    { name: 'web', price: 700, brand: 'AhTa'},

];




const newProduct = {

    name: 'webcam', price: 700, brand: 'AhTa'

};

const newProducts = [...products, newProduct];


const remaining = products.filter(product => product.name !== 'phone');





