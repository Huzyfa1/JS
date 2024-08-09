const name = "huzaifa"

const repoCount = "5"

console.log(`My name is ${name} and repo count is ${repoCount}`);

const gameName = new String('huzaifa-1-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('f'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   huzaifa    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://huzaifa.com/huzaifa%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


