const heroName = "Hulk";
const heroColor = "green";
const heroRealName = "Benner";

const hulk = {
  name: "Hulk",

  color: "green",
  realName: "Benner",
  hulkTalk() {
    console.log(`I am ${this.name}`);
  },
  gethulkRealName: function() {
    console.log(`I am ${this.realName}`);
  },
  getName() {
    return this.name;
  }
};

hulk.hulkTalk();
hulk.gethulkRealName();

const mickyMouse = {
  name: "Micky",
  color: "Black",
  realName: "Micky",
  getName: function() {
    console.log(this, "---ghdnsdsddn-");
    console.log(this.name);
    return this.name;
  },
  getColor: function() {
    console.log(this.color);
    return this.color;
  },
  getName() {
    return this.name;
  }
};

//
//
console.log(
  `this mous name ${mickyMouse.getName()} and color mouse ${mickyMouse.getColor()}`
);
mickyMouse.getName();
mickyMouse.getColor();

const guffy = {
  name: "Guffi",
  color: "Black",
  realName: "Guffi",
  getName() {
    return this.name;
  }
};

const dreamTeam = [hulk, mickyMouse, guffy];

for (let hero of dreamTeam) {
  console.log(hero.getName());
}

// function getHerosByColor(color) {
//   let result = [];
//   for (let hero of dreamTeam) {
//     if (hero.color === color) {
//       result.push(hero);
//     }
//   }
//   return result;
// }

// console.log(getHerosByColor("Black"));

function getHeroNameAndRealName(hero) {
  return console.log(`name: ${hero.name} and real-name: ${hero.realName}`);
}

getHeroNameAndRealName(hulk);
getHeroNameAndRealName(guffy);
getHeroNameAndRealName(mickyMouse);

const totalPrise = 100;
const limit = 150;

const cart = {
  storeName: "Nike",
  totalPrise: totalPrise,
  limit: limit
};
