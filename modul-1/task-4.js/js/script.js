const credits = 23580;
const pricePerDroid = 3000;
// let totalPrice = userPay * pricePerDroid;
const userPay = prompt('Сколько дроидов вы хотите купить?')
let totalPrice = userPay * pricePerDroid;
if(userPay === null){
    message = 'Отменено пользователем!';
} 
else if(totalPrice <= credits){
    message = `Вы купили ${userPay} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
} 
else if(totalPrice >= credits){
    message = 'Недостаточно средств на счету!'
}
alert(message);