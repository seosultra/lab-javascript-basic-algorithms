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
///////// BONUS 1
let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id accumsan metus. Nullam at felis congue, volutpat odio quis, hendrerit odio. Nulla imperdiet cursus eros, eu dignissim massa feugiat et. Curabitur tellus odio, finibus id mauris quis, tristique sollicitudin tellus. Maecenas eu dignissim purus. Ut ut mauris eu ante ornare ultrices. Praesent lorem diam, lobortis nec nunc in, ultrices accumsan neque. Nullam id nisi quis massa euismod euismod. In tempus neque orci, non laoreet libero lacinia nec. In facilisis lacinia turpis eu placerat. Donec cursus facilisis est, nec scelerisque dui congue in. Praesent quis laoreet lectus. Donec sit amet sem non lorem tristique cursus. Nunc blandit euismod pellentesque. Vivamus pretium non sem viverra vehicula. In accumsan sapien vitae nisl eleifend posuere quis in orci. Suspendisse in sagittis tortor, et feugiat augue. Integer tortor nunc, molestie sed ligula eget, hendrerit laoreet erat. Curabitur ornare, neque eget commodo varius, nunc nulla ullamcorper odio, id venenatis lacus ante non sem. Etiam cursus vehicula risus, vitae semper est consequat at. Sed iaculis a mi id volutpat. In ut urna ultrices, sollicitudin tortor ac, semper nisi. Ut ex sem, facilisis in ipsum non, gravida sollicitudin urna. Cras auctor neque nec orci volutpat, ut pellentesque turpis aliquam. Curabitur consequat imperdiet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam dignissim leo non felis vehicula eleifend. Fusce ante mauris, molestie at nisi et, placerat dignissim metus. Nunc feugiat tortor sit amet orci finibus, sit amet vehicula mi lacinia. Praesent nibh nulla, iaculis nec sem sit amet, consequat mollis massa. Suspendisse eget tellus sagittis risus dapibus tincidunt. Proin venenatis tincidunt eleifend. Nullam et lectus aliquam, sodales odio eget, sodales ante. Phasellus blandit at nisi eget luctus.";
function countWords(text) {
  const arr = lorem.split(" ");
  return arr.filter((word) => word !== "").length;
}
console.log(countWords(lorem));

/// count the word 'et' inside the lorem

function countEt(string, word) {
  return string.split(word).length - 1;
}
let timesEt = countEt(lorem, " et ");
console.log(timesEt);
