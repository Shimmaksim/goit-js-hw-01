// let password, salery;
// const userName ='Bob';
// const userLastName ='dilan';
// const age = 55;
// let isloggedin = false;
// const VAT = 0.2;



// isloggedin = confirm('are you loggedin?');

// if(isloggedin) {
//     const  salaryWithoutVAT = prompt('enter your salery');
//     salary = +salaryWithoutVAT * (1 - VAT);
//     console.log(salary);
// }

// const foo = 5 % 3;
// let isEven = foo === 2;
// console.log(isEven)


// const result = `hello ${userName} ${userLastName}!!
//       Your age is ${age}. Your salary ${salary}`;

//       alert(result);


// if(userName && userLastName && salery) {
//     console.log('is valid')
// }

// else if(userName || userLastName salery) {
//     confirm.log('something fullfilled')
// }

// const a = 'hello';
// const b = !!a;




// const foo;

// if ( foo > 10) {

// } else if (foo === 9) {

// } else {
//     console.log(foo)
// }

// const age = prompt('enter your age');
// const child = 10 - 20;
// const adult = 20 - 50;
// const granny =  50;









// const age = prompt('enter your age');


// if(age <= 20){
//     message = 'child';
// }
// else if(age <= 50 && age > 20) {
//     message = 'adult';
// }
// else if(age > 50) {
//     message = 'granny';
// }

// alert(message);






// let apple = 10;

// while(apple >= 0) {
//     console.log(`apple=${apple}`);
//     apple = apple - 100;
// }



// do{
//     console.log(`apple=${apple}`);
// } while(apple > 200); 


// for (let i = 0; i < apple; i = i + 2) {
//     console.log(`index=${i}`)
// }



const userName = 'Bob';
const userLastName = 'Dilan';
const userLogin = 'Bob91';
const userPassword = 'Dilan91';

let isUserLoginValid = false;
let isUserPassworValid = false;

while(!isUserLoginValid){
    const userInput = prompt('input your login');
    if (userInput === userLogin) {
        isUserLoginValid = true;
    }
}
while(!isUserPasswordValid){
    const userInput = prompt('input your password');
    if (userInput === userPassword) {
        message = 'welcome';
        isUserPasswordValid = true;
    }
}
alert(message);