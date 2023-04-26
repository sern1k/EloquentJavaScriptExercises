for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
        continue;
    }
    if (i % 3 === 0) {
        console.log('Fizz');
        continue;
    }
    if (i % 5 === 0) {
        console.log('Buzz');
        continue;
    }
    console.log(i);
}

// 2nd version
for (let i = 1; i < 101; i++) {
    let output = "";
    if (n % 3) output += "Fizz";
    if (n % 5) output += "Buzz";
    console.log(output || i);
}
