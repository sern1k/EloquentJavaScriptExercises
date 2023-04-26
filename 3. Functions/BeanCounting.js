function countBs(word) {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === "B") counter++;
    }
    return counter;
}

console.log(countBs("BBC"));
// → 2

function countChar(word, letter) {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) counter++;
    }
    return counter;
}

console.log(countChar("kakkerlak", "k"));
// → 4
