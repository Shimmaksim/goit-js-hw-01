// let userList = ['car','dog','cat'];
// let cat = userList[5];
// console.log(`item name is ${cat}`);
// userList[5] = 5;
// userList[2] = 'mouse;'
// console.log(`Amount of users ${userList.length}`);

//  userList = ['Bob Dilan', 'Jon Week', 'Tony Stark'];
// for (let i = 0; i < userList.length; i += 1){
//     console.log(`${i + 1}) User name is ${userList[i]}`)
// }

// for(const user of userList) {
//     console.log(` User name is ${user}`)
// }

// search for user

// for(const user of userList) {

//     if(user === 'Jon Week') {
//         console.log(`found user ${user}`);
//         break;
//     }
//     console.log(` User name is ${user}`)
// }

// const numberList = [1,2,3,4,5,6,7,8,9];

// for(const number of numberList) {
//     if(number % 2 === 0) {
//         console.log(`Number is ${number}`)
//         continue;
//     }
//     console.log(`Number ${number}`)
// }

// const matrix = [[1,2,3],[4,5,6], [7,8,9]];

// for (let i = 0; i < matrix.length; i++) {
//     for(let j = 0; j < matrix[i].length; j++){
//         console.log(`array item[${i}] [${j}] = ${matrix[i][j]}`);
//     }
// }

// const article = 'I need your clothes, boots and motocycle';
// const wordsArray = article.split(' ');
// const outputstring = wordsArray.join('_')
// console.log(`Boots in [${wordsArray}] on ${wordsArray.includes('boots')} position`);
// console.log(`Boots in [${wordsArray}] on ${wordsArray.indexOf('boots')} position`);
// // console.log(outputstring);

// console.log(userList);

// userList.push('super user');

// console.log(userList.slice(1,3));

// // console.log(userList.pop())

// // сделать заглавную букву большой!!!
// const article = 'need your clothes, boots and motocycle';
// const foo = article.slice(0,1).toUpperCase() + article.slice(1);

// console.log(foo)

// const userList = ['cat','Dog','mouse'];
// const user = prompt('enter userName');

// if(user === userList){
//     alert('user already exist')
// } else {
//     userlist.splise(user);
//     allert('user was added');
// }

//функциии!!!

//  const userList = ['admin', 'manager', 'employe'];

// const isUserPresent = function(user, listOfUser) {
//     return listOfUser.includes(user);
// }

// console.log(isUserPresent('manager', userList))

// function declaration!!

// const userNames = getAllUserNames(userlist);
// console.log(userNames);

// function getAllUserNames(list) {
//     let result = '';
//     for(let user of list) {
//         result = result + user + '';
//     }
//     return result;
// }

//default values

// const calculateSquare = function (width = 300, height = 100) {
//     console.log(Array.from(arguments));
//     return width * height;
// }

// const square = calculateSquare()

// console.log(square);

// //////

// const sumAllArguments = function() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i];
//   }
//   return sum;
// };

// const sum = sumAllArguments(50, 40, 30, 20, 10);

// console.log(sum);

// const width = prompt('Введите ширину');
// const height = prompt('Введите высоту');
// const long = prompt('Введите длинну');

// function sum(width, height, long) {
//   return Number(width) * Number(height) * Number(long);
// }

// console.log(sum(width, height, long));

let userList = ['car', 'dog', 'cat'];

function addUser() {
  const userLogin = prompt('Введите имя пользователя');
  return userList.push(userLogin);
}

addUser();

console.log(userList);
