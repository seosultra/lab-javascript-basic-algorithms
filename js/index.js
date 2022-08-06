// Iteration 1: Names and Input

let hacker1 = "Driver";
console.log(`The drive's name is ${hacker1}`);
let hacker2 = "Navigator";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
// print the characters name separated by space & capital of the driver
for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1.charAt(i).toUpperCase());
}
//print the characters reversed of the navigator name.
let i = hacker2.length;
for (; i >= 0; ) {
  console.log(hacker2.charAt(i));
  i--;
}

let o = hacker2.length;
while (o > 0) {
  o--;
  console.log(hacker2.at(o).toUpperCase());
}

if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goed first`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}
