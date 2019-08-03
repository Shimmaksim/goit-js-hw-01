const ChinaCost = 100;
const ChiliCost = 250;
const AvstraliaCost = 170;
const IndiaCost = 80;
const YamaykaCost = 120;

let China = "китай";
let Chili = "чили";
let Avstralia = "австралия";
let India = "индия";
let Yamayka = "ямайка";

let userCost = prompt(
  "Введите страну в которую хотите осуществить доставку"
).toLowerCase();

switch (userCost) {
  case China:
    alert(`Доставка в ${China} будет стоить ${ChinaCost} кредитов`);
    break;

  case Chili:
    alert(`Доставка в ${Chili} будет стоить ${ChiliCost} кредитов`);
    break;

  case Avstralia:
    alert(`Доставка в ${Avstralia} будет стоить ${AvstraliaCost} кредитов`);
    break;

  case India:
    alert(`Доставка в ${India} будет стоить ${IndiaCost} кредитов`);
    break;

  case Yamayka:
    alert(`Доставка в ${Yamayka} будет стоить ${YamaykaCost} кредитов`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
