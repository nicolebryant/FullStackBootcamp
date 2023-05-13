let maxNum = parseInt(prompt("Enter the maximum number: "));
while (!maxNum) {
    maxNum = parseInt(prompt("Enter a valid maximum number:"));
}
const targetNum = Math.floor(Math.random() * maxNum) + 1;
console.log(targetNum);
let guess = prompt("Enter your first guess (Type 'q' to quit): ");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') {
        break;
    }
    attempts++;
    if (guess > targetNum) {
        guess = (prompt("Too high! Try again (Type 'q' to quit): "));
    } else {
        guess = (prompt("Too Low! Try again (Type 'q' to quit): "));
    }
}

if (guess === 'q') {
    console.log("Okay, you quit!");
} else {
    console.log(`You got it! It took you ${attempts} guess(es)!`);
}